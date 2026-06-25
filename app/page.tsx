import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Download, TrendingUp } from 'lucide-react'

const techStack = [
  {
    group: 'Languages',
    items: ['PHP', 'JavaScript', 'TypeScript', 'Go'],
  },
  {
    group: 'Backend',
    items: ['Laravel', 'Express.js', 'CodeIgniter 3', 'GIN-Gonic'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    group: 'Infrastructure',
    items: ['Docker', 'Nginx', 'VPS', 'Git'],
  },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Abdurrahman2881', initial: 'GH' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/abdur-rahman-287821343', initial: 'in' },
  { label: 'Email', href: 'mailto:adurrr123@gmail.com', initial: '@' },
]

export default function HomePage() {
  return (
    <div className="pb-24 px-5 md:px-20 max-w-[1200px] mx-auto">

      {/* ── Hero Section: Asymmetric 2-column grid ── */}
      <section className="relative min-h-[calc(100vh-68px)] grid grid-cols-1 md:grid-cols-2 gap-0 items-center">

        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col justify-center py-20 md:py-0 md:pr-12 lg:pr-20 relative z-10">

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full border border-[#1e2130] bg-[#0e1117]/80 w-fit backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00dbe7] shadow-[0_0_8px_rgba(0,219,231,0.9)] animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-slate-400">
              Available for new opportunities
            </span>
          </div>

          {/* Greeting line */}
          <p className="font-display text-2xl md:text-3xl font-medium text-slate-300 mb-2 tracking-tight">
            Hello! I&apos;m
          </p>

          {/* Name — dominant display type */}
          <h1 className="font-display font-extrabold leading-[1.0] tracking-[-0.04em] text-white mb-2">
            <span className="block text-[52px] sm:text-[64px] md:text-[60px] lg:text-[72px]">
              Abdurrahman
            </span>
            {/* Cyan underline accent — mirrors the wavy line in the reference */}
            <span
              aria-hidden
              className="block mt-2 w-36 h-[3px] rounded-full bg-gradient-to-r from-[#00dbe7] to-cyan-300 shadow-[0_0_12px_rgba(0,219,231,0.5)]"
            />
          </h1>

          {/* Role label */}
          <p className="mt-6 text-base font-semibold tracking-widest uppercase text-[#00dbe7]/80">
            Full-Stack Developer
          </p>

          {/* Indonesian summary from CV */}
          <p className="mt-5 text-[15px] leading-[1.75] text-slate-400 max-w-[460px]">
            Full-Stack Developer berpengalaman yang berfokus pada arsitektur backend dan manajemen
            infrastruktur. Terbiasa membangun aplikasi end-to-end menggunakan Laravel, Golang, dan
            Express, serta berpengalaman dalam integrasi frontend dengan React.js/Next.js. Telah
            berhasil merancang sistem manajemen data yang efisien,{' '}
            <span className="text-white font-medium">
              memangkas waktu operasional hingga 60%
            </span>
            , serta mengelola deployment stabil berbasis Docker dan VPS.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-[#080a10] bg-[#00dbe7] rounded-lg hover:bg-white hover:shadow-[0_0_28px_rgba(0,219,231,0.35)] transition-all duration-300 active:scale-[0.97]"
            >
              View My Work
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </Link>

            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white border border-[#2a2f42] rounded-lg hover:border-[#00dbe7]/40 hover:bg-[#00dbe7]/5 hover:shadow-[0_0_16px_rgba(0,219,231,0.08)] transition-all duration-300 active:scale-[0.97]"
            >
              Get Resume
              <Download
                size={14}
                className="text-slate-500 group-hover:text-[#00dbe7] transition-colors duration-200"
              />
            </a>
          </div>

          {/* Quick stats row */}
          <div className="mt-14 flex items-center gap-8 border-t border-[#1e2130] pt-8">
            <div>
              <p className="font-display text-3xl font-extrabold text-white tracking-tight">4+</p>
              <p className="text-xs text-slate-600 mt-1 tracking-wide uppercase font-medium">Years Coding</p>
            </div>
            <div className="w-px h-10 bg-[#1e2130]" />
            <div>
              <p className="font-display text-3xl font-extrabold text-white tracking-tight">10+</p>
              <p className="text-xs text-slate-600 mt-1 tracking-wide uppercase font-medium">Projects Shipped</p>
            </div>
            <div className="w-px h-10 bg-[#1e2130]" />
            <div>
              <p className="font-display text-3xl font-extrabold text-[#00dbe7] tracking-tight">60%</p>
              <p className="text-xs text-slate-600 mt-1 tracking-wide uppercase font-medium">Ops Efficiency</p>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="relative flex items-center justify-center md:justify-end h-full min-h-[520px] md:min-h-screen">

          {/* Outer ambient glow behind the image */}
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[420px] h-[520px] rounded-[2rem] bg-[#00dbe7]/6 blur-[80px]" />
          </div>

          {/* Image container — tall portrait crop matching reference */}
          <div className="relative w-full max-w-[420px] md:max-w-none md:w-[88%] lg:w-[80%] aspect-[3/4] rounded-[1.5rem] overflow-hidden border border-[#1e2130] shadow-[0_32px_80px_rgba(0,0,0,0.6)]">

            {/* Next.js <Image /> with Unsplash developer portrait */}
            <Image
              src="/image/gambar.png"
              alt="Abdurrahman — Full-Stack Developer portrait"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />

            {/* Bottom gradient overlay — fades image into background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a10] via-[#080a10]/10 to-transparent" />

            {/* Subtle cyan border glow overlay */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-[#00dbe7]/10"
            />

            {/* Floating name card anchored to bottom-left of image */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[#0e1117]/90 backdrop-blur-md border border-[#1e2130] rounded-xl px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-bold font-display">Abdurrahman</p>
                  <p className="text-[#00dbe7] text-xs mt-0.5 tracking-wider">Full-Stack Developer</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00dbe7] shadow-[0_0_6px_rgba(0,219,231,1)]" />
                  <span className="text-[11px] text-slate-500 font-medium">Open to work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating social orbit — right edge, mirroring the reference's circular buttons */}
          <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 -mr-5">
            {socialLinks.map(({ label, href, initial }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full bg-[#0e1117] border border-[#1e2130] flex items-center justify-center text-slate-500 hover:text-[#00dbe7] hover:border-[#00dbe7]/40 hover:bg-[#00dbe7]/8 hover:shadow-[0_0_14px_rgba(0,219,231,0.15)] transition-all duration-300 text-xs font-bold font-display"
              >
                {initial}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-24 border-t border-[#1e2130]">
        <div className="mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00dbe7] mb-3 block">
            Technical Core
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            The Stack I Build With
          </h2>
          <p className="mt-3 text-slate-400 max-w-lg">
            A curated set of tools focused on performance, reliability, and developer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {techStack.map(({ group, items }) => (
            <div
              key={group}
              className="group bg-[#0e1117] border border-[#1e2130] rounded-xl p-5 hover:border-[#00dbe7]/20 hover:bg-[#0e1117]/80 transition-all duration-300"
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-[#00dbe7]/70 mb-4">
                {group}
              </p>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#1e2130] group-hover:bg-[#00dbe7]/40 transition-colors flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Project ── */}
      <section className="py-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#00dbe7] mb-3 block">
              Featured Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Highlight
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#00dbe7] transition-colors"
          >
            All Projects <ArrowRight size={14} />
          </Link>
        </div>

        {/* Featured card */}
        <div className="group relative overflow-hidden rounded-2xl border border-[#1e2130] bg-[#0e1117] hover:border-[#00dbe7]/20 transition-all duration-500">
          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00dbe7]/40 to-transparent" />

          <div className="flex flex-col lg:flex-row">
            {/* Visual area */}
            <div className="lg:w-[55%] h-64 lg:h-auto min-h-[320px] bg-[#080a10] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-8 flex flex-col gap-3 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                  <div className="h-2 w-[60%] bg-[#1e2130] rounded" />
                  <div className="h-2 w-[40%] bg-[#1e2130] rounded" />
                  <div className="mt-4 grid grid-cols-3 gap-3 flex-1">
                    <div className="bg-[#1e2130] rounded-lg col-span-2" />
                    <div className="bg-[#1e2130] rounded-lg" />
                    <div className="bg-[#1e2130] rounded-lg" />
                    <div className="bg-[#1e2130] rounded-lg" />
                    <div className="bg-[#00dbe7]/10 border border-[#00dbe7]/20 rounded-lg" />
                  </div>
                  <div className="h-1.5 w-full bg-[#1e2130] rounded" />
                  <div className="h-1.5 w-[75%] bg-[#1e2130] rounded" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0e1117] opacity-0 lg:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1117] to-transparent opacity-100 lg:opacity-0" />
            </div>

            {/* Content area */}
            <div className="lg:w-[45%] p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-6">
                {['Laravel', 'Tailwind CSS', 'MYSQL'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-slate-500 border border-[#1e2130] px-3 py-1.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-[#00dbe7] transition-colors duration-300">
                Sirul Tour &amp; Travel Platform
              </h3>

              <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                A comprehensive, scalable travel management system architected to handle complex
                booking flows, inventory synchronization, and real-time operational reporting —
                built from the ground up to replace fragmented legacy tools.
              </p>

              {/* Metric */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-[#00dbe7]/5 border border-[#00dbe7]/10 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#00dbe7]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp size={18} className="text-[#00dbe7]" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-[#00dbe7]/60 mb-1">
                    Measured Impact
                  </p>
                  <p className="text-white font-bold text-xl">
                    60% Operational Efficiency Gain
                  </p>
                </div>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#00dbe7] transition-colors w-fit group/link"
              >
                View all projects
                <ArrowUpRight
                  size={14}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 flex md:hidden justify-center">
          <Link
            href="/projects"
            className="flex items-center gap-1.5 text-sm text-[#00dbe7]"
          >
            All Projects <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}