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
      'Merancang dan mengembangkan platform manajemen jamaah end-to-end menggunakan Laravel, yang berhasil memangkas waktu administrasi pendaftaran hingga 60% melalui sistem validasi data otomatis.',
      'Membangun modul keuangan terintegrasi untuk pemantauan arus kas (Cash Flow) dan pembayaran, dilengkapi sistem Audit Trail guna melacak perubahan data secara ketat dan menghasilkan laporan keuangan real-time untuk keputusan strategis.',
      'Menciptakan sistem manajemen inventaris modern dengan fitur Real-time Stock Logging dan Stock Alert, memastikan akurasi pencatatan mutasi barang mencapai 100% dan mencegah kehabisan stok saat diperlukan.',
      'Mengoptimalkan struktur dan relasi database yang kompleks menggunakan Eloquent ORM, serta menerapkan fitur Soft Deletes dan standarisasi Data Integrity untuk menjamin keamanan serta ketahanan arsip dokumen jamaah.',
    ],
    tech: ['Laravel', 'React', 'PostgreSQL', 'Eloquent ORM', 'Docker'],
  },
  {
    period: 'Sep 2023 — jan 2025',
    role: 'Freelance Fullstack Developer',
    company: 'ArysDevStudio_',
    type: 'work',
    points: [
      'Berhasil merancang dan membangun aplikasi web berbasis riset/akademik untuk mahasiswa tingkat akhir sebagai pemenuhan kebutuhan sistem dalam penelitian skripsi.',
      'Menganalisis kebutuhan fungsional berdasarkan ruang lingkup penelitian mahasiswa untuk menentukan alur kerja sistem, pemodelan data, serta arsitektur aplikasi yang sesuai.',
      'Mengembangkan aplikasi web secara end-to-end menggunakan kombinasi teknologi backend berbasis PHP (Laravel, CodeIgniter 3) dan frontend menggunakan JavaScript serta framework CSS (Tailwind CSS, Bootstrap).',
      'Melakukan pengujian fungsional menyeluruh untuk memastikan seluruh fitur aplikasi berjalan stabil, bebas dari error, dan siap didemonstrasikan.',
      'Memberikan penjelasan dan panduan teknis kepada mahasiswa mengenai arsitektur kode dan database, sehingga mahasiswa paham cara mengoperasikan seluruh sistem aplikasi secara menyeluruh.',
    ],
    tech: ['Laravel', 'CodeIgniter 3', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'PHP'],
  },
  {
    period: 'Feb 2023 — Jun 2023',
    role: 'Magang IT Support & Full Stack Developer',
    company: 'UIN Mahmud Yunus Batusangkar',
    location: 'Batusangkar, Tanah Datar, Sumatera Barat',
    type: 'intern',
    points: [
      'Menangani pemeliharaan, instalasi, dan perbaikan perangkat keras (PC, laptop, printer) serta perangkat lunak di lingkungan kerja kantor dan ruang dosen guna memastikan kelancaran operasional kerja harian.',
      'Merancang dan membangun aplikasi manajemen magang berbasis web menggunakan CodeIgniter 3 (CI3) dan MySQL untuk mempermudah pendataan dan pemantauan aktivitas peserta magang.',
      'Mengembangkan dan mengonfigurasi situs web resmi fakultas menggunakan WordPress, memastikan informasi akademik dapat diakses dengan mudah dan responsif oleh pengguna.',
    ],
    tech: ['CodeIgniter 3', 'MySQL', 'WordPress', 'PHP', 'Bootstrap'],
  },
  {
    period: 'Jan 2021 — Jan 2022',
    role: 'IT Support',
    company: 'IAIN Batusangkar',
    location: 'Batusangkar, Tanah Datar, Sumatera Barat',
    type: 'work',
    points: [
      'Melakukan instalasi, konfigurasi, dan standardisasi perangkat lunak pendukung ujian serta perkuliahan, memastikan 95% kesiapan dan kecocokan sistem sebelum jadwal akademik dimulai.',
      'Melakukan pemeliharaan berkala (preventive maintenance) pada seluruh unit komputer laboratorium serta mengelola pencadangan (backup) data praktikum secara rutin guna menjamin keamanan arsip data dari risiko kehilangan hingga 90%.',
      'Menangani troubleshooting jaringan LAN/Wi-Fi, perangkat keras, dan aplikasi pembelajaran dengan response time yang cepat, mencapai tingkat penyelesaian masalah (SLA) hingga 85% bagi dosen dan mahasiswa.',
      'Menyusun laporan pemeliharaan bulanan secara berkala serta merancang rekomendasi efisiensi operasional untuk meningkatkan utilitas dan kenyamanan fasilitas laboratorium komputer.',
    ],
    tech: ['Linux', 'Windows', 'LAN/Wi-Fi', 'Preventive Maintenance'],
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
          Detail-oriented software engineer with a strong foundation in modern web technologies.
          Focused on building scalable, performant applications.
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