import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-gray-100 overflow-hidden pt-16">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-white/5 px-6 py-3 flex justify-between items-center border-b border-white/10 shadow-md">
        <h1 className="text-xl font-bold text-gray-100">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Background animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      <header className="text-center mb-12 z-10 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="relative group flex justify-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300 w-[210px] h-[210px]"></div>
          <Image
            src="/subomi.png"
            alt="Profile Picture"
            width={200}
            height={200}
            className="relative rounded-full border-2 border-white/50 group-hover:border-white transition-all duration-300"
          />
        </div>
        <h1 className="text-5xl font-bold mt-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Shuichiro Hirata
        </h1>
        <p className="text-xl text-gray-300 mt-2 tracking-wider">
          Web Developer | Designer | Creator
        </p>
      </header>

      <main className="text-center max-w-2xl z-10 space-y-8 px-6">
        <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg transform hover:scale-105 transition-all duration-300">
          <p className="text-lg leading-relaxed text-gray-200">
            Hello! I&apos;m Shuichiro, a passionate web developer with a knack
            for creating beautiful and functional web applications. I love
            exploring new technologies and bringing ideas to life through code.
          </p>
        </div>
        <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg transform hover:scale-105 transition-all duration-300">
          <p className="text-lg leading-relaxed text-gray-200">
            When I&apos;m not coding, you can find me enjoying photography,
            traveling, or experimenting with new design trends.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://github.com/shuichiro-16"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-300 transform group-hover:translate-y-full"></span>
            <span className="relative flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </span>
          </a>
          <a
            href="https://linkedin.com/in/shuichiro-16"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 to-purple-500 transition-all duration-300 transform group-hover:translate-y-full"></span>
            <span className="relative flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </span>
          </a>
        </div>
      </main>

      <footer className="mt-16 text-sm text-gray-400 z-10 backdrop-blur-sm bg-white/5 px-6 py-3 rounded-full">
        © 2025 Shuichiro. All rights reserved.
      </footer>
    </div>
  );
}

// Add the following CSS to your globals.css or a similar file:
// .stars {
//   width: 100%;
//   height: 100%;
//   background: #000 url('/stars.svg') repeat;
//   z-index: 0;
//   animation: move-stars 50s linear infinite;
//   position: absolute;
// }
// .twinkling {
//   width: 100%;
//   height: 100%;
//   background: transparent url('/twinkling.svg') repeat;
//   z-index: 1;
//   animation: move-twinkling 100s linear infinite;
//   position: absolute;
// }
// @keyframes move-stars {
//   from { background-position: 0 0; }
//   to { background-position: -10000px 0; }
// }
// @keyframes move-twinkling {
//   from { background-position: 0 0; }
//   to { background-position: 10000px 0; }
// }
