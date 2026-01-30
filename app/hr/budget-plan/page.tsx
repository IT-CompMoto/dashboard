import TopNav from '@/app/ui/top-nav';

const levelSamples = [
  { gender: 'Female', name: 'Level A', amount: 2000, targets: '80 กม.', checklist: 3 },
  { gender: 'Female', name: 'Level B', amount: 4500, targets: '150 กม.', checklist: 4 },
  { gender: 'Male', name: 'Level A', amount: 2500, targets: '90 กม.', checklist: 3 },
];

export default function HrBudgetPlanPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">ตั้งค่า Budget Plan รายเดือน</h1>
          <p className="mt-2 text-sm text-slate-600">
            สร้างแผนงบรายเดือน แยกเพศ และกำหนดระดับวงเงินพร้อมเงื่อนไขแบบ checklist.
          </p>
          <form className="mt-6 grid gap-4 text-sm">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="font-medium text-slate-700">เดือน/ปี</label>
                <input type="month" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" defaultValue="2026-02" />
              </div>
              <div>
                <label className="font-medium text-slate-700">เปิดยื่นตั้งแต่</label>
                <input type="date" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
              </div>
              <div>
                <label className="font-medium text-slate-700">ปิดยื่นถึง</label>
                <input type="date" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
              </div>
            </div>
            <div>
              <label className="font-medium text-slate-700">ยื่นได้กี่ครั้ง/เดือน</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" defaultValue="1" />
            </div>
            <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-700">เพิ่ม Budget Level</p>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="เพศ (Male/Female)" />
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="ชื่อ Level" />
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="จำนวนเงิน" />
                <input className="rounded-lg border border-slate-300 px-3 py-2 md:col-span-3" placeholder="เป้าหมาย (km/ครั้ง)" />
                <textarea
                  className="rounded-lg border border-slate-300 px-3 py-2 md:col-span-3"
                  rows={3}
                  placeholder="เงื่อนไขแบบ checklist (บรรทัดละ 1 ข้อ)"
                />
              </div>
              <button type="button" className="mt-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
                เพิ่ม Level
              </button>
            </div>
            <button type="button" className="w-full rounded-lg bg-slate-900 px-4 py-2 text-white">
              Publish Budget Plan
            </button>
          </form>

          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3">เพศ</th>
                  <th className="px-4 py-3">Level</th>
                  <th className="px-4 py-3">วงเงิน</th>
                  <th className="px-4 py-3">เป้าหมาย</th>
                  <th className="px-4 py-3">Checklist</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {levelSamples.map((level, index) => (
                  <tr key={`${level.name}-${index}`}>
                    <td className="px-4 py-3 text-slate-600">{level.gender}</td>
                    <td className="px-4 py-3 font-medium text-slate-800">{level.name}</td>
                    <td className="px-4 py-3 text-slate-600">฿{level.amount}</td>
                    <td className="px-4 py-3 text-slate-600">{level.targets}</td>
                    <td className="px-4 py-3 text-slate-600">{level.checklist} ข้อ</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
