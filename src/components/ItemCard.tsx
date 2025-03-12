import Image from "next/image";
import { ItemListInterface } from "@/types/itemType";

export default function ItemCard({
  image,
  name,
  plaintext,
}: ItemListInterface) {
  return (
    <div>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${image.full}`}
        width={120}
        height={120}
        alt={name}
      ></Image>
      <div>{name}</div>
      <div>{plaintext}</div>
    </div>
  );
}
