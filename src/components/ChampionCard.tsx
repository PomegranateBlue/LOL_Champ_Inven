import Image from "next/image";
import { ChampionCardInterface } from "@/types/championCardType";
export default function ChampionCard({
  id,
  name,
  title,
}: ChampionCardInterface) {
  return (
    <div className="flex flex-col items-center  border-white border-[1px] ">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${id}.png`}
        width={120}
        height={120}
        alt={name}
      />
      <div className="font-bold text-2xl text-red-500">{name}</div>
      <div className="font-semibold text-md">{title}</div>
    </div>
  );
}
