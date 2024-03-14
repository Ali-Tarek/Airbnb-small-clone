import { LiveItem } from "@/app/types/app";
import Image from "next/image";

type LiveDataProps = LiveItem;

export default function LiveCard({ img, title }: LiveDataProps) {
  return (
    <div className=" cursor-pointer  hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative w-80 h-80">
        <Image src={img} alt="Live img" fill />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}
