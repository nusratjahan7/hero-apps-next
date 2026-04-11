import bannerImg from "@/assets/img/hero.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="min-h-[80vh] text-center space-y-8 pt-[50px]">
      <h2 className="font-bold text-6xl">
        We Build <br /> <span className="text-purple-500">Productive</span> Apps
      </h2>
      <p className="text-gray-600 max-w-[50%] mx-auto">
        At HEROAPPS, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center gap-2">
        <button className="btn">Play store</button>
        <button className="btn">App store</button>
      </div>
      <Image src={bannerImg} height={300} width={600} className="mx-auto" alt="" />
    </div>
  );
};

export default Banner;