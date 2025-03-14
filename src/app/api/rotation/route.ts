// app/api/rotation/route.ts
import { RIOT_URL } from "@/constants/apiURL";
import { fetchChampionListData } from "@/utils/serverApi";

export async function GET() {
  const rotationRes = await fetch(`${RIOT_URL.ROTATION_CHAMPIONS}`, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      Origin: "https://developer.riotgames.com",
      "X-Riot-Token": `${process.env.NEXT_PUBLIC_RIOT_API_KEY}`,
    },
  });

  if (!rotationRes.ok) {
    return new Response(
      JSON.stringify({ error: "로테이션 데이터 fetching error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  // 3. 로테이션 데이터 JSON 파싱
  let rotationData = await rotationRes.json();

  // 4. 내부에 있는 전체 챔피언 리스트 가져오기
  const championListData = await fetchChampionListData();

  // 5. Riot API 데이터에서 자유 챔피언 ID 추출
  rotationData = rotationData.freeChampionIds;

  // 6. 자유 챔피언 ID를 이용해 전체 챔피언 리스트에서 매칭
  const rotationChampions = rotationData.map((championId: number) =>
    championListData.find((champion) => Number(champion.key) === championId)
  );

  // 7. 매칭된 데이터를 JSON 응답으로 반환
  return new Response(JSON.stringify(rotationChampions), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
