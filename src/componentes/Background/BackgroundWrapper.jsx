"use client";
import { Canvas } from '@react-three/fiber';
import NeuralMesh from './ThreeScene';
import './ThreeScene/estilo.css';

export default function BackgroundWrapper({ slideAtivo }) {
  return (
    <div className="bg-canvas-container">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={['#050A18']} /> {}
        <ambientLight intensity={0.5} />
        {}
        <NeuralMesh slideAtivo={slideAtivo} />
      </Canvas>
      
      {}
      <div className="bg-overlay"></div>
    </div>
  );
}