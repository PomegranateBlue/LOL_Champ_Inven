import { Champion } from "@/types/championType";
import Image from "next/image";
import Link from "next/link";
import { RIOT_URL } from "@/constants/apiURL";
type ChampionCardProps = {
  champion: Pick<Champion, "id" | "key" | "name" | "title" | "image">;
};
export default function ChampionCard({ champion }: ChampionCardProps) {
  return (
    <div
      key={champion.key}
      className="relative flex flex-col items-center p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-800 transition-transform duration-300 sm:w-40 md:w-48"
    >
      <Link href={`/champions/${champion.id}`}>
        <Image
          src={`${RIOT_URL.CHAMPION_IMAGE}/${champion.image.full}`}
          alt={champion.name}
          width={120}
          height={120}
          className="border-[2px] rounded-md border-white-200"
        ></Image>
        <div className="mt-2 text-xl font-bold text-red-400">
          {champion.name}
        </div>
        <div className="text-sm text-gray-400">{champion.title}</div>
      </Link>
    </div>
  );
}
