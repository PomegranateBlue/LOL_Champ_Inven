import { Champion } from "@/types/championType";

export async function getChampionRotation(): Promise<Champion[]> {
  const response = await fetch("/api/rotation");
  const data: Champion = await response.json();
  return Object.values(data);
}
