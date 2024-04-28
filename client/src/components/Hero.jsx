import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import Chair from "../components/Chair";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Model = () => {
  const chairPositionFactor = window.innerWidth / 1300;
  const isMobile = window.innerWidth < 1024;

  return (
    <group>
      <Stage environment="sunset">
        <Chair
          position-x={isMobile ? 0 : 1.2 * chairPositionFactor}
          position-y={isMobile ? -2 : -1}
        />
      </Stage>
      <BakeShadows />
      <ambientLight />

      <OrbitControls
        makeDefault
        autoRotate
        enableRotate={false}
        enableZoom={false}
      />
    </group>
  );
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row lg:gap-44">
        <div className="h-screen">
          <Canvas shadows camera={{ position: [0, 2, 8], fov: 50 }}>
            <Model />
          </Canvas>
        </div>

        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold leading-tight tracking-wider">
            <span className="text-neutral font-black">Elevate </span>
            Your Space <br />
            Redefine Your Style
          </h1>
          <p className="mb-5">
            Browse through our curated collection of chairs, meticulously
            selected to cater to every taste and style. From sleek and modern
            designs to timeless classics, we offer a diverse range of options to
            suit your aesthetic preferences.
          </p>
          <button
            onClick={() => navigate("/chairs")}
            className="btn btn-primary"
          >
            Shop Now
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
