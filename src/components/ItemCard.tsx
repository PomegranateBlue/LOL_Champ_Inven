// import Image from "next/image";
// import { ItemListInterface } from "@/types/itemType";
// import { ItemProps } from "@/types/itemType";
// interface ItemCardProps {
//   item: [string, Item];
// }
// export default function ItemCard({
//   image,
//   name,
//   plaintext,
// }: ItemListInterface) {
//   return (
//     <div className="border-white border-[1px] rounded-md flex flex-col w-[220px] h-[220px] items-center justify-center ">
//       <Image
//         src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${image.full}`}
//         width={80}
//         height={80}
//         alt={name}
//         className="mx-auto p-2"
//       ></Image>
//       <div className="text-red-500 text-xl font-bold p-2">{name}</div>
//       <div className="text-gray-400 p-2">{plaintext}</div>
//     </div>
//   );
// }
