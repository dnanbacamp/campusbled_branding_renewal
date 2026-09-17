// 3D simplex noise (Ashima Arts / Stefan Gustavson) + fBm, shared by every hero shader.
const NOISE = /* glsl */ `
vec3 mod289(vec3 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x){ return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v){
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float fbm3(vec3 p){
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    v += a * snoise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}
`;

// Domain-warped field driving the orb silhouette. Shared so the core and the
// halo shell deform in lockstep despite using different tessellation levels.
const DISPLACE = /* glsl */ `
float orbField(vec3 p, float t){
  vec3 q = vec3(
    fbm3(p * 1.10 + vec3(0.0, 0.0, t * 0.15)),
    fbm3(p * 1.10 + vec3(5.2, 1.3, t * 0.12)),
    fbm3(p * 1.10 + vec3(9.1, 7.4, t * 0.10))
  );
  return fbm3(p * 1.35 + q * 0.75 + vec3(0.0, t * 0.08, 0.0));
}
`;

export const backgroundVertex = /* glsl */ `
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const backgroundFragment = /* glsl */ `
${NOISE}

uniform float uTime;
uniform float uAspect;
uniform vec2  uGlow;
uniform vec3  uTop;
uniform vec3  uBottom;
uniform vec3  uAccent;
varying vec2 vUv;

float hash21(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main(){
  vec2 uv = vUv;
  vec3 col = mix(uBottom, uTop, smoothstep(0.0, 1.0, uv.y));

  vec2 p = (uv - uGlow) * vec2(uAspect, 1.0);
  float d = length(p);

  float fog = fbm3(vec3(uv * vec2(uAspect, 1.0) * 2.2, uTime * 0.05)) * 0.5 + 0.5;

  col += uAccent * exp(-d * 3.0) * (0.6 + 0.4 * fog) * 0.55;
  col += uAccent * pow(fog, 3.0) * 0.05 * smoothstep(1.1, 0.0, d);

  float vig = smoothstep(1.25, 0.2, length((uv - 0.5) * vec2(uAspect, 1.0)));
  col *= 0.45 + 0.55 * vig;

  // Break up gradient banding before the value is quantised to 8 bits.
  col += (hash21(uv * 1024.0) - 0.5) / 255.0;

  gl_FragColor = vec4(col, 1.0);
}
`;

// The orb is a point cloud rather than a surface: additive points render as a
// volumetric glow with no silhouette faceting or shading artefacts.
export const orbVertex = /* glsl */ `
${NOISE}
${DISPLACE}

uniform float uTime;
uniform float uAmp;
uniform float uSize;
uniform float uPixelRatio;
varying float vField;
varying float vDepth;

void main(){
  vec3 n = normalize(position);
  float f = orbField(n, uTime);
  vec4 mv = modelViewMatrix * vec4(n * (1.0 + f * uAmp), 1.0);

  vField = f;
  vDepth = -mv.z;
  gl_PointSize = uSize * uPixelRatio * (60.0 / max(-mv.z, 0.001))
               * (0.7 + 0.8 * smoothstep(-0.1, 0.55, f));
  gl_Position = projectionMatrix * mv;
}
`;

export const orbFragment = /* glsl */ `
uniform vec3 uDeep;
uniform vec3 uCore;
uniform vec3 uRim;
varying float vField;
varying float vDepth;

void main(){
  float d = length(gl_PointCoord - 0.5);
  float a = pow(smoothstep(0.5, 0.0, d), 1.6);
  if (a < 0.01) discard;

  float energy = smoothstep(-0.1, 0.55, vField);
  vec3 col = mix(uDeep, uCore, energy);
  col = mix(col, uRim, pow(energy, 2.5));
  // Push the crests above 1.0 so the bloom pass has something to catch.
  col *= 1.0 + pow(energy, 5.0) * 2.2;

  // Dim the far hemisphere so the cloud reads as a volume, not a flat disc.
  float depthFade = smoothstep(9.0, 4.5, vDepth);
  gl_FragColor = vec4(col, a * (0.08 + 0.92 * pow(energy, 1.5)) * (0.25 + 0.75 * depthFade));
}
`;

export const haloVertex = /* glsl */ `
varying vec3 vNormal;
varying vec3 vView;

void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vNormal = normalize(normalMatrix * normal);
  vView   = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}
`;

export const haloFragment = /* glsl */ `
uniform vec3  uRim;
uniform float uPower;
uniform float uIntensity;
varying vec3 vNormal;
varying vec3 vView;

void main(){
  float fres = pow(1.0 - clamp(dot(normalize(vNormal), normalize(vView)), 0.0, 1.0), uPower);
  float a = fres * uIntensity;
  if (a < 0.002) discard;
  gl_FragColor = vec4(uRim, a);
}
`;

export const particleVertex = /* glsl */ `
attribute float aSeed;
attribute float aSize;
uniform float uTime;
uniform float uPixelRatio;
varying float vSeed;
varying float vAlpha;

void main(){
  vec3 p = position;
  float t = uTime * 0.18;
  p.x += sin(t + aSeed * 12.9) * 0.28;
  p.y += cos(t * 0.9 + aSeed * 7.3) * 0.28;
  p.z += sin(t * 0.7 + aSeed * 4.1) * 0.28;

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = min(aSize * uPixelRatio * (22.0 / max(-mv.z, 0.001)), 9.0 * uPixelRatio);
  vSeed  = aSeed;
  vAlpha = (0.16 + 0.44 * (0.5 + 0.5 * sin(uTime * 1.1 + aSeed * 20.0)))
         * smoothstep(14.0, 5.0, -mv.z);
  gl_Position = projectionMatrix * mv;
}
`;

export const particleFragment = /* glsl */ `
uniform vec3 uColorA;
uniform vec3 uColorB;
varying float vSeed;
varying float vAlpha;

void main(){
  float d = length(gl_PointCoord - 0.5);
  float a = pow(smoothstep(0.5, 0.0, d), 2.0) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(mix(uColorA, uColorB, vSeed), a);
}
`;
