import { useEffect, useState } from 'react';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // 250ms showing the loader, then trigger the fade out animation
    const fadeOutTimer = setTimeout(() => {
      setIsAnimatingOut(true);
    }, 250);

    // 450ms total orchestration time (safely under the 500ms limit)
    // Completely unmounts from the DOM to free up resources
    const unmountTimer = setTimeout(() => {
      setIsVisible(false);
    }, 450);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-200 ease-in-out ${
        isAnimatingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing aura */}
        <div className="absolute inset-0 bg-[#7A5AF8] blur-[60px] opacity-20 rounded-full w-32 h-32" />
        
        {/* Animated Brand Mark */}
        <svg className="w-16 h-16 text-white relative z-10 animate-[spin_1.5s_linear_infinite]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 7.5V16.5L12 22L2 16.5V7.5L12 2Z" stroke="url(#loaderGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22V12" stroke="url(#loaderGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50" />
          <path d="M22 7.5L12 12L2 7.5" stroke="url(#loaderGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50" />
          <defs>
            <linearGradient id="loaderGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7A5AF8" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Loading text orchestrator */}
        <div className="mt-6 flex flex-col items-center gap-1">
          <span className="text-sm font-bold text-white tracking-widest uppercase">Initializing</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-[#7A5AF8] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '100ms' }} />
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
