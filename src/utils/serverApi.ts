import {
  ChampionList,
  ChampionDataInterface,
  ItemDataInterface,
} from "@/types/apiType";
import { ChampionDetailInterface } from "@/types/championDetailType";
import { ItemListInterface, ItemProps } from "@/types/itemType";
const CHAMPION_API_URL =
  "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json";

const ITEM_API_URL =
  "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json";

const ONE_DAY_TO_SECONDS = 86400;
export async function fetchChampionListData(): Promise<ChampionList[]> {
  const response = await fetch(CHAMPION_API_URL, {
    next: { revalidate: ONE_DAY_TO_SECONDS },
  });

  if (!response.ok) {
    throw new Error("챔피언 데이터 로드 실패!");
  }

  const data: ChampionDataInterface = await response.json();
  return Object.values(data.data);
}

export async function fetchChampionDetailData(
  id: string
): Promise<ChampionDetailInterface> {
  console.log("API 호출 시간:", new Date().toISOString());
  const response = await fetch(CHAMPION_API_URL, { cache: "no-store" });

  if (!response) {
    throw new Error("챔피언 상세정보 로드 실패!");
  }

  const data = await response.json();
  return data.data[id] as ChampionDetailInterface;
}

export async function fetchItemsListData(): Promise<ItemProps[]> {
  const response = await fetch(ITEM_API_URL, {
    next: { revalidate: ONE_DAY_TO_SECONDS },
  });

  if (!response) {
    throw new Error("아이템 리스트 로드 실패!");
  }

  const data: ItemDataInterface = await response.json();
  return Object.entries(data.data) as ItemProps[];
}
