import { FadeIn } from './FadeIn';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[#050505] flex items-center">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#7A5AF8]/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Copy */}
          <FadeIn direction="right" className="flex flex-col z-10">
            {/* Premium Badge */}
            <a href="#" className="group relative inline-flex items-center justify-center gap-3 px-5 py-2.5 mb-10 text-sm rounded-full bg-[#18181b]/80 border border-white/10 overflow-hidden backdrop-blur-md animate-slide-up hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_20px_rgba(122,90,248,0.2)] hover:-translate-y-0.5 self-start">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A5AF8]/20 to-[#9E77ED]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-lg">✨</span>
              <span className="relative text-[#e4e4e7] font-semibold tracking-wide group-hover:text-white transition-colors duration-300">
                FlowAI 2.0: The Neural Engine is live
              </span>
            </a>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6">
              From idea to impact, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9E77ED] to-[#3b82f6]">
                instantly.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#a1a1aa] leading-relaxed mb-10 max-w-lg font-medium">
              Design, automate, and scale powerful workflows with AI that <span className="text-[#b490ff] font-bold">thinks ahead</span>—so you can focus on what matters.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              {/* Primary Button */}
              <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7A5AF8] to-[#3b82f6] text-white font-bold hover:shadow-[0_0_30px_rgba(122,90,248,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] duration-300">
                Launch Your First Workflow
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </button>
              
              {/* Secondary Button */}
              <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#121215] border border-white/10 text-white font-bold hover:bg-white/5 transition-colors hover:border-white/20">
                Explore How It Works
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </button>

              {/* 3rd Button: Read the Docs */}
              <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-white/5 text-gray-400 font-bold hover:text-white transition-colors hover:bg-white/5 group">
                Read the Docs
                <span className="text-[#7A5AF8] group-hover:translate-x-1 transition-transform duration-300 font-mono text-lg leading-none">/&gt;</span>
              </button>
            </div>
          </FadeIn>

          {/* Right Side: Visual Workflow Diagram */}
          <FadeIn direction="left" delay={0.2} className="relative h-[500px] w-full mt-16 lg:mt-0 flex items-center justify-center scale-75 sm:scale-90 md:scale-100">
            {/* The SVG lines connecting the nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7A5AF8" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#7A5AF8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glowLine">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Trigger to Processor */}
              <path d="M 80 250 L 220 250.1" fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
              
              {/* Processor to Analyze (Top) */}
              <path d="M 320 250 C 380 250, 380 120, 440 120" fill="none" stroke="#7A5AF8" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
              
              {/* Processor to Transform (Middle) */}
              <path d="M 320 250 L 440 250.1" fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" filter="url(#glowLine)" className="animate-[dash_20s_linear_infinite]" />
              
              {/* Processor to Integrate (Bottom) */}
              <path d="M 320 250 C 380 250, 380 380, 440 380" fill="none" stroke="#7A5AF8" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />

              {/* Analyze to Impact */}
              <path d="M 520 120 C 580 120, 580 250, 640 250.1" fill="none" stroke="#34d399" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />

              {/* Transform to Impact */}
              <path d="M 520 250 L 640 250.1" fill="none" stroke="#34d399" strokeOpacity="0.8" strokeWidth="2" strokeDasharray="4 4" filter="url(#glowLine)" className="animate-[dash_20s_linear_infinite]" />

              {/* Integrate to Impact */}
              <path d="M 520 380 C 580 380, 580 250, 640 250.1" fill="none" stroke="#34d399" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />

              {/* Animated Data Packets (Dots) */}
              <circle r="4" fill="#fff" filter="url(#glowLine)">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 80 250 L 220 250.1" />
              </circle>
              <circle r="3" fill="#b490ff" filter="url(#glowLine)">
                <animateMotion dur="4s" repeatCount="indefinite" path="M 320 250 C 380 250, 380 120, 440 120" />
              </circle>
              <circle r="4" fill="#fff" filter="url(#glowLine)">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 320 250 L 440 250.1" />
              </circle>
              <circle r="3" fill="#b490ff" filter="url(#glowLine)">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M 320 250 C 380 250, 380 380, 440 380" />
              </circle>
              
              <circle r="3" fill="#34d399" opacity="0.6">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 520 120 C 580 120, 580 250, 640 250.1" />
              </circle>
              <circle r="5" fill="#34d399" filter="url(#glowLine)">
                <animateMotion dur="2s" repeatCount="indefinite" path="M 520 250 L 640 250.1" />
              </circle>
              <circle r="3" fill="#34d399" opacity="0.6">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M 520 380 C 580 380, 580 250, 640 250.1" />
              </circle>
            </svg>

            {/* Nodes Container */}
            <div className="absolute inset-0 z-10 w-full h-full">
              
              {/* Trigger Node */}
              <div className="absolute top-[215px] left-[10px] w-[70px] h-[70px] bg-[#121215] border border-white/10 rounded-xl flex flex-col items-center justify-center gap-1 shadow-lg hover:border-[#7A5AF8]/50 transition-colors cursor-default">
                <svg className="w-5 h-5 text-[#b490ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <span className="text-[9px] text-gray-400 font-medium tracking-wide">Trigger</span>
              </div>

              {/* AI Processor Node (Center, Large) */}
              <div className="absolute top-[190px] left-[200px] w-[120px] h-[120px] bg-[#18181b] border-2 border-[#7A5AF8] rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_0_30px_rgba(122,90,248,0.4)]">
                <div className="absolute -inset-2 bg-[#7A5AF8] opacity-20 blur-xl rounded-full animate-pulse" />
                <svg className="w-10 h-10 text-[#c4a8ff] relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                <span className="text-xs text-white font-bold relative z-10">AI Processor</span>
              </div>

              {/* Analyze Node (Top) */}
              <div className="absolute top-[85px] left-[440px] w-[80px] h-[70px] bg-[#121215] border border-white/10 rounded-xl flex flex-col items-center justify-center gap-1 shadow-lg hover:border-[#7A5AF8]/50 transition-colors cursor-default">
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <span className="text-[9px] text-gray-400 font-medium">Analyze</span>
              </div>

              {/* Transform Node (Middle) */}
              <div className="absolute top-[215px] left-[440px] w-[80px] h-[70px] bg-[#121215] border border-white/10 rounded-xl flex flex-col items-center justify-center gap-1 shadow-lg hover:border-[#7A5AF8]/50 transition-colors cursor-default">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                <span className="text-[9px] text-gray-400 font-medium">Transform</span>
              </div>

              {/* Integrate Node (Bottom) */}
              <div className="absolute top-[345px] left-[440px] w-[80px] h-[70px] bg-[#121215] border border-white/10 rounded-xl flex flex-col items-center justify-center gap-1 shadow-lg hover:border-[#7A5AF8]/50 transition-colors cursor-default">
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                <span className="text-[9px] text-gray-400 font-medium">Integrate</span>
              </div>

              {/* Impact Node (Far Right) */}
              <div className="absolute top-[200px] left-[640px] w-[100px] h-[100px] bg-[#121215] border-2 border-[#34d399] rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_0_30px_rgba(52,211,153,0.3)] overflow-hidden group">
                {/* Ripples */}
                <div className="absolute inset-0 bg-[#34d399] opacity-10 animate-ping rounded-2xl" />
                <svg className="w-8 h-8 text-[#34d399] relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <span className="text-xs text-white font-bold relative z-10">Impact</span>
              </div>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
