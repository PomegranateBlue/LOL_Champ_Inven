import { ChampionList, DataInterface } from "@/types/apiType";
import { ChampionDetailInterface } from "@/types/championDetailType";
const API_URL =
  "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json";
export async function fetchChampionListData(): Promise<ChampionList[]> {
  const response = await fetch(API_URL, { next: { revalidate: 86400 } });

  if (!response.ok) {
    throw new Error("챔피언 데이터 로드 실패!");
  }

  const data: DataInterface = await response.json();
  return Object.values(data.data);
}

export async function fetchChampionDetailData(
  id: string
): Promise<ChampionDetailInterface> {
  const response = await fetch(API_URL, { cache: "no-store" });

  if (!response) {
    throw new Error("챔피언 상세정보 로드 실패!");
  }

  const data = await response.json();
  return data.data[id] as ChampionDetailInterface;
}


export async function fetchItemsData(){
    
}