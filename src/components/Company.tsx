import { FadeIn } from './FadeIn';

const Company = () => {
  return (
    <section id="company" className="py-32 relative bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-[#34d399] uppercase mb-4">Our Mission</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.2] mb-8">
              We believe AI should work for you, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                not the other way around.
              </span>
            </h3>
            <p className="text-xl text-gray-400 leading-relaxed">
              FlowAI was founded by engineers from Stripe, OpenAI, and Vercel to democratize autonomous workflows. We are building the foundational infrastructure for the next generation of internet businesses.
            </p>
          </FadeIn>
        </div>

        {/* Backed By Section */}
        <FadeIn delay={0.2} className="relative mt-32">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-10">Backed by industry leaders</p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Mock logos made with SVG/Text */}
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-white hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">A</div>
              Andressen
            </div>
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-white hover:scale-110 transition-transform duration-300">
              <span className="text-[#ff3366]">Y</span>Combinator
            </div>
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-white hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              Sequoia
            </div>
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-white hover:scale-110 transition-transform duration-300">
              <div className="w-6 h-6 border-[4px] border-white rounded-sm" />
              FoundersFund
            </div>
          </div>
        </FadeIn>

        {/* CTA Banner */}
        <FadeIn delay={0.4} className="mt-32">
          <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7A5AF8]/10 to-blue-600/10" />
            <div className="relative z-10">
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">Join the revolution.</h4>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">We're always looking for world-class talent to join our remote-first team.</p>
              <button className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300">
                View Open Roles
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Company;
