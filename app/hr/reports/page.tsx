import TopNav from '@/app/ui/top-nav';

const monthlySummary = [
  { label: 'คำขอทั้งหมด', value: '24' },
  { label: 'อนุมัติแล้ว', value: '18' },
  { label: 'รอดำเนินการ', value: '4' },
  { label: 'ปฏิเสธ', value: '2' },
];

const auditLogs = [
  {
    date: '2026-02-03 10:30',
    action: 'HR ปรับ Budget Plan เดือน Feb 2026',
    by: 'HR-Admin',
  },
  {
    date: '2026-02-05 14:10',
    action: 'อนุมัติ Budget Request REQ-2026-0021',
    by: 'HR-Lead',
  },
];

export default function HrReportsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">Reports & Audit</h1>
          <p className="mt-2 text-sm text-slate-600">
            สรุปรายงานรายเดือน รายบุคคล และบันทึกการเปลี่ยนแปลงในระบบ.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {monthlySummary.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-800">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-800">รายงานรายบุคคล</h2>
              <div className="mt-3 grid gap-3 text-sm">
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="ค้นหารหัสพนักงาน" />
                <button className="rounded-lg bg-slate-900 px-4 py-2 text-white">ดึงรายงาน</button>
                <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600">
                  ระบบจะแสดงคำขอ Budget, Purchase Claim และ Wallet Ledger ของพนักงานที่เลือก
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-800">Audit / Change Log</h2>
              <div className="mt-3 space-y-3">
                {auditLogs.map((log) => (
                  <div key={log.date} className="rounded-lg border border-slate-200 bg-white p-3 text-sm">
                    <p className="font-medium text-slate-800">{log.action}</p>
                    <p className="text-xs text-slate-500">{log.date} • {log.by}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
