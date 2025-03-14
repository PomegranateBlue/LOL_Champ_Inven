import { Champion } from "@/types/championType";
import Image from "next/image";
import Link from "next/link";
import { RIOT_URL } from "@/constants/apiURL";
type ChampionCardProps = {
  champion: Pick<Champion, "id" | "key" | "name" | "title" | "image">;
};
export default function ChampionCard({ champion }: ChampionCardProps) {
  return (
    <div key={champion.key}>
      <Link href={`/champions/${champion.id}`}>
        <Image
          src={`${RIOT_URL.CHAMPION_IMAGE}/${champion.image.full}`}
          alt={champion.name}
          width={120}
          height={120}
        ></Image>
        <div className="text-2xl text-red-500 font-bold">{champion.name}</div>
        <div>{champion.title}</div>
      </Link>
    </div>
  );
}
