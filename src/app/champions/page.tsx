import { getChampions } from "@/lib/api";
import ChampionCard from "@/components/ChampionCard";
import { Champion } from "@/types/apiType";
export default async function ChampionPage() {
  const championData: Champion[] = await getChampions();
  // console.log(championData);
  return (
    <div>
      <h2 className="font-bold text-red-500">챔피언 목록</h2>
      <div className="grid grid-cols-4 gap-10">
        {championData.map((champion) => (
          <ChampionCard
            key={champion.id}
            id={champion.id}
            name={champion.name}
            title={champion.title}
          />
        ))}
      </div>
    </div>
  );
}
