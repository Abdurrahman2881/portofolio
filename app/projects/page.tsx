import { Github, ExternalLink, TrendingUp, Package, Users, Globe } from 'lucide-react'

interface Project {
  title: string
  description: string
  tech: string[]
  metric?: { label: string; value: string }
  icon: React.ElementType
  githubUrl: string
  demoUrl: string
}

const projects: Project[] = [
  {
    title: 'Pilgrim Management Platform',
    description:
      'An enterprise-grade logistics platform engineered for complex coordination workflows. Designed the core validation pipeline that automated data reconciliation across multiple registration stages — cutting administrative processing time by 60% and eliminating manual bottlenecks.',
    tech: ['Laravel', 'React', 'MySQL', 'REST API'],
    metric: { label: 'Admin time reduced', value: '−60%' },
    icon: Users,
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'Financial & Inventory Module',
    description:
      'A precision-engineered ledger and stock tracking system built for absolute correctness. Implemented double-entry accounting constraints and real-time stock alerts across multi-warehouse setups, achieving 100% stock accuracy with a full audit trail for every mutation.',
    tech: ['Laravel', 'Eloquent ORM', 'PostgreSQL'],
    metric: { label: 'Stock accuracy', value: '100%' },
    icon: Package,
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'Internship Management Web App',
    description:
      'A centralized portal built during internship at UIN Mahmud Yunus connecting students, academic supervisors, and industry partners. Automates progress tracking, evaluation workflows, and official document generation — replacing scattered spreadsheets with a structured digital process.',
    tech: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    icon: TrendingUp,
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'Official Faculty Website',
    description:
      'A high-performance institutional web presence with a custom theme built for accessibility and fast load times. Implemented structured content architecture for academic resources, news, and announcements — ensuring responsive delivery across all devices and connection speeds.',
    tech: ['WordPress', 'PHP', 'CSS3'],
    icon: Globe,
    githubUrl: '#',
    demoUrl: '#',
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-16 pb-24 px-5 md:px-20 max-w-[1200px] mx-auto">
      {/* Header */}
      <header className="mb-20 max-w-3xl">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#00dbe7] mb-4 block">
          Portfolio
        </span>
        <h1 className="font-display text-[40px] sm:text-[56px] md:text-[64px] font-extrabold leading-[1.05] tracking-[-0.04em] text-white mb-6">
          Engineered{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00dbe7] to-cyan-200">
            Solutions
          </span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
          A selection of high-impact systems built with precision — focused on scalable architecture,
          measurable outcomes, and clean codebases.
        </p>
      </header>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => {
          const Icon = project.icon
          return (
            <article
              key={project.title}
              className="group relative bg-[#0e1117] border border-[#1e2130] rounded-2xl p-8 flex flex-col hover:border-[#00dbe7]/20 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-400 overflow-hidden"
            >
              {/* Top hover glow line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00dbe7]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon + links row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#00dbe7]/8 border border-[#00dbe7]/10 flex items-center justify-center group-hover:bg-[#00dbe7]/12 transition-colors">
                  <Icon size={20} className="text-[#00dbe7]/70" />
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    aria-label={`${project.title} GitHub repository`}
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#1e2130] text-slate-600 hover:text-[#00dbe7] hover:border-[#00dbe7]/30 transition-all duration-200"
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href={project.demoUrl}
                    aria-label={`${project.title} live demo`}
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#1e2130] text-slate-600 hover:text-[#00dbe7] hover:border-[#00dbe7]/30 transition-all duration-200"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#00dbe7] transition-colors duration-300">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed flex-grow mb-6">
                {project.description}
              </p>

              {/* Metric highlight */}
              {project.metric && (
                <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-lg bg-[#00dbe7]/5 border border-[#00dbe7]/10">
                  <span className="text-2xl font-extrabold font-display text-[#00dbe7] tracking-tight">
                    {project.metric.value}
                  </span>
                  <span className="text-xs text-slate-500">{project.metric.label}</span>
                </div>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-slate-500 border border-[#1e2130] px-3 py-1.5 rounded-md group-hover:border-slate-700 group-hover:text-slate-400 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}