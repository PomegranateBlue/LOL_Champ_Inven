import RotationChampionList from "@/components/RotationChampionList";
import { Suspense } from "react";
export default function RotationPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="text-3xl font-bold text-center mb-8">로테이션 챔피언</div>
      <Suspense fallback={<p>챔피언 리스트 로딩...</p>}>
        <RotationChampionList />
      </Suspense>
    </div>
  );
}
