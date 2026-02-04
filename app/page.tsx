import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      {/* 導航欄 */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-16">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
          <span className="text-xl font-bold text-gray-800">Sharon的作品集</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">首頁</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">專案</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">技術棧</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">關於我</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          聯絡我
        </button>
      </nav>

      {/* 主內容區 */}
      <main className="max-w-6xl mx-auto">
        {/* 英雄區塊 */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                從 <span className="text-blue-600">工程管理</span><br />
                到<span className="text-blue-600">全端開發</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                我具備系統化工程管理知識，並掌握現代全端開發技能。
                能將產品構想快速落地驗證，同時以工程思維優化流程、
                控制風險與成本。
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
                  查看我的專案
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-medium">
                  下載履歷
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-800">學習進度</h3>
                  <p className="text-gray-600 mt-2">正在打造完整作品集</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 技術棧展示 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">技術棧</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Next.js', color: 'bg-gray-900', text: 'text-white' },
              { name: 'TypeScript', color: 'bg-blue-600', text: 'text-white' },
              { name: 'Tailwind CSS', color: 'bg-teal-500', text: 'text-white' },
              { name: 'AWS', color: 'bg-orange-500', text: 'text-white' },
              { name: 'React', color: 'bg-cyan-500', text: 'text-white' },
              { name: 'Git/GitHub', color: 'bg-gray-800', text: 'text-white' },
              { name: 'Vercel', color: 'bg-black', text: 'text-white' },
              { name: 'PostgreSQL', color: 'bg-blue-500', text: 'text-white' },
            ].map((tech) => (
              <div key={tech.name} className={`${tech.color} ${tech.text} p-6 rounded-xl text-center`}>
                <div className="text-2xl font-bold">{tech.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 專案展示 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">專案作品</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '個人作品集網站',
                desc: '使用 Next.js 14 + TypeScript + Tailwind CSS 打造響應式網站',
                tech: ['Next.js', 'TypeScript', 'Tailwind'],
                status: '進行中',
                link: '#'
              },
              {
                title: '全端 SaaS 應用',
                desc: '規劃中的全端項目，將使用 AWS RDS 和 Vercel 部署',
                tech: ['Next.js', 'AWS', 'PostgreSQL'],
                status: '規劃中',
                link: '#'
              },
            ].map((project) => (
              <div key={project.title} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${project.status === '進行中' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-blue-600 hover:text-blue-800 font-medium">
                  查看詳情 →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 學習里程碑 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">學習里程碑</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              { task: '建立 GitHub 帳號與專案', status: 'completed', date: '2024.03' },
              { task: '學習 Next.js 基礎與 Tailwind CSS', status: 'completed', date: '2024.03' },
              { task: '部署第一個專案到 Vercel', status: 'current', date: '2024.03' },
              { task: '學習 TypeScript 進階功能', status: 'pending', date: '2024.04' },
              { task: '完成 AWS SAA 認證', status: 'pending', date: '2024.04' },
              { task: '建立完整全端專案', status: 'pending', date: '2024.05' },
            ].map((item) => (
              <div key={item.task} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                  item.status === 'completed' ? 'bg-green-500' :
                  item.status === 'current' ? 'bg-blue-500' : 'bg-gray-300'
                } text-white`}>
                  {item.status === 'completed' ? '✓' : item.status === 'current' ? '→' : '○'}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className={`font-medium ${
                      item.status === 'completed' ? 'text-gray-900' :
                      item.status === 'current' ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {item.task}
                    </span>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                  {item.status === 'current' && (
                    <div className="mt-1">
                      <div className="h-2 bg-blue-200 rounded-full">
                        <div className="h-full w-1/2 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 聯絡區塊 */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">準備好開始合作了嗎？</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            我正在尋找全端開發或產品工程師的機會，如果你有相關職缺或想交流技術，歡迎聯絡！
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/sharonoatmeal" className="text-gray-700 hover:text-black">
              <span className="text-xl">🐙</span> GitHub
            </a>
            <a href="https://www.linkedin.com/in/shang-jung-wen-887465301/" className="text-gray-700 hover:text-blue-700">
              <span className="text-xl">💼</span> LinkedIn
            </a>
            <a href="mailto:sharonwen101@gmail.com" className="text-gray-700 hover:text-red-600">
              <span className="text-xl">✉️</span> Email
            </a>
          </div>
        </section>
      </main>

      {/* 頁尾 */}
      <footer className="max-w-6xl mx-auto mt-20 pt-8 border-t border-gray-200 text-center text-gray-500">
        <p>© 2024 我的作品集。使用 Next.js + Tailwind CSS 建立。最後更新時間：{new Date().toLocaleDateString('zh-TW')}</p>
      </footer>
    </div>
  );
}





































{/* 聯絡區塊 */}
<div className="flex flex-wrap justify-center gap-6 mb-10">
  <a 
    href="https://github.com/sharonoatmeal"
    className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="text-2xl">🐙</span>
    <span className="font-medium">GitHub</span>
  </a>
  <a 
    href="https://www.linkedin.com/in/shang-jung-wen-887465301/"
    className="flex items-center gap-3 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="text-2xl">💼</span>
    <span className="font-medium">LinkedIn</span>
  </a>
  <a 
    href="mailto:sharonwen101@gmail.com"
    className="flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
  >
    <span className="text-2xl">✉️</span>
    <span className="font-medium">Email</span>
  </a>
</div>

