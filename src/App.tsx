
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Product from './components/Product';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Company from './components/Company';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-indigo-500/30">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Product />
        <Features />
        <Pricing />
        <Testimonials />
        <Company />
      </main>
      <Footer />
    </div>
  );
}

export default App;
