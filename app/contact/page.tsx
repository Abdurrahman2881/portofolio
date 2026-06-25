'use client'

import { useState } from 'react'
import { Mail, Linkedin, ArrowRight, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate network request
    await new Promise((res) => setTimeout(res, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="pt-16 pb-24 px-5 md:px-20 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: headline + direct links */}
        <div className="lg:sticky lg:top-32">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00dbe7] mb-6 block">
            Get In Touch
          </span>
          <h1 className="font-display text-[38px] sm:text-[50px] md:text-[58px] font-extrabold leading-[1.05] tracking-[-0.04em] text-white mb-8">
            Let&apos;s build something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00dbe7] to-cyan-200">
              impactful
            </span>{' '}
            together.
          </h1>
          <p className="text-slate-400 leading-relaxed mb-12 max-w-md">
            Open for new opportunities, technical consultations, and collaborative projects. Reach
            out and let&apos;s discuss your next big idea.
          </p>

          {/* Direct links */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:hello@abdurrahman.dev"
              className="group flex items-center gap-4 p-5 rounded-xl border border-[#1e2130] bg-[#0e1117] hover:border-[#00dbe7]/25 hover:bg-[#00dbe7]/4 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#00dbe7]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00dbe7]/20 transition-colors">
                <Mail size={18} className="text-[#00dbe7]" />
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-0.5 font-medium tracking-wider uppercase">Email</p>
                <p className="text-white text-sm font-medium group-hover:text-[#00dbe7] transition-colors">
                  hello@abdurrahman.dev
                </p>
              </div>
              <ArrowRight
                size={16}
                className="ml-auto text-slate-700 group-hover:text-[#00dbe7] group-hover:translate-x-0.5 transition-all"
              />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl border border-[#1e2130] bg-[#0e1117] hover:border-[#00dbe7]/25 hover:bg-[#00dbe7]/4 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#00dbe7]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00dbe7]/20 transition-colors">
                <Linkedin size={18} className="text-[#00dbe7]" />
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-0.5 font-medium tracking-wider uppercase">LinkedIn</p>
                <p className="text-white text-sm font-medium group-hover:text-[#00dbe7] transition-colors">
                  linkedin.com/in/abdurrahman
                </p>
              </div>
              <ArrowRight
                size={16}
                className="ml-auto text-slate-700 group-hover:text-[#00dbe7] group-hover:translate-x-0.5 transition-all"
              />
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-[#0e1117] border border-[#1e2130] rounded-2xl p-8 md:p-10 relative overflow-hidden">
          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00dbe7]/30 to-transparent" />

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#00dbe7]/10 flex items-center justify-center">
                <CheckCircle size={28} className="text-[#00dbe7]" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Message sent.
                </h3>
                <p className="text-slate-500 text-sm">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFormState({ name: '', email: '', message: '' })
                }}
                className="text-sm text-[#00dbe7] hover:underline mt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              {/* Name */}
              <div className="relative group">
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold tracking-widest uppercase text-slate-600 mb-3"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-transparent border-b border-[#1e2130] pb-3 text-white text-sm placeholder:text-slate-700 focus:outline-none focus:border-[#00dbe7] transition-colors duration-300 caret-[#00dbe7]"
                />
                <div className="absolute bottom-0 left-0 w-0 h-px bg-[#00dbe7] shadow-[0_0_6px_rgba(0,219,231,0.6)] group-focus-within:w-full transition-all duration-500 ease-out" />
              </div>

              {/* Email */}
              <div className="relative group">
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold tracking-widest uppercase text-slate-600 mb-3"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-b border-[#1e2130] pb-3 text-white text-sm placeholder:text-slate-700 focus:outline-none focus:border-[#00dbe7] transition-colors duration-300 caret-[#00dbe7]"
                />
                <div className="absolute bottom-0 left-0 w-0 h-px bg-[#00dbe7] shadow-[0_0_6px_rgba(0,219,231,0.6)] group-focus-within:w-full transition-all duration-500 ease-out" />
              </div>

              {/* Message */}
              <div className="relative group">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold tracking-widest uppercase text-slate-600 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity…"
                  className="w-full bg-transparent border-b border-[#1e2130] pb-3 text-white text-sm placeholder:text-slate-700 focus:outline-none focus:border-[#00dbe7] transition-colors duration-300 resize-none caret-[#00dbe7] leading-relaxed"
                />
                <div className="absolute bottom-0 left-0 w-0 h-px bg-[#00dbe7] shadow-[0_0_6px_rgba(0,219,231,0.6)] group-focus-within:w-full transition-all duration-500 ease-out" />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group relative flex items-center justify-center gap-2.5 w-full py-4 text-sm font-semibold text-[#080a10] bg-[#00dbe7] rounded-lg hover:bg-white hover:shadow-[0_0_24px_rgba(0,219,231,0.25)] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#080a10]/30 border-t-[#080a10] rounded-full animate-spin" />
                    Sending…
                  </span>
                ) : (
                  <>
                    Send Message
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </>
                )}
              </button>

              <p className="text-xs text-center text-slate-700">
                I typically respond within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}