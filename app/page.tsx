import TopNav from '@/app/ui/top-nav';
import Link from 'next/link';

const sections = [
  {
    title: 'Activity (กิจกรรมปั่น)',
    description:
      'HR เปิดกิจกรรม พร้อมตั้งค่าตัวเลือกทั้งหมด พนักงานลงทะเบียนแบบเรียลไทม์ เห็นสรุปการเดินทางและเมนูน้ำบนหน้าหลัก.',
    href: '/activity',
    cta: 'เปิดหน้ากิจกรรม',
    highlights: [
      'ตั้งค่าแบบฟอร์มแยกตามรายการ (จักรยาน/การเดินทาง/รถบริษัท/เมนูน้ำ)',
      'กำหนดเวลาเริ่ม-จบ และเวลาปิดรับลงทะเบียน',
      'ตารางสรุปผู้เข้าร่วมและยอดรวมแบบเรียลไทม์',
    ],
  },
  {
    title: 'Support Budget (งบสนับสนุนรายเดือน)',
    description:
      'ระบบยื่นงบรายเดือน + สะสมยอด + ยื่นซื้อสินค้า เพิ่มยอดเข้าสู่กระเป๋าเงินรอเบิกตามเงื่อนไข.',
    href: '/support-budget',
    cta: 'เปิดระบบงบสนับสนุน',
    highlights: [
      'ตั้ง Budget Plan รายเดือนแยกเพศและระดับเงื่อนไข',
      'พนักงานยื่นได้เดือนละ 1 ครั้ง พร้อมเลือกวงเงินและยอดที่ขอจริง',
      'Purchase Claim เพิ่มยอดรอเบิก พร้อมแนบหลักฐาน',
    ],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                ภาพรวมระบบ
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">
                ระบบกิจกรรมปั่น & งบสนับสนุนรายเดือน
              </h1>
              <p className="mt-3 text-base text-slate-600">
                เวอร์ชันต้นแบบสำหรับ HR และพนักงาน ใช้งานง่าย แยกโมดูลชัดเจน พร้อมหน้าฟอร์มหลักที่ต้องมีทั้งหมด.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                    <p className="mt-2 text-sm text-slate-600">{section.description}</p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                      {section.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={section.href}
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    {section.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">เมนูพนักงาน</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Dashboard แจ้งเตือนสิทธิ์เดือนนี้</li>
              <li>ยื่น Support Budget (1 ครั้ง/เดือน)</li>
              <li>ยื่น Purchase Claim แนบหลักฐาน</li>
              <li>Support Wallet ตรวจสอบยอดสะสม</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">เมนู HR / Admin</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>ตั้งค่า Budget Plan รายเดือนและระดับเงื่อนไข</li>
              <li>อนุมัติ Budget Request / Purchase Claim</li>
              <li>ปรับยอด Wallet และดูรายงานรายเดือน</li>
              <li>บริหารกิจกรรมปั่นและตัวเลือกฟอร์ม</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
