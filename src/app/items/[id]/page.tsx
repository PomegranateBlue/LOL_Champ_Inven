import { Item } from "@/types/itemType";
import { fetchItemsListData } from "@/utils/serverApi";
import Image from "next/image";
type Props = {
  params: {
    id: string;
  };
};

export default async function ItemDetailPage({ params }: Props) {
  const items: [string, Item][] = await fetchItemsListData();
  const item = items.find((item) => {
    return item[0] === params.id;
  });
  console.log(item);
  return (
    <div>
      {item && (
        <div className="flex flex-col items-center p-8">
          <Image
            className="border-white border-[2px] rounded-md"
            priority
            src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item[0]}.png`}
            alt="item illustation"
            width={150}
            height={150}
          />
          <h1 className="text-2xl font-bold m-2">{item[1].name}</h1>
          <p className="font-semibold m-2">{item[1].plaintext}</p>
          <div className="flex flex-col gap-2">
            <p>재료값 : {item[1].gold.base}</p>
            <p>완성비용 : {item[1].gold.total}</p>
            <p>판매가격 : {item[1].gold.sell}</p>
          </div>
        </div>
      )}
    </div>
  );
}
