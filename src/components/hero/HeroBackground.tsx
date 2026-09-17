"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import {
  backgroundFragment,
  backgroundVertex,
  haloFragment,
  haloVertex,
  orbFragment,
  orbVertex,
  particleFragment,
  particleVertex,
} from "./shaders";

const PALETTE = {
  top: "#04060f",
  bottom: "#080e20",
  accent: "#1b3a8f",
  deep: "#03060f",
  core: "#122a73",
  rim: "#4f7df5",
  particleA: "#6f93e6",
  particleB: "#cddcff",
};

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return; // No WebGL — the CSS gradient underneath stays visible.
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const compact = window.matchMedia("(max-width: 768px)").matches;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    const color = (hex: string) => new THREE.Color(hex);

    // ---- Background field -------------------------------------------------
    const bgMaterial = new THREE.ShaderMaterial({
      vertexShader: backgroundVertex,
      fragmentShader: backgroundFragment,
      depthWrite: false,
      depthTest: false,
      uniforms: {
        uTime: { value: 0 },
        uAspect: { value: 1 },
        uGlow: { value: new THREE.Vector2(0.68, 0.55) },
        uTop: { value: color(PALETTE.top) },
        uBottom: { value: color(PALETTE.bottom) },
        uAccent: { value: color(PALETTE.accent) },
      },
    });
    const bgGeometry = new THREE.PlaneGeometry(1, 1);
    const bgPlane = new THREE.Mesh(bgGeometry, bgMaterial);
    bgPlane.position.z = -9;
    bgPlane.renderOrder = -1;
    scene.add(bgPlane);

    // ---- Morphing orb -----------------------------------------------------
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    const orbPointCount = compact ? 20000 : 48000;
    const orbPositions = new Float32Array(orbPointCount * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < orbPointCount; i++) {
      // Fibonacci sphere — even coverage without polar clustering.
      const y = 1 - (i / (orbPointCount - 1)) * 2;
      const radius = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = i * golden;
      orbPositions[i * 3] = Math.cos(theta) * radius;
      orbPositions[i * 3 + 1] = y;
      orbPositions[i * 3 + 2] = Math.sin(theta) * radius;
    }

    const orbUniforms = {
      uTime: { value: 0 },
      uAmp: { value: 0.33 },
      uSize: { value: 0.24 },
      uPixelRatio: { value: renderer.getPixelRatio() },
      uDeep: { value: color(PALETTE.deep) },
      uCore: { value: color(PALETTE.core) },
      uRim: { value: color(PALETTE.rim) },
    };
    const orbGeometry = new THREE.BufferGeometry();
    orbGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(orbPositions, 3),
    );
    const orbMaterial = new THREE.ShaderMaterial({
      vertexShader: orbVertex,
      fragmentShader: orbFragment,
      uniforms: orbUniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
    });
    const orb = new THREE.Points(orbGeometry, orbMaterial);
    orb.scale.setScalar(1.2);
    orbGroup.add(orb);

    const haloUniforms = {
      uRim: { value: color(PALETTE.rim) },
      uPower: { value: 3.2 },
      uIntensity: { value: 0.45 },
    };
    const haloGeometry = new THREE.IcosahedronGeometry(1, 5);
    const haloMaterial = new THREE.ShaderMaterial({
      vertexShader: haloVertex,
      fragmentShader: haloFragment,
      uniforms: haloUniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    halo.scale.setScalar(1.42);
    orbGroup.add(halo);

    // ---- Particle field ---------------------------------------------------
    const particleCount = compact ? 900 : 1800;
    const positions = new Float32Array(particleCount * 3);
    const seeds = new Float32Array(particleCount);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Even distribution across a spherical shell around the orb, kept well
      // behind the near plane so nothing blows up into a foreground blob.
      const u = Math.random() * 2 - 1;
      const theta = Math.random() * Math.PI * 2;
      const r = 4 + Math.pow(Math.random(), 0.6) * 6;
      const s = Math.sqrt(1 - u * u);
      positions[i * 3] = Math.cos(theta) * s * r;
      positions[i * 3 + 1] = Math.sin(theta) * s * r * 0.7;
      positions[i * 3 + 2] = -1 - Math.abs(u) * r * 0.8;
      seeds[i] = Math.random();
      sizes[i] = 0.35 + Math.random() * 0.95;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    particleGeometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    particleGeometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: particleVertex,
      fragmentShader: particleFragment,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: renderer.getPixelRatio() },
        uColorA: { value: color(PALETTE.particleA) },
        uColorB: { value: color(PALETTE.particleB) },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // ---- Post processing --------------------------------------------------
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(1, 1),
      0.65,
      0.5,
      0.5,
    );
    composer.addPass(bloom);
    composer.addPass(new OutputPass());

    // ---- Layout -----------------------------------------------------------
    const layout = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;

      const aspect = width / height;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      composer.setSize(width, height);
      const pixelRatio = renderer.getPixelRatio();
      particleMaterial.uniforms.uPixelRatio.value = pixelRatio;
      orbUniforms.uPixelRatio.value = pixelRatio;

      const wide = aspect > 1.05;
      orbGroup.position.set(wide ? 1.8 : 0, wide ? 0.05 : 0.7, 0);
      orbGroup.scale.setScalar(wide ? 1 : 0.72);

      // Oversize the backdrop so camera parallax never exposes its edges.
      const distance = camera.position.z - bgPlane.position.z;
      const viewHeight =
        2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * distance;
      bgPlane.scale.set(viewHeight * aspect * 1.25, viewHeight * 1.25, 1);
      bgMaterial.uniforms.uAspect.value = aspect;
      bgMaterial.uniforms.uGlow.value.set(
        wide ? 0.68 : 0.5,
        wide ? 0.55 : 0.64,
      );
    };

    layout();
    const resizeObserver = new ResizeObserver(() => {
      layout();
      if (reduceMotion) renderFrame();
    });
    resizeObserver.observe(container);

    // ---- Interaction ------------------------------------------------------
    const pointer = new THREE.Vector2();
    const pointerTarget = new THREE.Vector2();

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerTarget.set(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -(((event.clientY - rect.top) / rect.height) * 2 - 1),
      );
    };
    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    // ---- Render loop ------------------------------------------------------
    let frame = 0;
    let visible = true;
    let elapsed = 0;
    let lastTime = 0;

    const renderFrame = () => {
      bgMaterial.uniforms.uTime.value = elapsed;
      orbUniforms.uTime.value = elapsed;
      particleMaterial.uniforms.uTime.value = elapsed;

      pointer.lerp(pointerTarget, 0.05);

      orbGroup.rotation.y = elapsed * 0.08 + pointer.x * 0.3;
      orbGroup.rotation.x = pointer.y * -0.18;
      particles.rotation.y = elapsed * 0.02 + pointer.x * 0.12;
      particles.rotation.x = pointer.y * -0.06;

      camera.position.x = pointer.x * 0.32;
      camera.position.y = pointer.y * 0.22;
      camera.lookAt(0, 0, 0);

      composer.render();
    };

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      // Clamped so a paused tab or a stalled frame never jumps the animation.
      elapsed += Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      renderFrame();
    };

    const start = () => {
      if (reduceMotion || frame) return;
      lastTime = performance.now();
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    };

    // Only burn GPU time while the hero is actually on screen.
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !document.hidden) start();
        else stop();
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(container);

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else if (visible) start();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    if (reduceMotion) renderFrame();
    else start();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pointermove", onPointerMove);

      composer.dispose();
      bloom.dispose();
      bgGeometry.dispose();
      bgMaterial.dispose();
      orbGeometry.dispose();
      orbMaterial.dispose();
      haloGeometry.dispose();
      haloMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(65%_55%_at_70%_52%,#10235c_0%,#050a18_55%,#02040c_100%)]"
    />
  );
}
