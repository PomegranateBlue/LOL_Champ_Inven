import { Champion } from "@/types/championType";

export async function getChampionRotation(): Promise<Champion[]> {
  const response = await fetch("/api/rotation");
  const data = await response.json();
  return data;
}
