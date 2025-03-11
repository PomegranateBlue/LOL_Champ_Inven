import Link from "next/link";
import Image from "next/image";
import { ChampionCardInterface } from "@/types/championCardType";
import { getSpriteUrl } from "@/utils/getImage";
export default function ChampionCard({
  id,
  name,
  title,
}: ChampionCardInterface) {
  return (
    <Link href={`/champions/${id}`}>
      <div className="rounded-md">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${id}.png`}
          width={60}
          height={60}
          alt={name}
        />
        <div>{name}</div>
        <div>{title}</div>
      </div>
    </Link>
  );
}
