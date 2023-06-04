import { StarsCanvas } from "./components/canvas";
import Earth3D from "./components/Earth3D";

const App = () => {

  return (
    <div className="relative z-0">
      <Earth3D />
      <StarsCanvas />
    </div>
  );
};

export default App;
