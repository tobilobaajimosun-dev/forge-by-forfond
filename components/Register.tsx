"use client";

import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    ticket: "standard",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="register" className="bg-[#272727] py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-5xl mb-6">🎉</div>
          <h2 className="text-3xl font-black text-white mb-4">
            You&apos;re Registered!
          </h2>
          <p className="text-white/60 text-lg">
            Welcome to Forge by Forfond. Check your email at{" "}
            <span className="text-[#B69556]">{form.email}</span> for
            confirmation details.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="bg-[#272727] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#B69556] text-sm font-semibold uppercase tracking-widest mb-3">
            Join Us
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Register Now
          </h2>
          <p className="text-white/50 mt-4">
            Seats are limited — reserve yours today.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-white/60 mb-1.5">
                Full Name
              </label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Adaeze Okafor"
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#B69556] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1.5">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#B69556] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-white/60 mb-1.5">
                Company
              </label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Acme Corp"
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#B69556] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1.5">
                Job Title
              </label>
              <input
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="Product Manager"
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#B69556] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/60 mb-1.5">
              Ticket Type
            </label>
            <select
              name="ticket"
              value={form.ticket}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#B69556] transition-colors"
            >
              <option value="standard" className="bg-neutral-900">
                Standard — Free
              </option>
              <option value="vip" className="bg-neutral-900">
                VIP — ₦50,000
              </option>
              <option value="table" className="bg-neutral-900">
                Corporate Table (10 seats) — ₦400,000
              </option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#B69556] hover:bg-[#c9a96a] disabled:opacity-60 text-white font-bold py-4 rounded-xl text-base transition-colors mt-2"
          >
            {loading ? "Submitting..." : "Complete Registration"}
          </button>
        </form>
      </div>
    </section>
  );
}
