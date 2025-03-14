// import { fetchItemsListData, ItemProps } from "@/utils/serverApi";
import Link from "next/link";
// import ItemCard from "@/components/ItemCard";
// import { ItemListInterface, ItemProps } from "@/types/itemType";
export default async function ItemPage() {
  const itemData: ItemProps[] = await fetchItemsListData();
  console.log(itemData);
  return (
    <div className="p-6">
      <h2 className="text-red-500 text-3xl p-2">아이템 목록</h2>
      <div className="grid grid-cols-6 gap-6 ">
        {itemData.map((item) => (
          <Link key={item[0]} href={`/items/${item[0]}`}>
            <ItemCard
              name={item.name}
              plaintext={item.plaintext}
              image={item.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
