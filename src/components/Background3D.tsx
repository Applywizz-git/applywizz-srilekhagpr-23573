import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingShape = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={0.15}
        distort={0.4}
        speed={2}
        roughness={0.4}
        metalness={0.8}
      />
    </mesh>
  );
};

const FloatingSphere = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.4) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={0.12}
        distort={0.3}
        speed={1.5}
        roughness={0.3}
        metalness={0.9}
      />
    </Sphere>
  );
};

const Torus = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1.2, 0.4, 16, 100]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.1}
        roughness={0.5}
        metalness={0.8}
        wireframe
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#C08457" />

      {/* Copper/Gold floating shapes */}
      <FloatingShape position={[-3, 2, -5]} color="#C08457" scale={0.8} />
      <FloatingShape position={[4, -2, -8]} color="#D4A574" scale={1.2} />
      <FloatingShape position={[2, 3, -6]} color="#B8956A" scale={0.6} />

      {/* Silver/White spheres */}
      <FloatingSphere position={[-4, -3, -7]} color="#D6D3D1" scale={0.7} />
      <FloatingSphere position={[3, 1, -9]} color="#F5F5F4" scale={0.9} />
      
      {/* Accent torus */}
      <Torus position={[0, 0, -10]} color="#16A34A" />
      <Torus position={[-5, 1, -12]} color="#C08457" />

      {/* Additional depth elements */}
      <FloatingShape position={[5, -1, -15]} color="#C08457" scale={1.5} />
      <FloatingSphere position={[-2, -2, -14]} color="#D6D3D1" scale={1.1} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.2}
      />
    </>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Background3D;
