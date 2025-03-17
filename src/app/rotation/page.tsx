"use client";

import { useQuery } from "@tanstack/react-query";
import { getChampionRotation } from "@/utils/riotApi";
import { Champion } from "@/types/championType";
import ChampionCard from "@/components/ChampionCard";
import { Suspense } from "react";
import Loading from "./loading";
export default function RotationPage() {
  const {
    data: championRotation,

    error,
  } = useQuery<Champion[], Error>({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
  });

  if (error) return <div>에러 발생</div>;
  console.log(championRotation);
  console.log(error);
  return (
    <div className="container mx-auto p-4">
      <div className="text-3xl font-bold text-center mb-8">로테이션 챔피언</div>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-6  gap-2">
          {championRotation?.map((champion) => (
            <ChampionCard champion={champion} key={champion.id} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
