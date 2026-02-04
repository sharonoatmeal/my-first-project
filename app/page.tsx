import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      {/* Navigation Bar */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-16">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
          <span className="text-xl font-bold text-gray-800">Sharon's Portfolio</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Tech Stack</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">About</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Contact Me
        </button>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                From <span className="text-blue-600">Engineering Management</span><br />
                to <span className="text-blue-600">Full-Stack Development</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I bring systematic engineering management expertise combined with modern full-stack development skills.
                I can quickly transform product ideas into working prototypes, while optimizing processes,
                controlling risks, and managing costs with an engineering mindset.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
                  View My Projects
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-medium">
                  Download Resume
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-800">Learning Progress</h3>
                  <p className="text-gray-600 mt-2">Building a complete portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Display */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Tech Stack</h2>
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

        {/* Projects Display */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Personal Portfolio Website',
                desc: 'A responsive website built with Next.js 14 + TypeScript + Tailwind CSS',
                tech: ['Next.js', 'TypeScript', 'Tailwind'],
                status: 'In Progress',
                link: '#'
              },
              {
                title: 'Full-Stack SaaS Application',
                desc: 'A planned full-stack project using AWS RDS and Vercel deployment',
                tech: ['Next.js', 'AWS', 'PostgreSQL'],
                status: 'Planned',
                link: '#'
              },
            ].map((project) => (
              <div key={project.title} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === 'In Progress' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
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
                  View Details →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Milestones */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Learning Milestones</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              { task: 'Set up GitHub account and projects', status: 'completed', date: '2024.03' },
              { task: 'Learn Next.js basics and Tailwind CSS', status: 'completed', date: '2024.03' },
              { task: 'Deploy first project to Vercel', status: 'current', date: '2024.03' },
              { task: 'Master advanced TypeScript features', status: 'pending', date: '2024.04' },
              { task: 'Complete AWS SAA Certification', status: 'pending', date: '2024.04' },
              { task: 'Build a complete full-stack project', status: 'pending', date: '2024.05' },
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

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Collaborate?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm seeking opportunities in full-stack development or product engineering. 
            If you have relevant positions or want to discuss technology, feel free to reach out!
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

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-20 pt-8 border-t border-gray-200 text-center text-gray-500">
        <p>© 2024 Sharon. Built with Next.js + Tailwind CSS. Last updated: {new Date().toLocaleDateString('en-US')}</p>
      </footer>
    </div>
  );
}