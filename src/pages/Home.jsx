import { useEffect, useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const phrases = [
    "automate workflows",
    "stabilize systems",
    "simplify complexity",
    "visualize data",
    "build reliability"
  ];

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        setText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
      }

      timer = setTimeout(type, typeSpeed);
    }

    timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="grow container mx-auto px-4 sm:px-6 pt-32 pb-20 max-w-5xl">
      <header className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 bg-primary rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img
            src="/avatar.png"
            alt="Marouane Laamiri"
            className="relative w-64 h-64 rounded-3xl border-2 border-primary/50 shadow-2xl object-cover"
          />
        </div>

        <div className="text-center md:text-left space-y-6 md:ml-8 bg-black/40 p-8 rounded-3xl backdrop-blur-sm border border-white/10 w-full shadow-2xl">
          <h3 className="text-xl text-secondary font-semibold tracking-wide">
            SOFTWARE ENGINEER & AUTOMATION SPECIALIST
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight min-h-[60px]">
            I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">{text}</span>
            <span className="cursor">&nbsp;</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
            I build <strong>robust software architectures</strong> and <strong>automation tools</strong> that resolve technical bottlenecks, ensuring system stability and operational efficiency.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=laamirimarouane8@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-primary hover:bg-purple-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300"
            >
              Let's Work Together
            </a>
            <a
              href="/Marouane_Laamiri_Resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="px-8 py-3 border border-secondary/50 hover:bg-secondary/10 text-secondary font-bold rounded-xl transition-all duration-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </header>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center md:text-left">Solving Problems with Code</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-nav/60 backdrop-blur-md p-8 rounded-3xl border border-primary/20 hover:border-primary/60 hover:-translate-y-2 transition-all duration-500 group">
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-shield-halved text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">System Stability</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Developing fault-tolerant concurrent systems in C/C++. Priority is resource optimization and deadlock prevention.
            </p>
          </div>

          <div className="bg-nav/60 backdrop-blur-md p-8 rounded-3xl border border-primary/20 hover:border-primary/60 hover:-translate-y-2 transition-all duration-500 group">
            <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-robot text-2xl text-green-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Workflow Automation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Architecting Python scripts and custom tools to automate repetitive tasks, reducing manual error.
            </p>
          </div>

          <div className="bg-nav/60 backdrop-blur-md p-8 rounded-3xl border border-primary/20 hover:border-primary/60 hover:-translate-y-2 transition-all duration-500 group">
            <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-layer-group text-2xl text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">DevOps & Infrastructure</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Virtualizing complete IT environments using Docker and Docker Compose. Managing networks and persistent storage.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
