import { EarthCanvas, StarsCanvas } from "../components/canvas";

const Earth3D = () => {
  return (
    <div className="xl:flex-1 xl:h-[950px] md:h-[700px] h-[250px]">
      <EarthCanvas />
      <StarsCanvas />
    </div>
  );
};

export default Earth3D;
