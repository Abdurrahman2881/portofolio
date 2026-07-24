import { Briefcase, GraduationCap, Server } from 'lucide-react'

interface TimelineItem {
  period: string
  role: string
  company: string
  location?: string
  type: 'work' | 'intern'
  points: string[]
  tech?: string[]
}

const experience: TimelineItem[] = [
  {
    period: 'Dec 2025 — May 2026',
    role: 'Full Stack Developer',
    company: 'Sirul Tour & Travel',
    location: 'Sedayu City, Kelapa Gading, Jakarta Timur',
    type: 'work',
    points: [
      'Designing and building an integrated full ERP system that connects three key modules: Hajj and Umrah package e-commerce, real-time inventory, and finance.',
      'Integrating a webhook-based payment gateway to verify payments in real-time, which immediately triggers automatic inventory stock deduction and financial journal recording without manual intervention.',
      'Handling complex transaction logic (purchases, returns, and cancellations) using database transactions and Eloquent events to prevent stock discrepancies and ensure 100% accuracy in financial reports.',
      'Implementing containerization using Docker and deploying to a VPS server to ensure application stability and consistency between local and production environments.',
      'Leading and executing the User Acceptance Testing (UAT) process directly with the client to validate system workflows, ensure all features align with business requirements, and implement improvements based on feedback prior to launch.',
    ],
    tech: ['Laravel', 'Eloquent ORM', 'Docker', 'Webhook API', 'VPS'],
  },
  {
    period: 'Aug 2023 — Jun 2024',
    role: 'Freelance Fullstack Developer',
    company: 'Freelance',
    type: 'work',
    points: [
      'Built personal branding through social media and established local networks to acquire clients, ranging from university students to small and medium-sized businesses (SMEs) in the surrounding area.',
      'Conducted client meetings to gather application requirements and negotiated project scope, features, and pricing.',
      'Designed and developed applications end-to-end (100%) using technologies aligned with project needs.',
      'Performed manual testing to ensure application functionality and reliability before release.',
      'Deployed applications to production and ensured systems ran smoothly with minimal bugs for client use.',
    ],
    tech: ['JavaScript', 'Laravel', 'MySQL', 'Bootstrap'],
  },
  {
    period: 'Feb 2023 — Jun 2023',
    role: 'Intern Full Stack Developer',
    company: 'UIN Mahmud Yunus Batusangkar',
    location: 'Batusangkar, Tanah Datar, Sumatera Barat',
    type: 'intern',
    points: [
      'Designing and building official WordPress-based landing pages for the faculty and departments, focusing on an interface design that is informative, responsive, and optimized for publishing academic information.',
      'Developed an E-Internship information system using CodeIgniter and MySQL, covering end-to-end internship lifecycle management — from the online registration module and digital attendance tracking to the final internship grade recapitulation.',
      'Coordinated and conducted User Acceptance Testing (UAT) with administrative staff to validate system functionality, identify errors, and ensure the application is ready to streamline internship operations.',
    ],
    tech: ['WordPress', 'CodeIgniter', 'MySQL'],
  },
  {
    period: 'Jan 2021 — Jan 2022',
    role: 'Computer Lab Assistant',
    company: 'IAIN Batusangkar',
    location: 'Batusangkar, Tanah Datar, Sumatera Barat',
    type: 'work',
    points: [
      'Handled the maintenance, installation, and repair of hardware (PCs, laptops, printers) and software in office and faculty room environments to ensure smooth daily operations.',
      'Performed periodic preventive maintenance on all laboratory computer units and routinely managed practical work data backups to safeguard data archives, reducing the risk of loss by up to 90%.',
      'Handled troubleshooting for LAN/Wi-Fi networks, hardware, and learning applications with rapid response times, achieving an 85% issue resolution rate (SLA) for lecturers and students.',
      'Periodically compiled monthly maintenance reports and formulated operational efficiency recommendations to enhance the utilization and comfort of computer laboratory facilities.',
    ],
    tech: ['Hardware Support', 'LAN/Wi-Fi', 'Windows', 'Linux'],
  },
]

