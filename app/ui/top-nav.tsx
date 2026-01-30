import Link from 'next/link';

const navItems = [
  { href: '/', label: 'ภาพรวมระบบ' },
  { href: '/activity', label: 'Activity (กิจกรรมปั่น)' },
  { href: '/support-budget', label: 'Support Budget' },
  { href: '/hr', label: 'HR / Admin' },
];

export default function TopNav() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
        <div>
          <p className="text-lg font-semibold text-slate-900">Cycling Support Dashboard</p>
          <p className="text-sm text-slate-500">
            ระบบกิจกรรมปั่น + งบสนับสนุนรายเดือน (Prototype)
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
