import { fetchChampionDetailData } from "@/utils/serverApi";
import { ChampionDetail } from "@/types/championType";
import ChampionDetailComponent from "@/components/ChampionDetail";
interface ChampionIdParams {
  params: { id: string };
}

export default async function ChampionDetailPage({ params }: ChampionIdParams) {
  const { id } = params;
  const championDetailData: ChampionDetail = await fetchChampionDetailData(id);
  return <ChampionDetailComponent {...championDetailData} />;
}
