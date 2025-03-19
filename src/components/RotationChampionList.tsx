"use client";

import ChampionCard from "./ChampionCard";
import { Champion } from "@/types/championType";
import { useQuery } from "@tanstack/react-query";
import { getChampionRotation } from "@/utils/riotApi";
export default function RotationChampionList() {
  const { data: championRotation, error } = useQuery<Champion[], Error>({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
  });

  if (error) return <div>로테이션 챔피언 로드 에러 발생</div>;
  return (
    <div className="grid grid-cols-6 items-center justify-start gap-4 p-8">
      {championRotation?.map((champion) => (
        <ChampionCard champion={champion} key={champion.id} />
      ))}
    </div>
  );
}
