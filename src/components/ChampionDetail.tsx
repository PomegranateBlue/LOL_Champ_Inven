// import { getChampions } from "@/lib/api";
import { ChampionDetailInterface } from "@/types/championDetailType";
import Image from "next/image";
export default function ChampionDetailComponent({
  id,
  name,
  title,
  blurb,
}: ChampionDetailInterface) {
  return (
    <div>
      <div>{name}</div>
      <div>{title}</div>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${id}.png`}
        width={120}
        height={120}
        alt={name}
      />
      <div>{blurb}</div>
    </div>
  );
}
