import TopNav from '@/app/ui/top-nav';

const registrations = [
  {
    name: 'สมชาย ใจดี',
    bikeLocation: 'ชั้น G - ห้องเก็บจักรยาน',
    travelMode: 'รถบริษัท (Van 3)',
    drink: 'อเมริกาโน่เย็น',
    note: 'ต้องการที่จอดเพิ่ม',
  },
  {
    name: 'ศิริพร แสงทอง',
    bikeLocation: 'อาคาร B',
    travelMode: 'รถส่วนตัว',
    drink: 'ชาเขียวไม่หวาน',
    note: '-',
  },
  {
    name: 'กิตติคุณ วัฒนา',
    bikeLocation: 'บ้าน',
    travelMode: 'รถบริษัท (Sedan 2)',
    drink: 'ลาเต้เย็น',
    note: 'ขอหมวกสำรอง',
  },
];

const totals = [
  { label: 'จุดจักรยานที่เลือกมากที่สุด', value: 'ชั้น G - ห้องเก็บจักรยาน (12 คน)' },
  { label: 'ประเภทรถที่ใช้', value: 'รถบริษัท 18 คน / รถส่วนตัว 6 คน' },
  { label: 'เมนูน้ำยอดนิยม', value: 'อเมริกาโน่เย็น (10 แก้ว)' },
];

export default function ActivityPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="grid gap-8">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-semibold text-slate-900">Activity: กิจกรรมปั่น</h1>
            <p className="mt-2 text-sm text-slate-600">
              HR เปิดกิจกรรมและตั้งค่าตัวเลือกทั้งหมด พนักงานลงทะเบียนแบบเลือกจากรายการ (ไม่ต้องพิมพ์เอง) และเห็นรายชื่อแบบเรียลไทม์.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-lg font-semibold text-slate-800">HR: ตั้งค่ากิจกรรม</h2>
                <form className="mt-4 grid gap-4 text-sm">
                  <div>
                    <label className="font-medium text-slate-700">ชื่อกิจกรรม</label>
                    <input
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                      placeholder="Morning Ride เดือนก.พ."
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="font-medium text-slate-700">เวลาเริ่ม</label>
                      <input
                        type="datetime-local"
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="font-medium text-slate-700">เวลาจบ</label>
                      <input
                        type="datetime-local"
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-medium text-slate-700">ปิดรับลงทะเบียนเวลา</label>
                    <input
                      type="time"
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                    />
                  </div>
                  <div className="rounded-lg border border-dashed border-slate-300 bg-white p-4">
                    <p className="text-sm font-semibold text-slate-700">ชุดตัวเลือกฟอร์ม (ตั้งค่าแยก)</p>
                    <div className="mt-3 grid gap-3 text-xs text-slate-600">
                      <div className="flex items-center justify-between">
                        <span>จักรยานอยู่ไหน</span>
                        <button className="rounded-md border border-slate-200 bg-slate-100 px-2 py-1">
                          จัดการรายการ
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>ไปรถอะไร</span>
                        <button className="rounded-md border border-slate-200 bg-slate-100 px-2 py-1">
                          จัดการรายการ
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>รถบริษัท (ระบุประเภท)</span>
                        <button className="rounded-md border border-slate-200 bg-slate-100 px-2 py-1">
                          จัดการรายการ
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>สั่งน้ำอะไร</span>
                        <button className="rounded-md border border-slate-200 bg-slate-100 px-2 py-1">
                          จัดการรายการ
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-lg bg-slate-900 px-4 py-2 text-white"
                  >
                    เปิดรับลงทะเบียน
                  </button>
                </form>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-lg font-semibold text-slate-800">พนักงาน: ลงทะเบียนกิจกรรม</h2>
                <form className="mt-4 grid gap-4 text-sm">
                  <div>
                    <label className="font-medium text-slate-700">จักรยานอยู่ไหน</label>
                    <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
                      <option>ชั้น G - ห้องเก็บจักรยาน</option>
                      <option>อาคาร B</option>
                      <option>บ้าน</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-medium text-slate-700">ไปรถอะไร</label>
                    <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
                      <option>รถส่วนตัว</option>
                      <option>รถบริษัท</option>
                      <option>รถสาธารณะ</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-medium text-slate-700">กรณีรถบริษัท (ระบุประเภท)</label>
                    <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
                      <option>Van 3</option>
                      <option>Sedan 2</option>
                      <option>Bus 1</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-medium text-slate-700">สั่งน้ำอะไร</label>
                    <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
                      <option>อเมริกาโน่เย็น</option>
                      <option>ลาเต้เย็น</option>
                      <option>ชาเขียวไม่หวาน</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-medium text-slate-700">หมายเหตุเพิ่มเติม</label>
                    <textarea
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                      rows={2}
                      placeholder="เช่น ขอหมวกสำรอง"
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-lg bg-slate-900 px-4 py-2 text-white"
                  >
                    ส่งลงทะเบียน
                  </button>
                </form>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">สรุปกิจกรรมแบบเรียลไทม์</h2>
                <p className="mt-1 text-sm text-slate-600">รายชื่อผู้เข้าร่วมและยอดรวมตามที่ HR ตั้งค่าไว้</p>
              </div>
              <button className="rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                ปิดลงทะเบียน
              </button>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {totals.map((total) => (
                <div key={total.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">{total.label}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">{total.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-4 py-3">พนักงาน</th>
                    <th className="px-4 py-3">จักรยานอยู่ไหน</th>
                    <th className="px-4 py-3">การเดินทาง</th>
                    <th className="px-4 py-3">เมนูน้ำ</th>
                    <th className="px-4 py-3">หมายเหตุ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {registrations.map((row) => (
                    <tr key={row.name}>
                      <td className="px-4 py-3 font-medium text-slate-800">{row.name}</td>
                      <td className="px-4 py-3 text-slate-600">{row.bikeLocation}</td>
                      <td className="px-4 py-3 text-slate-600">{row.travelMode}</td>
                      <td className="px-4 py-3 text-slate-600">{row.drink}</td>
                      <td className="px-4 py-3 text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
