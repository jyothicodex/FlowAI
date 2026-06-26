import { useState, useRef, MouseEvent } from 'react';
import { FadeIn } from './FadeIn';

const Footer = () => {
  const [email, setEmail] = useState('');
  const footerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <footer 
      ref={footerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-[#050505] relative pt-24 pb-16 border-t border-white/5 text-[15px] overflow-hidden"
    >
      {/* Dynamic ambient cursor glow */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(122, 90, 248, 0.08), transparent 40%)`
        }}
      />
      
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-16">
          
          {/* Brand */}
          <FadeIn className="lg:col-span-2" delay={0}>
            <div className="flex flex-col items-start pr-8">
              <div className="flex items-center gap-3 mb-6 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7A5AF8] to-[#9E77ED] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-[0_0_0_rgba(122,90,248,0)] group-hover:shadow-[0_0_20px_rgba(122,90,248,0.5)]">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-[#7A5AF8] group-hover:to-[#9E77ED] transition-all duration-500 tracking-tight">FlowAI</span>
              </div>
              <p className="text-[#a1a1aa] mb-8 leading-relaxed max-w-[280px]">
                The next-gen AI platform to automate data workflows and unlock real business impact.
              </p>
              
              {/* Interactive Social Icons */}
              <div className="flex items-center gap-4">
                {[
                  { name: 'Twitter', icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                  { name: 'LinkedIn', icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { name: 'GitHub', icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
                  { name: 'YouTube', icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="#" 
                    aria-label={social.name}
                    className="relative group w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-[#a1a1aa] hover:text-white transition-all duration-300 hover:border-[#7A5AF8]/50 hover:bg-[#7A5AF8]/10 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(122,90,248,0.5)]"
                  >
                    <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      {social.name === 'GitHub' ? <path fillRule="evenodd" d={social.icon} clipRule="evenodd"/> : <path d={social.icon}/>}
                    </svg>
                    {/* Inner glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-[#7A5AF8] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Links Sections Generator */}
          {[
            { title: 'PRODUCT', links: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Security'] },
            { title: 'RESOURCES', links: ['Docs', 'Blog', 'Guides', 'Templates', 'Help Center'] },
            { title: 'COMPANY', links: ['About Us', 'Careers', 'Contact', 'Partners', 'Privacy Policy'] }
          ].map((column, idx) => (
            <FadeIn key={column.title} delay={0.1 * (idx + 1)}>
              <div className="flex flex-col gap-5">
                <h4 className="text-white font-bold uppercase tracking-[0.1em] text-xs opacity-90">{column.title}</h4>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="group relative text-[#a1a1aa] hover:text-white inline-flex items-center transition-colors duration-200"
                      >
                        <span className="relative z-10">{link}</span>
                        {/* Animated Underline */}
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-[#7A5AF8] to-transparent transition-all duration-300 group-hover:w-full" />
                        {/* Slide-in arrow */}
                        <svg className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[#7A5AF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}

          {/* Newsletter */}
          <FadeIn delay={0.4} className="lg:col-span-2">
            <div className="flex flex-col gap-5 pl-0 lg:pl-4">
              <h4 className="text-white font-bold uppercase tracking-[0.1em] text-xs flex items-center gap-2">
                NEWSLETTER
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7A5AF8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9E77ED]"></span>
                </span>
              </h4>
              <p className="text-[#a1a1aa] leading-relaxed mb-1">
                Get the latest updates and insights straight to your inbox. No spam.
              </p>
              
              <div className="relative group/input mt-2">
                {/* Glowing border effect */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#7A5AF8] via-[#9E77ED] to-[#7A5AF8] opacity-20 group-hover/input:opacity-50 transition-opacity duration-300 blur-sm" />
                
                <div className="relative flex flex-col sm:flex-row items-center gap-3 w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-1 focus-within:border-[#7A5AF8]/50 transition-colors">
                  <div className="flex items-center flex-1 w-full pl-3 pr-2 py-2.5">
                    <svg className="w-5 h-5 text-gray-500 mr-2 group-focus-within/input:text-[#7A5AF8] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email" 
                      className="bg-transparent border-none w-full text-white placeholder:text-[#52525b] focus:outline-none focus:ring-0 text-[15px]"
                    />
                  </div>
                  <button className="w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-[#7A5AF8] to-[#9E77ED] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(122,90,248,0.4)] hover:scale-[1.02] active:scale-[0.98] group/btn">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Subscribe
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    {/* Button hover shimmer */}
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
                <p className="text-[#52525b] text-xs">
                  &copy; {new Date().getFullYear()} FlowAI. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-white/10 hover:bg-white/30 transition-colors cursor-pointer" />
                  <div className="w-2 h-2 rounded-full bg-[#7A5AF8] shadow-[0_0_8px_#7A5AF8]" />
                  <div className="w-2 h-2 rounded-full bg-white/10 hover:bg-white/30 transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
