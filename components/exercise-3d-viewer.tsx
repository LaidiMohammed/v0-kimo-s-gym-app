'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

function ExerciseModel({ type }: { type: string }) {
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  const renderModel = () => {
    switch (type) {
      case 'squat':
        return (
          <group ref={ref}>
            {/* Head */}
            <sphere args={[0.3, 16, 16]} position={[0, 2.2, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </sphere>
            {/* Torso */}
            <box args={[0.4, 0.8, 0.25]} position={[0, 1.5, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </box>
            {/* Upper Left Arm */}
            <box args={[0.15, 0.5, 0.15]} position={[-0.4, 1.5, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </box>
            {/* Upper Right Arm */}
            <box args={[0.15, 0.5, 0.15]} position={[0.4, 1.5, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </box>
            {/* Upper Left Leg */}
            <box args={[0.2, 0.8, 0.2]} position={[-0.2, 0.7, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </box>
            {/* Upper Right Leg */}
            <box args={[0.2, 0.8, 0.2]} position={[0.2, 0.7, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </box>
            {/* Lower Left Leg */}
            <box args={[0.18, 0.7, 0.18]} position={[-0.2, 0.1, 0.1]}>
              <meshStandardMaterial color="#ffb3b3" />
            </box>
            {/* Lower Right Leg */}
            <box args={[0.18, 0.7, 0.18]} position={[0.2, 0.1, 0.1]}>
              <meshStandardMaterial color="#ffb3b3" />
            </box>
          </group>
        );
      case 'bench':
        return (
          <group ref={ref}>
            {/* Head */}
            <sphere args={[0.3, 16, 16]} position={[0, 1.2, -0.5]}>
              <meshStandardMaterial color="#ff9a9a" />
            </sphere>
            {/* Torso (on bench) */}
            <box args={[0.4, 0.6, 0.8]} position={[0, 0.8, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </box>
            {/* Left Arm */}
            <box args={[0.15, 0.5, 0.15]} position={[-0.6, 1.0, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </box>
            {/* Right Arm */}
            <box args={[0.15, 0.5, 0.15]} position={[0.6, 1.0, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </box>
            {/* Bench */}
            <box args={[1.2, 0.2, 0.8]} position={[0, 0.3, 0]}>
              <meshStandardMaterial color="#666666" />
            </box>
            {/* Barbell */}
            <group position={[0, 1.8, 0]}>
              <cylinder args={[0.05, 0.05, 1.2, 8]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#888888" />
              </cylinder>
              <sphere args={[0.2, 16, 16]} position={[-0.6, 0, 0]}>
                <meshStandardMaterial color="#dd7700" />
              </sphere>
              <sphere args={[0.2, 16, 16]} position={[0.6, 0, 0]}>
                <meshStandardMaterial color="#dd7700" />
              </sphere>
            </group>
          </group>
        );
      case 'deadlift':
        return (
          <group ref={ref}>
            {/* Head */}
            <sphere args={[0.3, 16, 16]} position={[0, 2.0, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </sphere>
            {/* Torso */}
            <box args={[0.4, 0.8, 0.25]} position={[0, 1.3, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </box>
            {/* Arms */}
            <box args={[0.15, 0.6, 0.15]} position={[-0.35, 0.8, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </box>
            <box args={[0.15, 0.6, 0.15]} position={[0.35, 0.8, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </box>
            {/* Legs */}
            <box args={[0.2, 0.8, 0.2]} position={[-0.2, 0.5, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </box>
            <box args={[0.2, 0.8, 0.2]} position={[0.2, 0.5, 0]}>
              <meshStandardMaterial color="#ff9a9a" />
            </box>
            {/* Barbell on ground */}
            <group position={[0, 0.15, 0.05]}>
              <cylinder args={[0.05, 0.05, 1.2, 8]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color="#888888" />
              </cylinder>
              <sphere args={[0.2, 16, 16]} position={[-0.6, 0, 0]}>
                <meshStandardMaterial color="#dd0000" />
              </sphere>
              <sphere args={[0.2, 16, 16]} position={[0.6, 0, 0]}>
                <meshStandardMaterial color="#dd0000" />
              </sphere>
            </group>
          </group>
        );
      default:
        return (
          <box ref={ref} args={[0.5, 0.5, 0.5]}>
            <meshStandardMaterial color="#00ccff" />
          </box>
        );
    }
  };

  return renderModel();
}

interface Exercise3DViewerProps {
  exerciseType: string;
  exerciseName: string;
}

export function Exercise3DViewer({ exerciseType, exerciseName }: Exercise3DViewerProps) {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5">
      <Canvas camera={{ position: [0, 1.5, 3], fov: 45 }}>
        <PerspectiveCamera makeDefault position={[0, 1.5, 3]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, 5, 5]} intensity={0.6} color="#00ccff" />
        
        <ExerciseModel type={exerciseType} />
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
}
