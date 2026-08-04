export default function About() {
  return (
    <main className="flex-grow container mx-auto px-6 pt-32 pb-20 max-w-5xl">
      <div className="bg-nav/60 backdrop-blur-md rounded-3xl border border-primary/30 shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-purple-800 p-6 text-center">
          <h2 className="text-2xl md:text-3xl font-pixel text-white">PLAYER PROFILE</h2>
        </div>

        <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <div className="relative mx-auto w-48 h-48 group">
              <div className="absolute inset-0 bg-primary rounded-full blur opacity-50"></div>
              <img
                src="/assets/avatar.png"
                alt="Marouane Laamiri"
                className="relative w-full h-full rounded-full border-4 border-white object-cover"
              />
            </div>

            <div className="text-center space-y-2 bg-black/30 p-4 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold">Marouane Laamiri</h3>
              <p className="text-primary text-sm font-mono">Class: Software Engineer</p>
              <p className="text-gray-400 text-sm font-mono">Location: Morocco</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">📜 Biography</h3>
              <div className="bg-black/20 p-6 rounded-xl border border-white/5 text-gray-300 leading-relaxed space-y-4">
                <p>
                  Experienced in low-level C/C++ architecture development, hardware diagnostics, and Unix systems programming.
                </p>
                <p>
                  Currently developing containerized environments using Docker and building full-stack web applications.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=laamirimarouane8@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="bg-primary hover:bg-purple-600 text-white px-8 py-3 rounded-xl font-bold transition shadow-lg shadow-primary/30"
              >
                Let's Work Together
              </a>
              <a
                href="/assets/Marouane_Laamiri_Resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="border border-secondary/50 hover:bg-secondary/10 text-secondary px-8 py-3 rounded-xl font-bold transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}