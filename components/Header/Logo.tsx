import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Link href="/" className="relative flex items-center h-14 my-auto">
        <Image
          src="/logo.png"
          alt="logo-image"
          fill
          className="object-contain object-left"
        />
      </Link>
    </div>
  );
}
