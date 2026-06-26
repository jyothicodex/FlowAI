import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Premium Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center w-10 h-10">
            {/* Outer spinning ring */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#7A5AF8] to-[#3b82f6] opacity-40 blur-sm group-hover:opacity-70 group-hover:blur-md transition-all duration-500" />
            {/* Inner glass shape */}
            <div className="relative w-full h-full bg-[#0a0a0a] rounded-xl border border-white/20 flex items-center justify-center overflow-hidden z-10">
              {/* Animated geometric SVG */}
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L22 7.5V16.5L12 22L2 16.5V7.5L12 2Z" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V12" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 7.5L12 12L2 7.5" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" fill="#7A5AF8" className="animate-pulse" />
                <defs>
                  <linearGradient id="logoGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7A5AF8" />
                    <stop offset="1" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          {/* Typography */}
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white leading-none">
              Flow<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A5AF8] to-[#3b82f6]">AI</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#7A5AF8] uppercase leading-none mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
              Neural Engine
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#product" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">Product</a>
          <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">Features</a>
          <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">Pricing</a>
          <a href="#resources" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">Resources</a>
          <a href="#company" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">Company</a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
            Log In
          </button>
          <button className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-200">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
