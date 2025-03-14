import { Champion } from "@/types/championType";

export async function getChampionRotation(): Promise<Champion[] | null> {
  try {
    const response = await fetch("/api/rotation");
    if (!response.ok) {
      throw new Error("로테이션 챔피언 데이터 로드 실패!.");
    }

    const data: Champion[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
