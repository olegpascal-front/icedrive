import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import model from '../assets/3D/katok_gLTF.gltf';

function Model({ url }) {
  const { scene } = useGLTF(url);
  scene.scale.set(1, 1, 1); // Масштабируем модель (исходный размер)
  scene.position.set(0, 0, 0); // Позиционируем модель по центру
  return <primitive object={scene} />;
}

const ThreeDModel = () => {
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: 'black' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Model url={model} />
          <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={true} />
          <Environment preset="studio" background />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDModel;