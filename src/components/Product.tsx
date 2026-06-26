import { FadeIn } from './FadeIn';
import { useState, useEffect } from 'react';

const Product = () => {
  const [terminalText, setTerminalText] = useState('');
  const fullText = 'flowai deploy --env production --auto-scale true';
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="product" className="py-32 relative bg-[#050505] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeIn className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-[#7A5AF8] uppercase mb-4">The Platform</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Developer-first <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#7A5AF8]">
              infrastructure.
            </span>
          </h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build, test, and deploy AI workflows natively within your existing CI/CD pipelines.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Code Terminal Showcase */}
          <FadeIn direction="right" delay={0.2} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#7A5AF8] to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-gray-500 font-mono">bash ~ /flowai/production</span>
              </div>
              <div className="font-mono text-sm sm:text-base text-gray-300 leading-relaxed overflow-x-auto">
                <div className="flex gap-4">
                  <span className="text-gray-600">1</span>
                  <span className="text-[#34d399]">import</span> {'{'} Pipeline, Agent {'}'} <span className="text-[#34d399]">from</span> <span className="text-yellow-300">'@flowai/sdk'</span>;
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-600">2</span>
                  <span> </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-600">3</span>
                  <span className="text-blue-400">const</span> workflow = <span className="text-blue-400">new</span> <span className="text-purple-400">Pipeline</span>({'{'}
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-600">4</span>
                  <span>  name: <span className="text-yellow-300">'Data Transformer'</span>,</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-600">5</span>
                  <span>  agents: [<span className="text-purple-400">Agent</span>.<span className="text-blue-400">gpt4</span>({'{'} temp: <span className="text-orange-400">0.7</span> {'}'})],</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-600">6</span>
                  <span>  mode: <span className="text-yellow-300">'autonomous'</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-600">7</span>
                  <span>{'}'});</span>
                </div>
                <div className="flex gap-4 mt-6">
                  <span className="text-gray-600">$</span>
                  <div className="flex items-center">
                    <span className="text-white">{terminalText}</span>
                    <span className="w-2 h-5 bg-white/70 ml-1 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Step-by-Step Info */}
          <FadeIn direction="left" delay={0.4} className="flex flex-col gap-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#121215] border border-white/10 flex items-center justify-center text-[#7A5AF8] font-bold text-lg shadow-[0_0_15px_rgba(122,90,248,0.2)]">1</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Initialize SDK</h4>
                <p className="text-gray-400 leading-relaxed">Drop our lightweight SDK into your Next.js, Node, or Python backend in under 3 minutes.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#121215] border border-white/10 flex items-center justify-center text-[#7A5AF8] font-bold text-lg shadow-[0_0_15px_rgba(122,90,248,0.2)]">2</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Define the Pipeline</h4>
                <p className="text-gray-400 leading-relaxed">Write declarative logic mapping out your AI agents, triggers, and expected data transformations.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-r from-[#7A5AF8] to-[#3b82f6] flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.4)]">3</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Ship to Edge</h4>
                <p className="text-gray-400 leading-relaxed">One command deploys your autonomous workflow globally with instant auto-scaling and zero cold starts.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Product;
