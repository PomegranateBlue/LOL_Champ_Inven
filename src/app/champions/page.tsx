import { fetchChampionListData } from "@/utils/serverApi";
import ChampionCard from "@/components/ChampionCard";
import { ChampionList } from "@/types/apiType";
import Link from "next/link";

export default async function ChampionPage() {
  const championData: ChampionList[] = await fetchChampionListData();
  return (
    <div>
      <h2 className="font-bold text-red-500 text-3xl p-4">챔피언 목록</h2>
      <div className="grid grid-cols-4 gap-14 p-6">
        {championData.map((champion) => (
          <Link key={champion.id} href={`/champion/${champion.id}`}>
            <ChampionCard
              id={champion.id}
              name={champion.name}
              title={champion.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
