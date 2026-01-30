import TopNav from '@/app/ui/top-nav';
import Link from 'next/link';

const menus = [
  {
    title: 'สร้าง/จัดการพนักงาน',
    description: 'เพิ่มพนักงาน กำหนดเพศ แผนก และสถานะใช้งาน',
    href: '/hr/employees',
  },
  {
    title: 'ตั้งค่า Budget Plan รายเดือน',
    description: 'สร้างระดับงบ เงื่อนไข และช่วงเวลายื่นขอ',
    href: '/hr/budget-plan',
  },
  {
    title: 'คิวอนุมัติ Budget Request',
    description: 'ตรวจสอบคำขอรายเดือนและอนุมัติ/ปฏิเสธ',
    href: '/hr/budget-requests',
  },
  {
    title: 'คิวอนุมัติ Purchase Claim',
    description: 'ตรวจสอบคำขอซื้อสินค้าและเพิ่มยอดเข้า Wallet',
    href: '/hr/purchase-claims',
  },
  {
    title: 'รายงาน / Audit',
    description: 'สรุปยอดรายเดือน รายบุคคล และบันทึกการอนุมัติ',
    href: '/hr/reports',
  },
];

export default function HrPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">HR / Admin Console</h1>
          <p className="mt-2 text-sm text-slate-600">
            เมนูสำหรับ HR ตั้งค่าแผนงบ ดูคิวอนุมัติ และสร้างพนักงานใหม่ในระบบ.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {menus.map((menu) => (
              <Link
                key={menu.title}
                href={menu.href}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300"
              >
                <h2 className="text-lg font-semibold text-slate-800">{menu.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{menu.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
