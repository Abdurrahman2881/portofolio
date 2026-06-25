'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/',           label: 'Home'       },
  { href: '/projects',   label: 'Projects'   },
  { href: '/experience', label: 'Experience' },
  { href: '/contact',    label: 'Contact'    },
]

export default function Navbar() {
  const pathname    = usePathname()
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* Add a subtle border + deeper bg once the user scrolls past 10px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close drawer on route change */
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300
        bg-[#080a10]/80 backdrop-blur-md
        ${scrolled
          ? 'border-b border-zinc-800/70 shadow-[0_1px_24px_rgba(0,0,0,0.5)]'
          : 'border-b border-transparent'
        }`}
    >
      {/* ── Desktop bar ── */}
      <div className="mx-auto max-w-[1200px] px-5 md:px-16 h-[68px] hidden md:flex items-center justify-between">

        {/* LEFT — Logo */}
        <Link
          href="/"
          className="font-display text-[17px] font-semibold text-white hover:text-[#00dbe7] tracking-tight transition-colors duration-300 flex-shrink-0"
        >
          Abdurrahman
        </Link>

        {/* CENTER — Nav links */}
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative px-5 py-2 text-sm tracking-wide transition-all duration-250 rounded-md block
                      ${active
                        ? 'text-white font-medium'
                        : 'text-zinc-400 hover:text-white font-normal'
                      }`}
                  >
                    {label}
                    {/* Active underline dot */}
                    {active && (
                      <span
                        aria-hidden
                        className="absolute bottom-[5px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00dbe7] shadow-[0_0_6px_rgba(0,219,231,0.9)]"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* RIGHT — Pill CTA */}
        <a
          href="#"
          className="flex-shrink-0 inline-flex items-center gap-1.5 px-6 py-2 text-sm font-medium text-white rounded-full border border-zinc-700 hover:border-[#00dbe7] hover:text-[#00dbe7] hover:shadow-[0_0_14px_rgba(0,219,231,0.15)] transition-all duration-300 active:scale-[0.97]"
        >
          Hire Me
          <span aria-hidden className="text-[#00dbe7] font-bold">»</span>
        </a>
      </div>

      {/* ── Mobile bar ── */}
      <div className="md:hidden mx-auto max-w-[1200px] px-5 h-[60px] flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-display text-base font-semibold text-white tracking-tight"
        >
          Abdurrahman
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
        >
          {open ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="mx-5 mb-4 rounded-xl border border-zinc-800 bg-[#0a0c12]/95 backdrop-blur-md px-4 py-3 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center px-4 py-3 text-sm rounded-lg transition-all duration-200
                  ${active
                    ? 'text-white font-medium bg-white/5'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5 font-normal'
                  }`}
              >
                {active && (
                  <span
                    aria-hidden
                    className="mr-3 w-1 h-1 rounded-full bg-[#00dbe7] shadow-[0_0_6px_rgba(0,219,231,0.9)] flex-shrink-0"
                  />
                )}
                {label}
              </Link>
            )
          })}

          {/* Mobile pill CTA */}
          <a
            href="#"
            className="mt-2 flex items-center justify-center gap-1.5 px-6 py-3 text-sm font-medium text-white rounded-full border border-zinc-700 hover:border-[#00dbe7] hover:text-[#00dbe7] transition-all duration-300"
          >
            Hire Me
            <span aria-hidden className="text-[#00dbe7] font-bold">»</span>
          </a>
        </div>
      </div>
    </header>
  )
}