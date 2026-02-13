import Image from 'next/image';

export default function Home() {
  // 1. 技術棧分類定義
  const techCategories = [
    { 
      category: 'Cloud & Infrastructure', 
      techs: ['AWS (EC2, S3, Lambda)', 'Docker', 'CI/CD', 'IAM & Security'], 
      icon: '☁️',
      color: 'text-orange-600' 
    },
    { 
      category: 'Full-Stack Development', 
      techs: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'], 
      icon: '💻',
      color: 'text-blue-600' 
    },
    { 
      category: 'Frontend Engineering', 
      techs: ['React', 'Tailwind CSS', 'Responsive Design', 'ISR/SSG'], 
      icon: '🎨',
      color: 'text-teal-600' 
    },
    { 
      category: 'Data & Management', 
      techs: ['Python (AI)', 'SQL', 'Tableau', 'Agile/Scrum'], 
      icon: '📊',
      color: 'text-indigo-600' 
    },
  ];

  // 2. 專案清單定義
  const projects = [
    {
      title: 'SaaS Management Dashboard',
      desc: 'Architected a scalable SaaS admin portal integrating AWS S3 for media storage and Serverless functions for backend efficiency.',
      tech: ['Next.js', 'AWS Lambda', 'S3', 'PostgreSQL'],
      status: 'In Progress',
      link: '#'
    },
    {
      title: 'Cloud-Optimized Market Engine',
      desc: 'A Node.js application deployed on AWS EC2 with RDS database integration, demonstrating high-availability infrastructure setup.',
      tech: ['Node.js', 'AWS EC2', 'RDS', 'Git'],
      status: 'Completed',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white p-8">
      {/* 導覽列 Navigation Bar */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-16">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
          <span className="text-xl font-bold text-gray-800">Sharon Wen</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Experience</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Stack</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md">
          Contact Me
        </button>
      </nav>

      <main className="max-w-6xl mx-auto">
        {/* 英雄區塊 Hero Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Available for 2026 Opportunities
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                Engineering Mgmt <br />
                <span className="text-blue-600">& Cloud Architect</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Northeastern MSEM graduate specialized in building scalable full-stack applications. 
                I bridge the gap between <strong>strategic engineering management</strong> and 
                <strong>modern cloud infrastructure</strong>.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-black transition font-medium">
                  View Projects
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-medium">
                  Download CV
                </button>
              </div>
            </div>
            
            {/* 右側 AWS 認證預告卡片 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-1 aspect-square shadow-2xl transform hover:rotate-2 transition-transform">
                <div className="bg-white rounded-[1.4rem] h-full w-full flex flex-col items-center justify-center p-8 text-center">
                   <div className="text-6xl mb-6">☁️</div>
                   <h3 className="text-2xl font-bold text-gray-800">AWS Candidate</h3>
                   <p className="text-gray-500 mt-2">Certified Solutions Architect Associate<br/>(Expected 2026)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 技術核心能力 Core Competencies */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 border-l-4 border-blue-600 pl-4">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((cat) => (
              <div key={cat.category} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition group">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className={`font-bold text-lg mb-4 ${cat.color}`}>{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs font-medium border border-gray-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 精選專案 Featured Projects */}
        <section className="mb-24">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Featured Projects</h2>
            <a href="https://github.com/sharonoatmeal" className="text-blue-600 hover:underline font-medium">View all on GitHub →</a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    project.status === 'In Progress' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center font-bold text-blue-600 hover:text-blue-800 transition">
                  Case Study <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 學習歷程 Roadmap */}
        <section className="bg-slate-900 rounded-3xl p-10 mb-24 text-white">
          <h2 className="text-3xl font-bold mb-10 text-center">2026 Roadmap</h2>
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
              </div>
              <div className="pb-4">
                <p className="text-sm text-gray-400">Q1 2026</p>
                <h4 className="text-lg font-bold">Cloud-First Portfolio Deployment</h4>
                <p className="text-gray-400">Deploying architecture using Next.js, Vercel, and AWS S3 integration.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full border-2 border-blue-500"></div>
              </div>
              <div>
                <p className="text-sm text-gray-400">Q2 2026</p>
                <h4 className="text-lg font-bold text-blue-400">AWS Certified Solutions Architect</h4>
                <p className="text-gray-400">Targeting Associate level certification to validate cloud architectural skills.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 聯絡資訊 Contact Section */}
        <section className="text-center py-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Let's Build the Future</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Seeking opportunities to apply <strong>Engineering Management</strong> principles 
            to <strong>Cloud Infrastructure</strong> challenges.
          </p>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/sharonoatmeal" className="text-gray-500 hover:text-black transition-all transform hover:scale-110 font-medium">GitHub</a>
            <a href="https://www.linkedin.com/in/shang-jung-wen-887465301/" className="text-gray-500 hover:text-blue-700 transition-all transform hover:scale-110 font-medium">LinkedIn</a>
            <a href="mailto:sharonwen101@gmail.com" className="text-gray-500 hover:text-red-500 transition-all transform hover:scale-110 font-medium">Email</a>
          </div>
        </section>
      </main>

      {/* 頁尾 Footer */}
      <footer className="max-w-6xl mx-auto mt-24 py-10 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>© 2026 Sharon Wen. Built with Next.js 14, TypeScript & AWS Mindset.</p>
        <p className="mt-2 text-xs text-gray-300 italic">Last updated: {new Date().toLocaleDateString('en-US')}</p>
      </footer>
    </div>
  );
}