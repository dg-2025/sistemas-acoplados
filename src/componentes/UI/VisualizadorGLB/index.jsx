
"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, Environment } from '@react-three/drei';

function Modelo({ caminhoArquivo, escala }) {
  const { scene } = useGLTF(caminhoArquivo);
  return (
    <Center>
      <primitive object={scene} scale={escala} />
    </Center>
  );
}

export default function VisualizadorGLB({ arquivo, escala = 1 }) {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <Environment preset="city" />
      <Modelo caminhoArquivo={arquivo} escala={escala} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        enableZoom={true}
        minDistance={1}
        maxDistance={10}
      />
    </Canvas>
  );
}