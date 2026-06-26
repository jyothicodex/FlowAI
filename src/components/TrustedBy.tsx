
import { FadeIn } from './FadeIn';

const companies = [
  "Google", "Microsoft", "Amazon", "Deloitte", "Airbnb", "Notion"
];

const TrustedBy = () => {
  return (
    <section className="py-10 border-t border-white/5 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn delay={0.1}>
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
            Trusted by innovative teams worldwide
          </p>
        </FadeIn>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70">
          {companies.map((company, index) => (
            <FadeIn key={company} delay={0.1 + (index * 0.1)}>
              <div 
                className="text-2xl md:text-3xl font-bold text-gray-400 hover:text-white transition-colors duration-300 cursor-default"
                style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.05em' }}
              >
                {company}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
