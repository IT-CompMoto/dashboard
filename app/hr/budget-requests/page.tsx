import TopNav from '@/app/ui/top-nav';

const requests = [
  {
    id: 'REQ-2026-0021',
    name: 'ณัฐกานต์ จันทร์ดี',
    dept: 'Marketing',
    level: 'Level B',
    eligible: 4500,
    requested: 4000,
    status: 'Pending',
  },
  {
    id: 'REQ-2026-0022',
    name: 'สมชาย ใจดี',
    dept: 'Engineering',
    level: 'Level A',
    eligible: 2500,
    requested: 2000,
    status: 'Approved',
  },
];

export default function HrBudgetRequestsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">คิวอนุมัติ Budget Request</h1>
          <p className="mt-2 text-sm text-slate-600">
            ตรวจสอบคำขอรายเดือน อนุมัติ/ปฏิเสธ และเพิ่มยอดเข้า Support Wallet.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="ค้นหาชื่อ" />
            <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="แผนก" />
            <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
              <option>สถานะทั้งหมด</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
            <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white">ค้นหา</button>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3">รหัสคำขอ</th>
                  <th className="px-4 py-3">พนักงาน</th>
                  <th className="px-4 py-3">แผนก</th>
                  <th className="px-4 py-3">Level</th>
                  <th className="px-4 py-3">วงเงิน</th>
                  <th className="px-4 py-3">ขอจริง</th>
                  <th className="px-4 py-3">สถานะ</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {requests.map((request) => (
                  <tr key={request.id}>
                    <td className="px-4 py-3 font-medium text-slate-800">{request.id}</td>
                    <td className="px-4 py-3 text-slate-600">{request.name}</td>
                    <td className="px-4 py-3 text-slate-600">{request.dept}</td>
                    <td className="px-4 py-3 text-slate-600">{request.level}</td>
                    <td className="px-4 py-3 text-slate-600">฿{request.eligible}</td>
                    <td className="px-4 py-3 text-slate-600">฿{request.requested}</td>
                    <td className="px-4 py-3 text-slate-600">{request.status}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="rounded-md bg-emerald-500 px-3 py-1 text-xs text-white">Approve</button>
                        <button className="rounded-md bg-rose-500 px-3 py-1 text-xs text-white">Reject</button>
                      </div>
                    </td>
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
