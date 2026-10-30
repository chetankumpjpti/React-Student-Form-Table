
function StudentTable({studentData = [], removeHandler}) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-cyan-950 p-6 sm:p-10">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[4px] text-cyan-300">
              Student Portal
            </p>

            <h1 className="text-3xl font-bold text-white">
              Student Records
            </h1>

            <p className="mt-2 text-sm text-slate-300">
              Manage and organize student information.
            </p>
          </div>

          <button
            type="button"
            className="rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 shadow-lg shadow-cyan-950/20 backdrop-blur-xl transition hover:bg-cyan-400/20 hover:text-white"
          >
            + Add Student
          </button>
        </div>

        {/* Table Card */}
        <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">

          {/* Table Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-5">
            <h2 className="text-lg font-bold text-white">
              Registered Students
            </h2>

            <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
              Student Directory
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-250 text-left">

              <thead className="bg-cyan-400/5">
                <tr>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    ID
                  </th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    Student Name
                  </th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    Email Address
                  </th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    Enrollment No.
                  </th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    College Name
                  </th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>

                {
                  studentData.map((data, index)=>{
                    return <tr key={index} className="border-t border-white/10 transition duration-300 hover:bg-cyan-400/5">
                  <td className="px-6 py-5 text-sm font-semibold text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </td>
                  <td className="px-6 py-5 text-sm font-semibold text-white">
                    {data.name}
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-300">
                    {data.email}
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-300">
                    {data.enrollment}
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-300">
                    {data.college}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button type="button" className="rounded-lg border border-blue-400/30 bg-blue-400/10 px-3 py-2 text-xs font-semibold text-blue-300 transition hover:bg-blue-400/20">
                        View
                      </button>
                      <button type="button" className="rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-xs font-semibold text-amber-300 transition hover:bg-amber-400/20">
                        Edit
                      </button>
                      <button onClick={()=>removeHandler(index)} type="button" className="rounded-lg border border-red-400/30 bg-red-400/10 px-3 py-2 text-xs font-semibold text-red-300 transition hover:bg-red-400/20">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                  })
                }

              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 bg-white/5 px-6 py-4">
            <p className="text-xs text-slate-400">
              Showing sample student records · Student Management Dashboard
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default StudentTable;
