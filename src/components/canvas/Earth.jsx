import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";


const Earth = () => {
  const earth = useGLTF("planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0}/>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas>
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}/>
      <Earth />
    </Canvas>
  );
};

export default EarthCanvas;
