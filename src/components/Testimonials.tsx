import { useState, useEffect, useRef } from 'react';
import { FadeIn } from './FadeIn';

const testimonials = [
  {
    id: 1,
    content: "FlowAI transformed the way we handle data. We automated 80% of our workflows and saved hundreds of hours!",
    author: "Sarah Johnson",
    role: "Head of Data",
    company: "ACME",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5
  },
  {
    id: 2,
    content: "The real-time insights and AI automation have helped us make smarter decisions, faster. Absolute game-changer.",
    author: "Michael Chen",
    role: "CTO",
    company: "FintechLabs",
    avatar: "https://i.pravatar.cc/150?u=michael",
    rating: 5
  },
  {
    id: 3,
    content: "Setup was incredibly easy, and the integrations just work. Our team loves the simplicity and power.",
    author: "Priya Sharma",
    role: "Data Lead",
    company: "HealthPlus",
    avatar: "https://i.pravatar.cc/150?u=priya",
    rating: 5
  },
  {
    id: 4,
    content: "FlowAI's automation pipeline is robust, flexible, and scalable. It's now the backbone of our entire data infrastructure.",
    author: "David Miller",
    role: "Engineering Manager",
    company: "CloudScale",
    avatar: "https://i.pravatar.cc/150?u=david",
    rating: 5
  },
  {
    id: 5,
    content: "We reduced manual work by 90% and improved data accuracy like never before. FlowAI is worth every penny.",
    author: "Emily Watson",
    role: "Operations Head",
    company: "DataVerse",
    avatar: "https://i.pravatar.cc/150?u=emily",
    rating: 5
  },
  {
    id: 6,
    content: "The support team is amazing. They're fast, knowledgeable, and actually care about our success.",
    author: "James Wilson",
    role: "Product Manager",
    company: "Taskify",
    avatar: "https://i.pravatar.cc/150?u=james",
    rating: 5
  }
];

const stats = [
  { value: "2,000+", label: "Happy Customers", icon: "👥" },
  { value: "4.9/5", label: "Average Rating", icon: "⭐" },
  { value: "99.9%", label: "Satisfaction Rate", icon: "🛡️" },
  { value: "120+", label: "Countries", icon: "🌍" },
  { value: "10M+", label: "Workflows Automated", icon: "📊" },
  { value: "50K+", label: "Hours Saved", icon: "⏱️" }
];

// Individual Interactive Card Component
const TestimonialCard = ({ testimonial, isFocused, anyHovered, onHover }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => { onHover(testimonial.id); }}
      onMouseLeave={() => { onHover(null); }}
      className={`h-full relative group rounded-3xl border border-gray-100 bg-white p-8 overflow-hidden transition-all duration-500 cursor-default ${
        anyHovered ? (isFocused ? 'scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.12)] z-10' : 'scale-95 opacity-50 blur-[1px]') : 'shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]'
      }`}
    >
      {/* Mouse tracking glow effect */}
      <div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(122, 90, 248, 0.05), transparent 80%)`
        }}
      />

      <div className="flex flex-col h-full z-10 relative">
        <div className="text-5xl text-indigo-200 font-serif leading-none mb-2 transform group-hover:-translate-y-1 group-hover:text-indigo-400 transition-all duration-300">"</div>
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400 transform group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="text-gray-600 text-[15px] mb-8 flex-1 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
          {testimonial.content}
        </p>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.author} 
              className="w-11 h-11 rounded-full object-cover bg-gray-100 ring-2 ring-transparent group-hover:ring-indigo-100 transition-all duration-300"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-[#0a0a0a] text-sm truncate group-hover:text-indigo-600 transition-colors duration-300">{testimonial.author}</h4>
            <p className="text-xs text-gray-500 truncate">{testimonial.role}</p>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 group-hover:border-indigo-50 transition-colors duration-300">
          <div className="w-6 h-6 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-[10px] group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
            {testimonial.company.charAt(0)}
          </div>
          <span className="text-xs font-semibold text-gray-600">{testimonial.company}</span>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, maxIndex]);

  return (
    <section className="py-24 bg-white relative overflow-hidden text-[#0a0a0a]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none" />
      <div className="absolute -left-[20%] top-[20%] w-[500px] h-[500px] rounded-full bg-indigo-50 blur-[100px] pointer-events-none opacity-50" />
      <div className="absolute -right-[20%] bottom-[20%] w-[500px] h-[500px] rounded-full bg-blue-50 blur-[100px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <FadeIn className="flex flex-col items-center text-center mb-16">
          <div className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 shadow-sm border border-indigo-200/50">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#0a0a0a]">
            Trusted by teams like yours
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mb-8">
            Join thousands of teams who are already building faster, smarter, and better with FlowAI.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-lg shadow-indigo-500/5 hover:shadow-indigo-500/10 transition-shadow duration-300 cursor-default">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/150?img=${i+10}`} alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm hover:-translate-y-1 transition-transform duration-200" />
              ))}
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              <strong>4.9/5</strong> from 2,000+ reviews
            </span>
          </div>
        </FadeIn>

        {/* Carousel Section */}
        <FadeIn delay={0.2} className="relative mb-16">
          {/* Navigation Arrows */}
          <button 
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 w-14 h-14 rounded-full bg-white border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-indigo-600 hover:bg-indigo-50 hover:scale-110 transition-all z-20"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 w-14 h-14 rounded-full bg-white border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-indigo-600 hover:bg-indigo-50 hover:scale-110 transition-all z-20"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div 
            className="overflow-visible px-4 py-12 -mx-4 -my-8"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="px-4 flex-shrink-0"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isFocused={hoveredCardId === testimonial.id}
                    anyHovered={hoveredCardId !== null}
                    onHover={setHoveredCardId}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIndex(i); setIsAutoPlaying(false); }}
                className={`w-2 h-2 rounded-full transition-all duration-500 ease-out ${
                  currentIndex === i ? 'bg-indigo-600 w-8' : 'bg-gray-200 hover:bg-indigo-300 hover:w-4'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </FadeIn>

        {/* Bottom Stats Bar */}
        <FadeIn delay={0.4}>
          <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="text-3xl opacity-80 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">{stat.icon}</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#0a0a0a] text-lg leading-tight group-hover:text-indigo-600 transition-colors duration-300">{stat.value}</span>
                    <span className="text-xs text-gray-500">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Testimonials;
