import { Suspense } from "react";
import ChampionList from "@/components/ChampionList";
//해당 페이지에서 챔피언 개별 카드들을 렌더링
export default async function ChampionPage() {
  return (
    <div>
      <h2 className="font-bold text-red-500 text-4xl text-center p-2 mt-4">
        챔피언 목록
      </h2>
      <Suspense fallback={<p>챔피언 데이터 로딩 중...</p>}>
        <ChampionList />
      </Suspense>
    </div>
  );
}
