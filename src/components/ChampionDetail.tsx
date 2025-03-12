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
    <div className="flex flex-col items-center p-8 gap-6">
      <div className="text-red-500 font-bold text-3xl">{name}</div>
      <div className="text-opacity-35  text-xl text-white">{title}</div>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${id}.png`}
        width={200}
        height={200}
        alt={name}
      />
      <div className="w-3/5 indent-8">{blurb}</div>
    </div>
  );
}
