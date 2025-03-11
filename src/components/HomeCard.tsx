import Image from "next/image";
import Link from "next/link";
export default function Card({
  src,
  alt,
  text,
}: {
  src: string;
  alt: string;
  text: string;
}) {
  return (
    <Link href="/">
      <div className="flex flex-col items-center gap-y-6">
        <Image src={src} width={400} height={400} alt={alt} />
        <span className="text-yellow-500">{text}</span>
      </div>
    </Link>
  );
}
