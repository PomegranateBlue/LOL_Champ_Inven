import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex  p-4 bg-gray-800 text-white ">
      <ul className="flex justify-around w-full">
        <li>
          <Link href="/" className="hover:text-red-500">
            홈
          </Link>
        </li>
        <li>
          <Link href="/champions" className="hover:text-red-500">
            챔피언 목록
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-red-500">
            아이템 목록
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-red-500">
            챔피언 로테이션
          </Link>
        </li>
      </ul>
    </nav>
  );
}
