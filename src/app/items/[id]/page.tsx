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
        <>
          <Image
            priority
            src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item[0]}.png`}
            alt="item illustation"
            width={150}
            height={150}
          />
          <h1>{item[1].name}</h1>
          <p>{item[1].plaintext}</p>
        </>
      )}
    </div>
  );
}
