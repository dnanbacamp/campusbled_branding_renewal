"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const CAMERA_Z = 7.5;
const VERT_FOV_DEG = 42;

interface HubConfig {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  distort: number;
}

// Brand-color "hub" spheres, spread from the far left to the right edge of
// the frame so the network reads full-bleed on wide desktop viewports.
const HUBS: HubConfig[] = [
  { position: [-4.4, 0.9, -3.4], scale: 1.05, color: "#123A5C", speed: 1.2, distort: 0.28 },
  { position: [-2.3, -1.7, -4.4], scale: 0.9, color: "#7FB2D6", speed: 0.9, distort: 0.26 },
  { position: [0.4, 1.5, -2.2], scale: 1.5, color: "#EE7A1E", speed: 1.1, distort: 0.32 },
  { position: [3.0, 1.2, -3.2], scale: 1.9, color: "#F6A63C", speed: 0.8, distort: 0.24 },
  { position: [1.8, -0.9, -2.6], scale: 1.15, color: "#123A5C", speed: 1.4, distort: 0.3 },
  { position: [3.9, -1.1, -4.2], scale: 1.0, color: "#7FB2D6", speed: 1.0, distort: 0.22 },
];

const SATELLITE_COUNT = 72;
const SATELLITE_COLORS = ["#ffffff", "#EE7A1E", "#7FB2D6", "#F6A63C", "#123A5C"];
const NEIGHBORS_PER_NODE = 5;

interface NodeData {
  base: THREE.Vector3;
  scale: number;
  color: string;
  speed: number;
  phase: number;
  isHub: boolean;
  distort?: number;
}

/** Half the frustum width visible at a given distance from the camera. */
function visibleHalfWidth(depth: number, aspect: number) {
  const vFov = (VERT_FOV_DEG * Math.PI) / 180;
  return Math.tan(vFov / 2) * depth * aspect;
}

function buildNodes(aspect: number): NodeData[] {
  const nodes: NodeData[] = HUBS.map((h, i) => ({
    base: new THREE.Vector3(...h.position),
    scale: h.scale,
    color: h.color,
    speed: h.speed,
    phase: i * 10,
    isHub: true,
    distort: h.distort,
  }));

  for (let i = 0; i < SATELLITE_COUNT; i++) {
    const z = -7.2 + Math.random() * 6.7; // -7.2 .. -0.5
    const depth = CAMERA_Z - z;
    const halfW = visibleHalfWidth(depth, aspect) * 0.94;
    const x = (Math.random() * 2 - 1) * halfW;
    const y = -3.3 + Math.random() * 6.6;
    nodes.push({
      base: new THREE.Vector3(x, y, z),
      scale: 0.05 + Math.random() * 0.09,
      color: SATELLITE_COLORS[Math.floor(Math.random() * SATELLITE_COLORS.length)],
      speed: 0.5 + Math.random() * 0.8,
      phase: Math.random() * 100,
      isHub: false,
    });
  }
  return nodes;
}

/** Connect every node to its nearest neighbors so the cluster reads as a mesh/network. */
function buildEdges(nodes: NodeData[]): [number, number][] {
  const edgeSet = new Set<string>();
  const edges: [number, number][] = [];

  for (let i = 0; i < nodes.length; i++) {
    const distances = nodes
      .map((n, j) => ({ j, d: i === j ? Infinity : nodes[i].base.distanceTo(n.base) }))
      .sort((a, b) => a.d - b.d);

    for (let k = 0; k < NEIGHBORS_PER_NODE; k++) {
      const j = distances[k].j;
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!edgeSet.has(key)) {
        edgeSet.add(key);
        edges.push([i, j]);
      }
    }
  }
  return edges;
}

function NetworkField({ still }: { still: boolean }) {
  const { size, pointer } = useThree();
  const aspect = size.width / size.height;
  const nodes = useMemo(() => buildNodes(aspect), [aspect]);
  const edges = useMemo(() => buildEdges(nodes), [nodes]);
  const objRefs = useRef<(THREE.Object3D | null)[]>([]);
  const lineRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);
  const linePositions = useMemo(() => new Float32Array(edges.length * 2 * 3), [edges.length]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    nodes.forEach((n, i) => {
      const obj = objRefs.current[i];
      if (!obj) return;
      if (still) {
        obj.position.copy(n.base);
        return;
      }
      const tt = t * n.speed + n.phase;
      const sway = n.isHub ? 0.35 : 0.16;
      obj.position.set(n.base.x + Math.sin(tt * 0.4) * sway, n.base.y + Math.cos(tt * 0.35) * sway, n.base.z);
    });

    const line = lineRef.current;
    if (line) {
      const positions = line.geometry.attributes.position.array as Float32Array;
      edges.forEach(([a, b], idx) => {
        const pa = objRefs.current[a]?.position;
        const pb = objRefs.current[b]?.position;
        if (!pa || !pb) return;
        positions.set([pa.x, pa.y, pa.z, pb.x, pb.y, pb.z], idx * 6);
      });
      line.geometry.attributes.position.needsUpdate = true;
    }

    const group = groupRef.current;
    if (group && !still) {
      const targetRotX = -pointer.y * 0.35;
      const targetRotY = pointer.x * 0.55;
      const targetRotZ = pointer.x * pointer.y * 0.2;
      group.rotation.x += (targetRotX - group.rotation.x) * 0.045;
      group.rotation.y += (targetRotY - group.rotation.y) * 0.045;
      group.rotation.z += (targetRotZ - group.rotation.z) * 0.045;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((n, i) => (
        <mesh
          key={i}
          ref={(el) => {
            objRefs.current[i] = el;
          }}
          position={n.base}
          scale={n.scale}
        >
          <sphereGeometry args={[1, n.isHub ? 48 : 10, n.isHub ? 48 : 10]} />
          {n.isHub ? (
            <MeshDistortMaterial
              color={n.color}
              distort={n.distort}
              speed={still ? 0 : 1.6}
              roughness={0.35}
              metalness={0.1}
              opacity={0.85}
              transparent
            />
          ) : (
            <meshStandardMaterial
              color={n.color}
              emissive={n.color}
              emissiveIntensity={0.45}
              roughness={0.4}
              metalness={0.2}
              opacity={0.92}
              transparent
            />
          )}
        </mesh>
      ))}

      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#9fb3c2" transparent opacity={0.35} />
      </lineSegments>
    </group>
  );
}

export default function HeroScene() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Canvas
      camera={{ position: [0, 0, CAMERA_Z], fov: VERT_FOV_DEG }}
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <fog attach="fog" args={["#faf9f7", 6, 13]} />
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 5, 6]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-5, -3, 3]} intensity={1} color="#EE7A1E" />
      <pointLight position={[4, -2, -3]} intensity={0.6} color="#7FB2D6" />

      <NetworkField still={reducedMotion} />
    </Canvas>
  );
}
