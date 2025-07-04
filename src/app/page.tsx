import Link from "next/link";

export default function Home() {
  // x関連のページへのリンクリスト
  const links = [
    { href: "/x/analysis", label: "Analysis" },
    { href: "/x/draft", label: "Draft" },
    { href: "/x/draft/detail/sample-id", label: "Draft Detail" },
    { href: "/x/kpi", label: "KPI" },
    { href: "/x/template", label: "Template" },
    { href: "/memo", label: "Memo" },
    { href: "/swipe-files", label: "Swipe Files" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">X関連</h2>
      <ul className="w-full max-w-md space-y-4">
        {links.map((link) => (
          <li
            key={link.href}
            className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <Link
              href={link.href}
              className="block px-6 py-4 text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
