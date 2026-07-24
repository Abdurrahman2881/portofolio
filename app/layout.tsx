import type { Metadata } from 'next'
import "./fonts.css";
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Abdurrahman | Full-Stack Developer Portfolio',
  description:
    'Full-Stack Developer specializing in scalable backend architectures and refined frontend experiences. PHP/Laravel, Golang, Node.js, React, Next.js.',
  keywords: ['Full Stack Developer', 'Laravel', 'React', 'Next.js', 'Golang', 'PHP', 'PostgreSQL'],
  authors: [{ name: 'Abdurrahman' }],
  openGraph: {
    title: 'Abdurrahman | Full-Stack Developer',
    description: 'Building scalable backend & seamless frontend experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#080a10] text-slate-200 font-sans antialiased overflow-x-hidden">
        {/* Ambient background glows */}
        <div
          aria-hidden
          className="pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden z-0"
        >
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#00dbe7]/[0.03] rounded-full blur-[140px]" />
          <div className="absolute top-[40%] right-[-10%] w-[500px] h-[700px] bg-cyan-900/[0.04] rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-[30%] w-[400px] h-[400px] bg-[#00dbe7]/[0.02] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
