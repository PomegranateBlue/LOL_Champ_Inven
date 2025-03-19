import { fetchItemsListData } from "@/utils/serverApi";
import dynamic from "next/dynamic";
import { Item } from "@/types/itemType";

//아이템 리스트를 나열하는 페이지, 동적 로딩을 통한 코드 스플리팅 적용
export default async function ItemListPage() {
  const items: [string, Item][] = await fetchItemsListData();
  const ItemCard = dynamic(() => import("@/components/ItemCard"));
  return (
    <div className="bg-gray-950 min-h-screen p-10">
      <h2 className="text-4xl font-extrabold text-center text-yellow-400 mb-8">
        아이템 목록
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {items.map((item) => (
          <ItemCard key={item[0]} item={item} />
        ))}
      </div>
    </div>
  );
}