export default function ExperiencePage() {
  return (
    <div className="pt-16 pb-24 px-5 md:px-20 max-w-[1200px] mx-auto">
      {/* Header */}
      <header className="mb-20 max-w-3xl">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#00dbe7] mb-4 block">
          Background
        </span>
        <h1 className="font-display text-[40px] sm:text-[56px] md:text-[64px] font-extrabold leading-[1.05] tracking-[-0.04em] text-white mb-6">
          Experience &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00dbe7] to-cyan-200">
            Education
          </span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          A Full-Stack Developer with a strong interest in application development — from a
          computer lab assistant in 2021 to deepening expertise in Full-Stack Development and
          IT Support today.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
        {/* Timeline */}
        <section>
          <div className="flex items-center gap-3 mb-12 pb-6 border-b border-[#1e2130]">
            <div className="w-9 h-9 rounded-lg bg-[#00dbe7]/10 flex items-center justify-center">
              <Briefcase size={16} className="text-[#00dbe7]" />
            </div>
            <h2 className="font-display text-2xl font-bold text-white">Work History</h2>
          </div>

          <div className="relative">
            {/* Timeline track */}
            <div className="absolute left-[7px] top-3 bottom-0 w-px bg-[#1e2130]" />

            <div className="flex flex-col gap-14">
              {experience.map((item, i) => (
                <div key={i} className="relative pl-8 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#1e2130] bg-[#080a10] group-hover:border-[#00dbe7] group-hover:shadow-[0_0_10px_rgba(0,219,231,0.4)] transition-all duration-300" />

                  {/* Card */}
                  <div className="bg-[#0e1117] border border-[#1e2130] rounded-xl p-7 group-hover:border-[#00dbe7]/15 transition-all duration-300 relative overflow-hidden">
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#00dbe7]/0 group-hover:bg-[#00dbe7]/30 transition-all duration-300 rounded-l-xl" />

                    {/* Period */}
                    <p className="text-xs font-mono text-[#00dbe7]/60 mb-3 tracking-wider">
                      {item.period}
                    </p>

                    {/* Role + Company */}
                    <h3 className="font-display text-xl font-bold text-white mb-1">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6">
                      <div className="flex items-center gap-2">
                        <Server size={12} className="text-slate-600 flex-shrink-0" />
                        <span className="text-sm text-slate-400 font-medium">{item.company}</span>
                      </div>
                      {item.type === 'intern' && (
                        <span className="text-[10px] font-semibold tracking-widest uppercase text-[#00dbe7]/50 border border-[#00dbe7]/15 px-2 py-0.5 rounded">
                          Internship
                        </span>
                      )}
                      {item.location && (
                        <span className="text-xs text-slate-600 font-mono">
                          {item.location}
                        </span>
                      )}
                    </div>

                    {/* Points */}
                    <ul className="flex flex-col gap-3 mb-6">
                      {item.points.map((point, pi) => (
                        <li key={pi} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00dbe7]/30 flex-shrink-0 mt-[6px]" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    {item.tech && (
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono text-slate-600 border border-[#1e2130] px-3 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education + Sidebar */}
        <aside className="flex flex-col gap-5 lg:sticky lg:top-28">
          {/* Education card */}
          <div className="bg-[#0e1117] border border-[#1e2130] rounded-xl p-7 border-t-[#00dbe7]/40 border-t-2">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-lg bg-[#00dbe7]/10 flex items-center justify-center">
                <GraduationCap size={16} className="text-[#00dbe7]" />
              </div>
              <h2 className="font-display text-lg font-bold text-white">Education</h2>
            </div>

            <div>
              <p className="text-white font-semibold mb-1">D3 Manajemen Informatika</p>
              <p className="text-sm text-slate-500 mb-6">UIN Mahmud Yunus Batusangkar</p>

              <div className="flex items-center justify-between p-4 rounded-lg bg-[#080a10] border border-[#1e2130]">
                <span className="text-xs text-slate-600 uppercase tracking-widest font-medium">
                  Cumulative GPA
                </span>
                <span className="font-display text-2xl font-extrabold text-[#00dbe7] tracking-tight">
                  3.65
                </span>
              </div>

              <p className="text-xs text-slate-600 text-right mt-2">/ 4.00</p>

              <div className="mt-5 pt-5 border-t border-[#1e2130]">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 mb-2">
                  Activities
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Pelatihan Kepemimpinan Mahasiswa Dasar (PKMD)
                </p>
              </div>
            </div>
          </div>

          {/* Terminal decorative widget */}
          <div className="bg-[#0e1117] border border-[#1e2130] rounded-xl p-5 opacity-50 hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="text-xs text-slate-700 ml-2 font-mono">status.sh</span>
            </div>
            <div className="font-mono text-[11px] text-slate-600 leading-[1.8] space-y-0.5">
              <p><span className="text-[#00dbe7]/50">$</span> init core_systems</p>
              <p className="text-green-500/50">[OK] Full Stack Node active</p>
              <p className="text-green-500/50">[OK] DB connections stable</p>
              <p className="text-green-500/50">[OK] Docker running</p>
              <p><span className="text-[#00dbe7]/50">$</span> <span className="animate-pulse">▋</span></p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}