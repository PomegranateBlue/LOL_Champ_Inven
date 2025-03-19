import { Champion } from "@/types/championType";
import ChampionCard from "./ChampionCard";
import { fetchChampionListData } from "@/utils/serverApi";
export default async function ChampionList() {
  const championData: Champion[] = await fetchChampionListData();
  return (
    <div className="grid grid-cols-6 items-center justify-start gap-4 p-8">
      {championData.map((champion) => {
        return <ChampionCard key={champion.id} champion={champion} />;
      })}
    </div>
  );
}
