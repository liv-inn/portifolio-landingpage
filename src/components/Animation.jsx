import Lottie from "lottie-react";
import devAnimation from "../assets/animation.json";

function Animation() {
  return (
    <div className="flex justify-center items-center ">
      <Lottie
        animationData={devAnimation}
        loop={true}
        className="w-full max-w-2xl "
      />
    </div>
  );
}
export default Animation;
