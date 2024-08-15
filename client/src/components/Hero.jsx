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
      <Stage environment="sunset" preset="portrait" intensity={0.5}>
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
    <div className="hero bg-base-100">
      <div className="hero-content flex-col lg:flex-row lg:gap-20">
        <div className="h-screen w-full lg:w-1/2">
          <Canvas shadows camera={{ position: [0, 2, 8], fov: 90 }}>
            <Model />
          </Canvas>
        </div>

        <div className="max-w-lg text-center lg:text-left lg:w-1/2">
          <h1 className="mb-5 text-5xl font-bold leading-tight tracking-wide text-primary">
            Elevate{" "}
            <span className="text-neutral font-extrabold">Your Space</span>{" "}
            <br />
            Redefine Your Style
          </h1>
          <p className="mb-5 text-lg text-gray-700">
            Browse through our curated collection of chairs, meticulously
            selected to cater to every taste and style. From sleek and modern
            designs to timeless classics, we offer a diverse range of options to
            suit your aesthetic preferences.
          </p>
          <button
            onClick={() => navigate("/chairs")}
            className="btn btn-primary flex items-center gap-2 hover:bg-primary-focus"
          >
            Shop Now
            <FaChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
