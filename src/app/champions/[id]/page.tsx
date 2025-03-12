import { fetchChampionDetailData } from "@/utils/serverApi";
import { ChampionDetailInterface } from "@/types/championDetailType";
import ChampionDetailComponent from "@/components/ChampionDetail";
interface ChampionIdParams {
  params: { id: string };
}

export default async function ChampionDetailPage({ params }: ChampionIdParams) {
  const { id } = params;
  const championDetailData: ChampionDetailInterface =
    await fetchChampionDetailData(id);
  return <ChampionDetailComponent {...championDetailData} />;
}
