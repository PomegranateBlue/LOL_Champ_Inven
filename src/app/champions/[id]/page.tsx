import { fetchChampionDetailData } from "@/utils/serverApi";
import { ChampionDetailInterface } from "@/types/championDetailType";
import Image from "next/image";
import { ChampionDetail } from "@/components/ChampionDetail";
interface ChampionIdParams {
  params: { id: string };
}

export default async function ChampionDetailPage({ params }: ChampionIdParams) {
  const { id } = params;
  const championDetailData = await fetchChampionDetailData(id);
  return <div></div>;
}
