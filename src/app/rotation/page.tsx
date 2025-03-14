"use client";
import {
  useQuery,
} from "@tanstack/react-query";
import { getChampionRotation } from "@/utils/riotApi";
import { Champion } from "@/types/championType";
import ChampionCard from "@/components/ChampionCard";


export default function RotationPage() {
  const { data, isLoading, error } = useQuery<Champion[] | null, Error>({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
  });

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;

  console.log(data);
  return (
    <div>
      <h2>챔피언 로테이션</h2>
      {data &&
        data.map((champion) => (
          <div key={champion.id}>
            <h3>{champion.name}</h3>
            <p>{champion.title}</p>
          </div>
        ))}
    </div>
  );
}
