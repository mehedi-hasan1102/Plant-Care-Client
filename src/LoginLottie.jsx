// src/components/LoginLottie.jsx
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../src/assets/login-men.json.json";


const LoginLottie = () => {
  return (
    <div className="hidden md:block w-1/2 flex justify-center items-center">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "400px", width: "400px" }}
      />
    </div>
  );
};

export default LoginLottie;
