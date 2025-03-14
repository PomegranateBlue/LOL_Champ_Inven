import { RIOT_URL } from "@/constants/apiURL";
import { fetchChampionListData } from "@/utils/serverApi";

export async function GET() {
  const rotationRes = await fetch(`${RIOT_URL.ROTATION_CHAMPIONS}`, {
    headers: {
      "X-Riot-Token": `${process.env.NEXT_PUBLIC_RIOT_API_KEY}`,
    },
  });

  if (!rotationRes.ok) {
    return Response.json({ error: "로테이션 데이터 fetching error" });
  }

  const championData = await fetchChampionListData();
  let rotationData = await rotationRes.json();

  rotationData = rotationData.freeChampionIds;

  const rotationChampions = rotationData.map((championId: number) =>
    championData.find((champion) => Number(champion.key) === championId)
  );

  return Response.json(rotationChampions);
}
