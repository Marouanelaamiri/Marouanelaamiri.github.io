export default function Projects() {
  return (
    <main className="grow container mx-auto px-6 pt-32 pb-20 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technical Case Studies</h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          Engineering robust, scalable, and stable software solutions through low-level systems programming.
        </p>
      </div>

      {/* Inception Project */}
      <div
        className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-nav/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-primary/20 hover:border-primary/50 transition-all duration-500 mb-16 group"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 560px' }}
      >
        <div className="flex-1 order-1">
          <div className="w-full min-h-[17.5rem] rounded-2xl shadow-2xl shadow-primary/10 border border-primary/20 bg-white/5 flex items-center justify-center text-center text-xs uppercase tracking-[0.2em] text-gray-400 px-6">
             Project screenshot coming soon
          </div>
        </div>
        <div className="flex-1 space-y-6 order-2">
          <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
            Inception: Docker Infrastructure
          </h3>

          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p><strong>The Challenge:</strong> Virtualizing a complete, secure infrastructure stack using isolated containers under strict 42 network constraints.</p>
            <p><strong>The Solution:</strong> Orchestrated an environment using <strong>Docker Compose</strong> featuring Nginx, WordPress, and MariaDB. Configured custom Dockerfiles, managed persistent volumes, and established secure inner-container networking.</p>
            <div className="bg-black/20 p-4 rounded-xl border border-white/5">
              <p className="font-bold text-primary mb-2 text-xs uppercase tracking-wider">Technical Proof:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Implemented <strong>TLS/SSL</strong> configuration for secure Nginx traffic.</li>
                <li>Automated volume mapping for MariaDB data persistence.</li>
                <li>Multi-stage service orchestration ensuring correct dependency loading.</li>
              </ul>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-[10px] font-bold text-blue-300 uppercase">Docker</span>
            <span className="px-3 py-1 bg-gray-900/30 border border-gray-500/30 rounded-full text-[10px] font-bold text-gray-300 uppercase">DevOps</span>
            <span className="px-3 py-1 bg-green-900/30 border border-green-500/30 rounded-full text-[10px] font-bold text-green-300 uppercase">Nginx/SQL</span>
          </div>
          <a href="https://github.com/Marouanelaamiri/Inception/blob/main/README.md" target="_blank" rel="noreferrer noopener" className="inline-block mt-4 text-primary font-bold hover:text-white transition-colors">
            View Documentation ▹
          </a>
        </div>
      </div>

      {/* Transcendent Project */}
      <div
        className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-nav/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-primary/20 hover:border-primary/50 transition-all duration-500 mb-16 group"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 520px' }}
      >
        <div className="flex-1 space-y-6 order-2 md:order-1">
          <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
            Transcendent: Full-Stack Web Platform
          </h3>

          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p><strong>The Challenge:</strong> Developing a high-performance, real-time web application featuring secure authentication, live data updates, and a seamless user experience.</p>
            <p><strong>The Solution:</strong> Built a comprehensive full-stack platform integrating modern frontend frameworks with robust backend logic to handle real-time WebSockets and database management.</p>
            <div className="bg-black/20 p-4 rounded-xl border border-white/5">
              <p className="font-bold text-primary mb-2 text-xs uppercase tracking-wider">Technical Proof:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Architected <strong>Real-time Communication</strong> pipelines.</li>
                <li>Implemented robust User Authentication and Session Management.</li>
                <li>Designed a dynamic, responsive Single Page Application (SPA) interface.</li>
              </ul>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-pink-900/30 border border-pink-500/30 rounded-full text-[10px] font-bold text-pink-300 uppercase">Full-Stack</span>
            <span className="px-3 py-1 bg-yellow-900/30 border border-yellow-500/30 rounded-full text-[10px] font-bold text-yellow-300 uppercase">TypeScript/JS</span>
            <span className="px-3 py-1 bg-indigo-900/30 border border-indigo-500/30 rounded-full text-[10px] font-bold text-indigo-300 uppercase">WebSockets</span>
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2">
          <div className="w-full min-h-[240px] rounded-2xl shadow-2xl shadow-primary/10 border border-primary/20 bg-white/5 flex items-center justify-center text-center text-xs uppercase tracking-[0.2em] text-gray-400 px-6">
             Project screenshot coming soon
          </div>
        </div>
      </div>

      {/* Minishell Project */}
      <div
        className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-nav/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-primary/20 hover:border-primary/50 transition-all duration-500 mb-16 group"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 520px' }}
      >
        <div className="flex-1 order-1">
          <img
            src="/minishell.png"
            alt="Minishell Execution"
            className="w-full rounded-2xl shadow-2xl border border-primary/20 object-cover"
          />
        </div>
        <div className="flex-1 space-y-6 order-2">
          <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
            Minishell: System Architecture
          </h3>

          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p><strong>The Challenge:</strong> Developing a fully functional POSIX-compliant shell from scratch, requiring complex kernel-level integration and process synchronization.</p>
            <p><strong>The Solution:</strong> Engineered a custom Lexer and Parser in <strong>C</strong> to manage command execution pipelines. Implemented precise process management using file descriptors and environment variable tracking.</p>
            <div className="bg-black/20 p-4 rounded-xl border border-white/5">
              <p className="font-bold text-primary mb-2 text-xs uppercase tracking-wider">Technical Proof:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Orchestrated <strong>Process Forking</strong> and seamless Redirections.</li>
                <li>Implemented robust <strong>Signal Handling</strong> to prevent system hangs.</li>
                <li>Maintained 0% memory leakage under recursive testing conditions.</li>
              </ul>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-[10px] font-bold text-blue-300 uppercase">Systems</span>
            <span className="px-3 py-1 bg-red-900/30 border border-red-500/30 rounded-full text-[10px] font-bold text-red-300 uppercase">Unix API</span>
            <span className="px-3 py-1 bg-green-900/30 border border-green-500/30 rounded-full text-[10px] font-bold text-green-300 uppercase">Logic</span>
          </div>

          <a href="https://github.com/Marouanelaamiri/minishell" target="_blank" rel="noreferrer" className="inline-block mt-4 text-primary font-bold hover:text-white transition-colors">
            View Documentation ▹
          </a>
        </div>
      </div>

      {/* Philosophers Project */}
      <div
        className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-nav/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-primary/20 hover:border-primary/50 transition-all duration-500 mb-16 group"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 520px' }}
      >
        <div className="flex-1 space-y-6 order-2 md:order-1">
          <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
            Philosophers: Concurrency
          </h3>

          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p><strong>The Challenge:</strong> Solving the synchronization bottleneck where multiple threads compete for shared resources, leading to deadlocks or data races.</p>
            <p><strong>The Solution:</strong> Applied <strong>Thread Synchronization</strong> using Mutexes and precise timing logic. Built a monitoring system to ensure resource stability without freezing the CPU.</p>
            <div className="bg-black/20 p-4 rounded-xl border border-white/5">
              <p className="font-bold text-primary mb-2 text-xs uppercase tracking-wider">Technical Proof:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Eliminated <strong>Data Races</strong> through strict resource protection logic.</li>
                <li>Engineered millisecond-accurate monitoring for thread vitality.</li>
                <li>Optimized shared memory access to ensure 100% deadlock prevention.</li>
              </ul>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-indigo-900/30 border border-indigo-500/30 rounded-full text-[10px] font-bold text-indigo-300 uppercase">Multi-threading</span>
            <span className="px-3 py-1 bg-pink-900/30 border border-pink-500/30 rounded-full text-[10px] font-bold text-pink-300 uppercase">Concurrency</span>
            <span className="px-3 py-1 bg-yellow-900/30 border border-yellow-500/30 rounded-full text-[10px] font-bold text-yellow-300 uppercase">C Logic</span>
          </div>

          <a href="https://github.com/Marouanelaamiri/Philo" target="_blank" rel="noreferrer" className="inline-block mt-4 text-primary font-bold hover:text-white transition-colors">
            View Documentation ▹
          </a>
        </div>
        <div className="flex-1 order-1 md:order-2">
          <img
            src="/philo.gif"
            alt="Philosophers Thread Simulation"
            className="w-full rounded-2xl shadow-2xl border border-primary/20 object-cover"
          />
        </div>
      </div>

      {/* Cub3D Project */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-nav/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-primary/20 hover:border-primary/50 transition-all duration-500 mb-16 group">
        <div className="flex-1 order-1">
          <img
            src="/cub3d.gif"
            alt="Cub3D Raycasting Engine"
            className="w-full rounded-2xl shadow-2xl border border-primary/20 object-cover"
          />
        </div>
        <div className="flex-1 space-y-6 order-2">
          <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
            Cub3D: Graphics Engine
          </h3>

          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p><strong>The Challenge:</strong> Generating a real-time 3D perspective without the aid of modern GPUs or high-level gaming frameworks.</p>
            <p><strong>The Solution:</strong> Built a custom <strong>Raycasting Engine</strong>. Manually calculated trigonometry and Euclidean geometry to render textured environments at high refresh rates.</p>
            <div className="bg-black/20 p-4 rounded-xl border border-white/5">
              <p className="font-bold text-primary mb-2 text-xs uppercase tracking-wider">Technical Proof:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Optimized algorithms for **consistent 60FPS performance**.</li>
                <li>Developed custom parsing for map stability and error handling.</li>
                <li>Implemented texture mapping and collision detection at the pixel level.</li>
              </ul>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-[10px] font-bold text-purple-300 uppercase">Graphics</span>
            <span className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-[10px] font-bold text-blue-300 uppercase">Mathematics</span>
            <span className="px-3 py-1 bg-gray-900/30 border border-gray-500/30 rounded-full text-[10px] font-bold text-gray-300 uppercase">Optimization</span>
          </div>

          <a href="https://github.com/Marouanelaamiri/cub3D" target="_blank" rel="noreferrer" className="inline-block mt-4 text-primary font-bold hover:text-white transition-colors">
            View Documentation ▹
          </a>
        </div>
      </div>
    </main>
  );
}
