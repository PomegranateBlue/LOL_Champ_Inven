import { fetchChampionListData } from "@/utils/serverApi";
import { Champion } from "@/types/championType";
import ChampionCard from "@/components/ChampionCard";

//해당 페이지에서 챔피언 개별 카드들을 렌더링
export default async function ChampionPage() {
  const championData: Champion[] = await fetchChampionListData();
  return (
    <div>
      <h2 className="font-bold text-red-500 text-4xl text-center p-2 mt-4">
        챔피언 목록
      </h2>
      <div className="grid grid-cols-6 items-center justify-start gap-4 p-8">
        {championData.map((champion) => {
          return <ChampionCard key={champion.id} champion={champion} />;
        })}
      </div>
    </div>
  );
}
