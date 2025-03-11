import Card from "@/components/HomeCard";
const cards = [
  {
    src: "/images/champion.jpg",
    alt: "champion image",
    text: "챔피언 목록 보기",
    href: "/champions",
  },
  {
    src: "/images/items.jpg",
    alt: "item image",
    text: "아이템 목록 보기",
    href: "/items",
  },
  {
    src: "/images/rotation.jpg",
    alt: "rotation image",
    text: "금주 로테이션 확인",
    href: "/rotation",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-4xl text-red-500 font-bold">리그 오브 레전드 정보</h1>
      <p className="text-opacity-40 text-white">
        Riot Games API를 활용한 정보를 제공합니다
      </p>

      <div className="flex justify-around gap-x-20 mt-20">
        {cards.map((card, index) => (
          <Card
            key={index}
            src={card.src}
            alt={card.alt}
            text={card.text}
            href={card.href}
          />
        ))}
      </div>
    </div>
  );
}
