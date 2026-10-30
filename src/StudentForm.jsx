
function StudentForm({updateStudentForm}) {

    function submitHandler(event){
         event.preventDefault();
        const data={
            name : event.target.name.value,
            email : event.target.email.value,
            enrollment : event.target.enrollment.value,
            college : event.target.college.value
        }
        updateStudentForm(data)
        event.target.reset()
    }
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-cyan-950 p-6">

      <div className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl sm:p-10">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-400/10 shadow-lg shadow-cyan-500/10">
            <span className="text-3xl">🎓</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-cyan-300">
            Student Registration
          </h1>
        </div>

        {/* Form */}
        <form  onSubmit={submitHandler} className="space-y-5">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white/15 focus:ring-4 focus:ring-cyan-400/20"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white/15 focus:ring-4 focus:ring-cyan-400/20"
            />
          </div>

          {/* Enrollment */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200">
              Enrollment Number
            </label>

            <input
              type="text"
              name="enrollment"
              placeholder="Enter your enrollment ID"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white/15 focus:ring-4 focus:ring-cyan-400/20"
            />
          </div>

          {/* College */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200">
              College Name
            </label>

            <input
              type="text"
              name="college"
              placeholder="Your college or university"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white/15 focus:ring-4 focus:ring-cyan-400/20"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
           
            className="group mt-3 flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-cyan-950/40 transition duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 active:translate-y-0"
          >
            Create Student Profile

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

        </form>

      </div>
    </div>
  );
}

export default StudentForm;
