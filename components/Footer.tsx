import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:hello@abdurrahman.dev', icon: Mail, label: 'Email' },
]

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2130] mt-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-20 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-display text-base font-bold tracking-tight text-white hover:text-[#00dbe7] transition-colors"
            >
              ABDURRAHMAN
            </Link>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Full-Stack Developer. Building scalable systems and refined interfaces.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-600">Navigation</span>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-600">Connect</span>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#1e2130] text-slate-500 hover:text-[#00dbe7] hover:border-[#00dbe7]/30 hover:bg-[#00dbe7]/5 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1e2130] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Abdurrahman. Built with precision.
          </p>
          <p className="text-xs text-slate-700 font-mono">
            Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
