import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const POINT_COUNT = 5000;
const STAR_RADIUS = 1.2;
const STAR_COLOR = '#f272c8';
const STAR_SIZE = 0.004;
const SCROLL_SPEED = 1 / 3; // delta factor

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(POINT_COUNT), { radius: STAR_RADIUS })
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.position.z = (ref.current.position.z > 1.0)
        ? -0.4
        : ref.current.position.z + delta * SCROLL_SPEED;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color={STAR_COLOR}
          size={STAR_SIZE}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Background = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10 blur-[0.5px]"
      style={{ pointerEvents: 'none' }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Background;
