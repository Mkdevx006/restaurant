
import React, { useState } from 'react';
import Hero from '../components/Hero';
import SearchResults from '../components/SearchResults';
import { MOCK_PLACES, Place, CATEGORIES } from '../constants';

const LandingPage: React.FC = () => {
  const [results, setResults] = useState<Place[]>([]);
  const [searchRoute, setSearchRoute] = useState({ source: '', destination: '' });

  const handleSearch = (source: string, destination: string) => {
    setSearchRoute({ source, destination });
    setResults(MOCK_PLACES);
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onSearch={handleSearch} />
      
      {/* Category Inspiration Section (Swiggy Style) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100 overflow-hidden">
        <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">What's on your mind?</h2>
        <div className="flex overflow-x-auto pb-4 gap-8 scrollbar-hide no-scrollbar">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="flex-shrink-0 text-center cursor-pointer group">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-3 border-2 border-transparent group-hover:border-orange-500 transition-all shadow-md">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <p className="font-bold text-slate-700 group-hover:text-orange-600 transition-colors">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      <SearchResults results={results} route={searchRoute} />

      {/* Featured Chains Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-10 tracking-tight text-center">Top Restaurant Chains on Highways</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {['Starbucks', 'McDonalds', 'Haldirams', 'Subway', 'KFC'].map(chain => (
              <div key={chain} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-center font-black text-slate-300 text-xl italic tracking-tighter">
                {chain}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assured Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-600 rounded-[48px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="bg-white/20 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">TravelBite Assured</span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">Hygiene & Quality <br/>You Can Trust.</h2>
              <p className="text-orange-100 text-lg font-medium mb-12 max-w-lg">
                We personally verify every highway partner for sanitation, quick service, and clean washrooms. Travel with peace of mind.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-black hover:bg-orange-50 transition-all shadow-lg">Partner With Us</button>
                <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition-all">Our Standards</button>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
               {[
                 { t: '100% Verified', d: 'Physical audit' },
                 { t: 'Quick Stop', d: 'Under 30 mins' },
                 { t: 'Clean Toilets', d: 'Always checked' },
                 { t: 'Secure Stays', d: 'CCTV monitored' }
               ].map((item, i) => (
                 <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-[32px] border border-white/20 hover:bg-white/20 transition-all">
                    <p className="text-xl font-black mb-1">{item.t}</p>
                    <p className="text-sm text-orange-200 font-bold">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-slate-100 pt-16">
          {[
            { n: '500+', l: 'Intercity Routes' },
            { n: '10,000+', l: 'Diners & Inns' },
            { n: '1 Million+', l: 'Route Searches' },
            { n: '4.9/5', l: 'App Rating' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-black text-slate-900 mb-2">{stat.n}</p>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest">{stat.l}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
