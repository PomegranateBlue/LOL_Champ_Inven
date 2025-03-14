import { fetchItemsListData } from "@/utils/serverApi";
import ItemCard from "@/components/ItemCard";
import { Item } from "@/types/itemType";
export default async function ItemListPage() {
  const items: [string, Item][] = await fetchItemsListData();
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
