import { DataInterface } from "@/types/apiType";
export async function getChampions() {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  const data: DataInterface = await response.json();
  return Object.values(data.data);
}
