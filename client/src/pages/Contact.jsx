import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-[#FAFAFA] min-h-screen py-12  flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* MAIN CONTAINER */}
        <div className="bg-white border border-zinc-100 rounded-[2.5rem] shadow-xl shadow-zinc-200/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* BRAND SUPPORT PANEL (Left Column) */}
          <div className="lg:col-span-5 bg-zinc-950 p-8 sm:p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Background Light Gradient */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                Concierge Portal
              </span>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight mt-3 text-white leading-tight">
                Connect With{" "}
                <span className="text-orange-500 font-light italic">
                  Our Team
                </span>
              </h1>
              <p className="text-zinc-400 text-sm mt-4 leading-relaxed max-w-sm">
                Whether exploring architectural projects, requesting custom
                textile finishes, or tracking elite shipments, our lab is ready
                to respond.
              </p>
            </div>

            {/* DIRECT CHANNELS */}
            <div className="mt-12 lg:mt-0 space-y-6 relative z-10">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <HiOutlineEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                    Digital Support
                  </p>
                  <a
                    href="mailto:support@luxechair.com"
                    className="text-sm font-medium text-zinc-200 hover:text-orange-500 transition-colors"
                  >
                    support@luxechair.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <HiOutlinePhone className="text-lg" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                    Direct Concierge
                  </p>
                  <a
                    href="tel:+4100000000"
                    className="text-sm font-medium text-zinc-200 hover:text-orange-500 transition-colors"
                  >
                    +41 00 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <HiOutlineMapPin className="text-lg" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                    Corporate HQ
                  </p>
                  <span className="text-sm font-medium text-zinc-200">
                    Zurich, Switzerland
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 text-[11px] text-zinc-500 font-medium relative z-10">
              Inquiries processed within 12 business hours.
            </div>
          </div>

          {/* FORM CONTEXT (Right Column) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* First Name */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John"
                  className="mt-2 w-full rounded-2xl border border-zinc-200/80 bg-zinc-50/50 px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-950 focus:bg-white transition-all"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Doe"
                  className="mt-2 w-full rounded-2xl border border-zinc-200/80 bg-zinc-50/50 px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-950 focus:bg-white transition-all"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-zinc-200/80 bg-zinc-50/50 px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-950 focus:bg-white transition-all"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Message Details
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Describe your design space inquiry or order details..."
                  className="mt-2 w-full rounded-2xl border border-zinc-200/80 bg-zinc-50/50 px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-950 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full bg-zinc-950 text-white py-4 px-6 rounded-2xl font-semibold text-sm tracking-wide hover:bg-orange-500 transition-all duration-300 shadow-md hover:shadow-orange-500/10 active:scale-[0.99]"
                >
                  Send Verification Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
