import { useState, useRef, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { FadeIn } from './FadeIn';

const pricingConfig = {
  INR: { starter: 999, pro: 1999, enterprise: 3999 },
  USD: { starter: 12, pro: 24, enterprise: 48 },
  EUR: { starter: 10, pro: 22, enterprise: 44 }
} as const;

type Currency = keyof typeof pricingConfig;

const currencySymbols: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
  EUR: '€'
};

const PricingCard = ({ 
  tierId,
  title, 
  description, 
  initialPrice, 
  initialAnnualPrice, 
  initialSymbol, 
  features, 
  isPopular = false,
  buttonText = "Get Started"
}: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
      className={`group relative flex flex-col h-full rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-default ${
        isPopular 
          ? 'bg-[#0f0f13] border border-[#7A5AF8]/50 shadow-[0_0_40px_rgba(122,90,248,0.15)] z-10 scale-105' 
          : 'bg-[#0a0a0a]/80 border border-white/5 shadow-xl hover:border-white/10 hover:shadow-2xl'
      }`}
    >
      {/* Dynamic mouse-tracking gradient */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(122, 90, 248, ${isPopular ? 0.15 : 0.08}), transparent 40%)`
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        {isPopular && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7A5AF8] to-[#9E77ED] text-white text-[10px] font-bold px-4 py-1.5 rounded-b-xl uppercase tracking-widest shadow-[0_0_15px_rgba(122,90,248,0.5)]">
            Most Popular
          </div>
        )}

        <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isPopular ? 'text-white' : 'text-gray-100 group-hover:text-white'}`}>
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-8 h-10 leading-relaxed">{description}</p>
        
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span id={`price-${tierId}`} className={`text-5xl font-black tracking-tight transition-all duration-500 ${isPopular ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-[#d4c6ff]' : 'text-white'}`}>
              {initialSymbol}{initialPrice}
            </span>
            <span className="text-gray-500 text-sm font-medium">/month</span>
          </div>
          <div className="annual-text-container text-sm font-medium h-5 mt-2 transition-all duration-500 overflow-hidden opacity-0 max-h-0">
            <span id={`annual-${tierId}`} className={isPopular ? 'text-[#9E77ED]' : 'text-indigo-400'}>
              {initialSymbol}{initialAnnualPrice} billed annually
            </span>
          </div>
        </div>

        <button className={`w-full py-3.5 px-4 rounded-xl font-semibold transition-all duration-300 mb-8 overflow-hidden relative group/btn ${
          isPopular 
            ? 'bg-gradient-to-r from-[#7A5AF8] to-[#9E77ED] text-white shadow-[0_0_20px_rgba(122,90,248,0.3)] hover:shadow-[0_0_30px_rgba(122,90,248,0.6)] hover:scale-[1.02]' 
            : 'bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-white hover:scale-[1.02]'
        }`}>
          <span className="relative z-10">{buttonText}</span>
          {isPopular && (
            <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0" />
          )}
        </button>

        <ul className="flex flex-col gap-4 mt-auto">
          {features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-[15px] text-gray-300 group/item">
              <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isPopular ? 'bg-[#7A5AF8]/20 text-[#9E77ED] group-hover/item:bg-[#7A5AF8]/30' : 'bg-white/5 text-gray-400 group-hover/item:text-white'}`}>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className={`transition-colors duration-300 ${isPopular ? 'group-hover/item:text-white font-medium' : 'group-hover/item:text-gray-100'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [bgMousePos, setBgMousePos] = useState({ x: -1000, y: -1000 });
  const stateRef = useRef<{ billing: 'monthly' | 'annual', currency: Currency }>({ billing: 'monthly', currency: 'USD' });

  const handleSectionMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setBgMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const updatePricingDOM = (newBilling?: 'monthly' | 'annual', newCurrency?: Currency) => {
    if (newBilling) stateRef.current.billing = newBilling;
    if (newCurrency) stateRef.current.currency = newCurrency;
    
    const { billing, currency } = stateRef.current;
    const symbol = currencySymbols[currency];
    
    // Update currency dropdown text
    const activeCurrEl = document.getElementById('active-currency-text');
    if (activeCurrEl) activeCurrEl.textContent = currency;
    const activeCurrSymbolEl = document.getElementById('active-currency-symbol');
    if (activeCurrSymbolEl) activeCurrSymbolEl.textContent = symbol;
    
    // Update pricing cards
    (['starter', 'pro', 'enterprise'] as const).forEach(tier => {
       const base = pricingConfig[currency][tier];
       const price = billing === 'annual' ? Math.round(base * 0.8) : base;
       const annualPrice = Math.round(base * 0.8) * 12;
       
       const priceEl = document.getElementById(`price-${tier}`);
       if (priceEl) priceEl.textContent = `${symbol}${price}`;
       
       const annualEl = document.getElementById(`annual-${tier}`);
       if (annualEl) annualEl.textContent = `${symbol}${annualPrice} billed annually`;
    });
    
    // Update toggle button styles
    const monthlyBtn = document.getElementById('btn-monthly');
    const annualBtn = document.getElementById('btn-annual');
    const togglePill = document.getElementById('toggle-pill');
    
    if (billing === 'monthly') {
      monthlyBtn?.classList.replace('text-gray-400', 'text-black');
      annualBtn?.classList.replace('text-black', 'text-gray-400');
      if (togglePill) togglePill.style.transform = 'translateX(0)';
      
      document.querySelectorAll('.annual-text-container').forEach(el => {
        el.classList.remove('opacity-100', 'max-h-5');
        el.classList.add('opacity-0', 'max-h-0');
      });
    } else {
      monthlyBtn?.classList.replace('text-black', 'text-gray-400');
      annualBtn?.classList.replace('text-gray-400', 'text-black');
      if (togglePill) togglePill.style.transform = 'translateX(100%)';
      
      document.querySelectorAll('.annual-text-container').forEach(el => {
        el.classList.remove('opacity-0', 'max-h-0');
        el.classList.add('opacity-100', 'max-h-5');
      });
    }
  };

  const toggleDropdown = () => {
    const dropdown = document.getElementById('currency-dropdown');
    const arrow = document.getElementById('currency-arrow');
    if (!dropdown || !arrow) return;
    
    if (dropdown.classList.contains('scale-95')) {
      dropdown.classList.remove('scale-95', 'opacity-0', '-translate-y-2', 'pointer-events-none');
      dropdown.classList.add('scale-100', 'opacity-100', 'translate-y-0');
      arrow.classList.add('rotate-180', 'text-white');
    } else {
      dropdown.classList.remove('scale-100', 'opacity-100', 'translate-y-0');
      dropdown.classList.add('scale-95', 'opacity-0', '-translate-y-2', 'pointer-events-none');
      arrow.classList.remove('rotate-180', 'text-white');
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: globalThis.MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#currency-switcher-container')) {
        const dropdown = document.getElementById('currency-dropdown');
        const arrow = document.getElementById('currency-arrow');
        if (dropdown && !dropdown.classList.contains('scale-95')) {
          dropdown.classList.remove('scale-100', 'opacity-100', 'translate-y-0');
          dropdown.classList.add('scale-95', 'opacity-0', '-translate-y-2', 'pointer-events-none');
          arrow?.classList.remove('rotate-180', 'text-white');
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={() => setBgMousePos({ x: -1000, y: -1000 })}
      className="py-32 bg-[#050505] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 md:opacity-100 mix-blend-screen"
        style={{ background: `radial-gradient(800px circle at ${bgMousePos.x}px ${bgMousePos.y}px, rgba(122, 90, 248, 0.03), transparent 40%)` }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeIn className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Pricing Plans
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-white drop-shadow-sm">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium">
            No hidden fees. Unlimited possibilities.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="relative z-50">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            {/* Animated Billing Toggle */}
            <div className="relative flex items-center p-1.5 bg-[#0a0a0a] border border-white/10 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <div id="toggle-pill" className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transform: 'translateX(0)' }} />
              
              <button id="btn-monthly" onClick={() => updatePricingDOM('monthly')} className="text-black relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-colors duration-500">
                Monthly
              </button>
              <button id="btn-annual" onClick={() => updatePricingDOM('annual')} className="text-gray-400 hover:text-white relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-colors duration-500 flex items-center gap-2">
                Annually
                <div className="absolute -top-3 -right-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-400 blur-sm opacity-40 animate-pulse rounded-full" />
                    <span className="relative bg-gradient-to-r from-green-400 to-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-lg font-black whitespace-nowrap transform rotate-6 border border-green-300/30">
                      SAVE 20%
                    </span>
                  </div>
                </div>
              </button>
            </div>

            {/* Premium Currency Switcher */}
            <div id="currency-switcher-container" className="relative z-50">
              <button onClick={toggleDropdown} className="flex items-center gap-2 px-5 py-3 bg-[#0a0a0a] border border-white/10 rounded-full text-white font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-300 shadow-lg">
                <span className="text-gray-500 font-normal mr-1">Currency:</span>
                <span id="active-currency-symbol" className="text-primary font-bold">$</span> 
                <span id="active-currency-text">USD</span>
                <svg id="currency-arrow" className="w-4 h-4 text-gray-400 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div id="currency-dropdown" className="absolute right-0 mt-2 w-full min-w-[140px] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden z-50 transform origin-top transition-all duration-300 scale-95 opacity-0 -translate-y-2 pointer-events-none">
                <div className="py-2">
                  {(['USD', 'EUR', 'INR'] as const).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        updatePricingDOM(undefined, curr);
                        toggleDropdown();
                      }}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-white/5 transition-colors group"
                    >
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {curr}
                      </span>
                      <span className="text-gray-500 group-hover:text-gray-300 transition-colors">
                        {currencySymbols[curr]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center max-w-6xl mx-auto relative z-20">
          <FadeIn delay={0.2}>
            <PricingCard 
              tierId="starter"
              title="Starter"
              description="For individuals and small teams just getting started."
              initialPrice={pricingConfig.USD.starter}
              initialAnnualPrice={Math.round(pricingConfig.USD.starter * 0.8) * 12}
              initialSymbol="$"
              features={['5 Automation Pipelines', '10,000 Runs / Month', 'Basic Integrations', 'Email Support']}
            />
          </FadeIn>

          <FadeIn delay={0.3}>
            <PricingCard 
              tierId="pro"
              title="Pro"
              description="For growing teams who need more power and flexibility."
              initialPrice={pricingConfig.USD.pro}
              initialAnnualPrice={Math.round(pricingConfig.USD.pro * 0.8) * 12}
              initialSymbol="$"
              isPopular={true}
              buttonText="Start Pro Trial"
              features={['Unlimited Pipelines', '100,000 Runs / Month', 'Advanced Integrations', 'Priority Support', 'Custom Data Retention']}
            />
          </FadeIn>

          <FadeIn delay={0.4}>
            <PricingCard 
              tierId="enterprise"
              title="Enterprise"
              description="For large organizations with advanced requirements."
              initialPrice={pricingConfig.USD.enterprise}
              initialAnnualPrice={Math.round(pricingConfig.USD.enterprise * 0.8) * 12}
              initialSymbol="$"
              buttonText="Contact Sales"
              features={['Everything in Pro', 'Custom Data Limits', 'SLA & Compliance', 'Dedicated Support', 'Onboarding & Training']}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
