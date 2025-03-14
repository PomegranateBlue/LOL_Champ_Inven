import { RIOT_URL } from "@/constants/apiURL";
import Image from "next/image";
import Link from "next/link";
import { Item } from "@/types/itemType";

interface ItemCardProps {
  item: [string, Item];
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <Link
      href={`/items/${item[0]}`}
      className="p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform"
    >
      <Image
        src={`${RIOT_URL.ITEM_IMAGE}/${item[0]}.png`}
        alt="item"
        width={80}
        height={80}
        className="mx-auto"
      />
      <div className="text-center text-white font-semibold mt-2">
        {item[1].name}
      </div>
      <p className="text-gray-400 text-sm text-center mt-1">
        {item[1].plaintext || "설명 없음"}
      </p>
    </Link>
  );
}
