import GrassSketch from "@/public/grass_sketch.png";
import Image from "next/image";

function GeneralHeroSection({ title }: { title: string }) {
  return (
    <div className="relative bg-main-darkGreen h-[20rem] flex items-center justify-center">
      <h1 className=" text-white text-4xl mt-6">{title}</h1>
      <Image
        src={GrassSketch}
        alt="GrassSketch"
        sizes="100vw"
        className="absolute -bottom-6"
      />
    </div>
  );
}

export default GeneralHeroSection;
