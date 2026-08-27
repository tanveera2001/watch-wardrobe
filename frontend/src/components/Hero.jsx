import HeroImage from "../assets/Gemini_Generated_Image_bpjhgtbpjhgtbpjh.jpg";

export function Hero() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    ></div>
  );
}
