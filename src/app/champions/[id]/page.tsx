"use server";

import { fetchChampionDetailData } from "@/utils/serverApi";
import { ChampionDetail } from "@/types/championType";
import { RIOT_URL } from "@/constants/apiURL";
import Image from "next/image";
interface ChampionIdParams {
  params: { id: string };
}

export default async function ChampionDetailPage({ params }: ChampionIdParams) {
  const { id } = params;
  const championDetailData: ChampionDetail = await fetchChampionDetailData(id);
  return (
    <div className="flex flex-col items-center p-8 gap-6 bg-gray-950 min-h-screen text-white">
      <h1 className="text-4xl font-extrabold text-red-400">
        {championDetailData.name}
      </h1>
      <h2 className="text-lg text-gray-400">{championDetailData.title}</h2>
      <Image
        priority
        src={`${RIOT_URL.CHAMPION_SPLASH}/${championDetailData.id}_0.jpg`}
        width={500}
        height={300}
        alt={championDetailData.name}
        className="rounded-lg shadow-lg"
      />
      <p className="w-3/5 indent-8 text-gray-300">{championDetailData.blurb}</p>
    </div>
  );
}
