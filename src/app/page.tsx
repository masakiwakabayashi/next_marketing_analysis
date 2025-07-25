import Link from "next/link";
import ApiTest from "@/components/ApiTest";

export default function Home() {
  const links = [
    { href: "/kpi", label: "KPI" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/memo", label: "Memo" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/habit-tracker", label: "Habit Tracker" },
    { href: "/swipe-files", label: "Swipe Files" },
  ];

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-900 tracking-tight">
        ページ一覧
      </h2>
      <ul className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-lg font-semibold text-blue-900 hover:text-blue-700 transition-colors"
          >
            <li
              className="bg-white rounded-xl p-6 shadow text-center border border-blue-100 transition hover:shadow-md"
            >
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-xl p-8 shadow border border-blue-100 mb-8">
          <ApiTest />
        </div>
      </div>
    </div>
  );
}
