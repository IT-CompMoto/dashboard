import TopNav from '@/app/ui/top-nav';

const levels = [
  {
    name: 'Level A',
    amount: 2000,
    targets: 'ปั่นครบ 80 กม. / เดือน',
    checklist: ['ปั่นครบขั้นต่ำ 80 กม.', 'เข้าร่วมกิจกรรมอย่างน้อย 2 ครั้ง'],
  },
  {
    name: 'Level B',
    amount: 4500,
    targets: 'ปั่นครบ 150 กม. / เดือน',
    checklist: ['ปั่นครบขั้นต่ำ 150 กม.', 'ไม่มีการยกเลิกกิจกรรม', 'อัปโหลดหลักฐานการปั่น'],
  },
  {
    name: 'Level C',
    amount: 6000,
    targets: 'ปั่นครบ 220 กม. / เดือน',
    checklist: ['ปั่นครบขั้นต่ำ 220 กม.', 'เข้าร่วมกิจกรรม 4 ครั้ง', 'รายงานสุขภาพครบถ้วน'],
  },
];

const walletItems = [
  { label: 'ยอดรอเบิกคงเหลือ', value: '฿48,000' },
  { label: 'ยอดสะสมส่วนตัว', value: '฿2,000' },
  { label: 'ขอเบิกเดือนนี้แล้ว', value: '1 ครั้ง' },
];

const ledger = [
  { date: '2026-02-03', type: 'Budget Approved', amount: '+2,000', note: 'Level A' },
  { date: '2026-02-10', type: 'Purchase Approved', amount: '+1,200', note: 'อุปกรณ์จักรยาน' },
  { date: '2026-02-20', type: 'Request Submitted', amount: '-2,000', note: 'ขอเบิกสะสม' },
];

export default function SupportBudgetPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="grid gap-8">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-semibold text-slate-900">Support Budget (งบสนับสนุนรายเดือน)</h1>
            <p className="mt-2 text-sm text-slate-600">
              พนักงานเลือก Budget Level ตามเงื่อนไขที่ทำได้ ยื่นขอเงินจริงได้ไม่เกินวงเงิน พร้อมทบยอดสะสมจากรอบก่อน.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {walletItems.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-800">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">ฟอร์มยื่น Support Budget (1 ครั้ง/เดือน)</h2>
              <form className="mt-4 grid gap-4 text-sm">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-700">ข้อมูลพนักงาน</p>
                  <div className="mt-3 grid gap-3 text-sm text-slate-600">
                    <div className="flex items-center justify-between">
                      <span>ชื่อ-นามสกุล</span>
                      <span className="font-medium text-slate-800">ณัฐกานต์ จันทร์ดี</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>รหัสพนักงาน</span>
                      <span className="font-medium text-slate-800">EMP-00412</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>แผนก</span>
                      <span className="font-medium text-slate-800">Marketing</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700">เลือก Budget Level (เฉพาะเพศของผู้ยื่น)</p>
                  <div className="mt-3 grid gap-3">
                    {levels.map((level) => (
                      <label
                        key={level.name}
                        className="flex cursor-pointer flex-col gap-2 rounded-lg border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <input type="radio" name="budget-level" />
                            <span className="font-semibold text-slate-800">{level.name}</span>
                          </div>
                          <span className="text-sm font-semibold text-slate-900">฿{level.amount}</span>
                        </div>
                        <p className="text-xs text-slate-600">เป้าหมาย: {level.targets}</p>
                        <ul className="list-disc pl-5 text-xs text-slate-600">
                          {level.checklist.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="font-medium text-slate-700">ยอดที่ขอจริง</label>
                    <input
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                      placeholder="0 - 6,000"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-slate-700">ยอดสะสมที่ต้องการเบิกเพิ่ม</label>
                    <input
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                      placeholder="ยอดสะสมสูงสุด 2,000"
                    />
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-700">ยืนยันเงื่อนไข</p>
                  <div className="mt-2 space-y-2 text-sm text-slate-600">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>ยืนยันว่าเข้าเงื่อนไขครบถ้วนและข้อมูลถูกต้อง</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>ยินยอมให้ตรวจสอบย้อนหลังและรับบทลงโทษหากไม่ตรงตามจริง</span>
                    </label>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full rounded-lg bg-slate-900 px-4 py-2 text-white"
                >
                  ส่งคำขอเดือนนี้
                </button>
              </form>
            </div>

            <div className="grid gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">ฟอร์มยื่น Purchase Claim</h2>
                <form className="mt-4 grid gap-4 text-sm">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="font-medium text-slate-700">เดือนที่ยื่น</label>
                      <input
                        type="month"
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                        defaultValue="2026-02"
                      />
                    </div>
                    <div>
                      <label className="font-medium text-slate-700">จำนวนเงิน</label>
                      <input
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                        placeholder="เช่น 1,500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-medium text-slate-700">รายละเอียด</label>
                    <input
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                      placeholder="เช่น ซื้อรองเท้าปั่น, อุปกรณ์สุขภาพ"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-slate-700">แนบหลักฐาน (รูป/สลิป)</label>
                    <input
                      type="file"
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-lg bg-slate-900 px-4 py-2 text-white"
                  >
                    ส่งคำขอ Purchase Claim
                  </button>
                </form>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">Support Wallet (ประวัติยอด)</h2>
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-100 text-xs uppercase text-slate-500">
                      <tr>
                        <th className="px-4 py-3">วันที่</th>
                        <th className="px-4 py-3">ประเภท</th>
                        <th className="px-4 py-3">จำนวน</th>
                        <th className="px-4 py-3">หมายเหตุ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {ledger.map((row) => (
                        <tr key={`${row.date}-${row.type}`}>
                          <td className="px-4 py-3 text-slate-600">{row.date}</td>
                          <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                          <td className="px-4 py-3 text-slate-600">{row.amount}</td>
                          <td className="px-4 py-3 text-slate-600">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
