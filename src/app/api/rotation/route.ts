import { RIOT_URL } from "@/constants/apiURL";
import { fetchChampionListData } from "@/utils/serverApi";
import { NextResponse } from "next/server";

//GET 요청 처리하는 API 핸들러
export async function GET() {
  const rotationRes = await fetch(`${RIOT_URL.ROTATION_CHAMPIONS}`, {
    headers: {
      "X-Riot-Token": `${process.env.NEXT_PUBLIC_RIOT_API_KEY}`,
    },
  });

  if (!rotationRes.ok) {
    return NextResponse.json({ error: "로테이션 데이터 fetching error" });
  }

  const championData = await fetchChampionListData();
  let rotationData = await rotationRes.json();
  console.log(rotationData);
  rotationData = rotationData.freeChampionIds;

  const rotationChampions = rotationData.map((championId: number) =>
    championData.find((champion) => Number(champion.key) === championId)
  );

  return NextResponse.json(rotationChampions);
}
