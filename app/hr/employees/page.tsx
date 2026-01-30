import TopNav from '@/app/ui/top-nav';

const employees = [
  { id: 'EMP-0001', name: 'สมชาย ใจดี', gender: 'Male', dept: 'Engineering', role: 'Staff', status: 'Active' },
  { id: 'EMP-0002', name: 'ศิริพร แสงทอง', gender: 'Female', dept: 'Marketing', role: 'Supervisor', status: 'Active' },
  { id: 'EMP-0003', name: 'กิตติคุณ วัฒนา', gender: 'Male', dept: 'Finance', role: 'Staff', status: 'Inactive' },
];

export default function HrEmployeesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">สร้าง/จัดการพนักงาน</h1>
          <p className="mt-2 text-sm text-slate-600">
            HR เพิ่มพนักงานใหม่ ระบุเพศเพื่อผูกสิทธิ์ Budget Level อัตโนมัติ.
          </p>
          <form className="mt-6 grid gap-4 text-sm md:grid-cols-2">
            <div>
              <label className="font-medium text-slate-700">รหัสพนักงาน</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="EMP-0004" />
            </div>
            <div>
              <label className="font-medium text-slate-700">ชื่อ-นามสกุล</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="ชื่อพนักงาน" />
            </div>
            <div>
              <label className="font-medium text-slate-700">เพศ</label>
              <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div>
              <label className="font-medium text-slate-700">แผนก</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="เช่น HR / Marketing" />
            </div>
            <div>
              <label className="font-medium text-slate-700">ตำแหน่ง</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Staff / Supervisor" />
            </div>
            <div>
              <label className="font-medium text-slate-700">สถานะ</label>
              <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <button
              type="button"
              className="md:col-span-2 w-full rounded-lg bg-slate-900 px-4 py-2 text-white"
            >
              บันทึกพนักงาน
            </button>
          </form>

          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3">รหัส</th>
                  <th className="px-4 py-3">ชื่อ</th>
                  <th className="px-4 py-3">เพศ</th>
                  <th className="px-4 py-3">แผนก</th>
                  <th className="px-4 py-3">ตำแหน่ง</th>
                  <th className="px-4 py-3">สถานะ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="px-4 py-3 font-medium text-slate-800">{employee.id}</td>
                    <td className="px-4 py-3 text-slate-600">{employee.name}</td>
                    <td className="px-4 py-3 text-slate-600">{employee.gender}</td>
                    <td className="px-4 py-3 text-slate-600">{employee.dept}</td>
                    <td className="px-4 py-3 text-slate-600">{employee.role}</td>
                    <td className="px-4 py-3 text-slate-600">{employee.status}</td>
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
