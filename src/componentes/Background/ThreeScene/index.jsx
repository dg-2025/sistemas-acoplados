"use client";
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function NeuralMesh({ slideAtivo }) {
  const groupRef = useRef();
  const linesRef = useRef();
  
  
  
  const particleCount = 150;
  const maxDistance = 2.5;

  
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = [];
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;     
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20; 
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20; 
      
      vel.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      });
    }
    return [pos, vel];
  }, []);

  
  useFrame(() => {
    if (!groupRef.current || !linesRef.current) return;

    
    groupRef.current.rotation.y += 0.001;
    groupRef.current.rotation.x += 0.0005;

    const positionsArray = groupRef.current.children[0].geometry.attributes.position.array;
    const linePositions = [];

    
    for (let i = 0; i < particleCount; i++) {
      positionsArray[i * 3] += velocities[i].x;
      positionsArray[i * 3 + 1] += velocities[i].y;
      positionsArray[i * 3 + 2] += velocities[i].z;

      
      if (Math.abs(positionsArray[i * 3]) > 10) velocities[i].x *= -1;
      if (Math.abs(positionsArray[i * 3 + 1]) > 10) velocities[i].y *= -1;
      if (Math.abs(positionsArray[i * 3 + 2]) > 10) velocities[i].z *= -1;

      
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positionsArray[i * 3] - positionsArray[j * 3];
        const dy = positionsArray[i * 3 + 1] - positionsArray[j * 3 + 1];
        const dz = positionsArray[i * 3 + 2] - positionsArray[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          linePositions.push(
            positionsArray[i * 3], positionsArray[i * 3 + 1], positionsArray[i * 3 + 2],
            positionsArray[j * 3], positionsArray[j * 3 + 1], positionsArray[j * 3 + 2]
          );
        }
      }
    }

    
    groupRef.current.children[0].geometry.attributes.position.needsUpdate = true;
    
    
    linesRef.current.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  });

  return (
    <group ref={groupRef}>
      {}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.15} color="#00E5FF" transparent opacity={0.8} />
      </points>

      {}
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#00E5FF" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}