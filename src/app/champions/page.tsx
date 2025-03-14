import { fetchChampionListData } from "@/utils/serverApi";
import { Champion } from "@/types/championType";
import ChampionCard from "@/components/ChampionCard";

export default async function ChampionPage() {
  const championData: Champion[] = await fetchChampionListData();
  return (
    <div>
      <h2 className="font-bold text-red-500 text-3xl p-4">챔피언 목록</h2>
      <div className="grid grid-cols-4 gap-14 p-6">
        {championData.map((champion) => {
          return <ChampionCard key={champion.id} champion={champion} />;
        })}
      </div>
    </div>
  );
}
