import { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';

const features = [
  {
    id: 1,
    title: 'AI-Powered Automation',
    description: 'Build intelligent workflows that automate repetitive tasks and save hours of manual work.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-500',
    colSpan: 'md:col-span-2'
  },
  {
    id: 2,
    title: 'Smart Integrations',
    description: 'Connect 100+ tools and databases. No code, no complexity. Works with your stack.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'from-emerald-400 to-teal-500',
    colSpan: 'md:col-span-1'
  },
  {
    id: 3,
    title: 'Real-time Analytics',
    description: 'Get instant insights with beautiful dashboards and real-time monitoring.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'from-pink-500 to-rose-500',
    colSpan: 'md:col-span-1'
  },
  {
    id: 4,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SSO, role-based access and compliance with SOC 2, GDPR.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: 'from-amber-400 to-orange-500',
    colSpan: 'md:col-span-1'
  },
  {
    id: 5,
    title: 'Scalable Workflows',
    description: 'From simple automations to complex data pipelines. Scale without limits.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    color: 'from-cyan-400 to-blue-500',
    colSpan: 'md:col-span-1'
  },
  {
    id: 6,
    title: 'AI Insights',
    description: 'Let AI analyze your data and surface insights you would otherwise miss.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'from-purple-500 to-fuchsia-500',
    colSpan: 'md:col-span-2'
  }
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="features" className="py-24 bg-white text-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Everything you need to <br className="hidden md:block" />
            <span className="text-gradient-primary">automate</span> with AI
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            FlowAI combines the power of AI with your data to help you build, automate and scale smarter.
          </p>
        </FadeIn>

        {isMobile ? (
          // Mobile Accordion View
          <div className="flex flex-col gap-4">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 bg-gray-50"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setActiveIndex(activeIndex === feature.id ? null : feature.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-md`}>
                      {feature.icon}
                    </div>
                    <span className="font-semibold text-lg">{feature.title}</span>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center text-gray-400">
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${activeIndex === feature.id ? 'rotate-180' : ''}`} 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${activeIndex === feature.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 pt-0 text-gray-500">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop Bento Grid View
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
            {features.map((feature, i) => (
              <FadeIn key={feature.id} className={feature.colSpan} delay={i * 0.1}>
                <div 
                  onMouseEnter={() => setActiveIndex(feature.id)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`h-full relative group rounded-3xl border border-gray-200 bg-white p-8 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-gray-300`}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${feature.color}`} />
                  <div className="flex flex-col h-full z-10 relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-500 flex-1">{feature.description}</p>
                    
                    <div className="mt-4 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
