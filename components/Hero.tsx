
import React, { useState } from 'react';

interface HeroProps {
  onSearch: (source: string, destination: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      onSearch(source, destination);
      setIsSearching(false);
    }, 800);
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover"
          alt="Gourmet Food"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-50"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl tracking-tight">
          Find the best food <br/><span className="text-orange-500">on your route.</span>
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
          Don't settle for highway snacks. Discover top-rated dining and stays.
        </p>

        <div className="bg-white p-3 rounded-[32px] shadow-2xl inline-block w-full border border-white/20 backdrop-blur-sm bg-white/95">
          <form 
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row gap-2 items-center"
          >
            <div className="flex-1 w-full relative group">
              <input 
                type="text" 
                placeholder="From: Current Location"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="w-full px-6 py-5 bg-transparent rounded-2xl focus:outline-none text-slate-800 font-semibold placeholder:text-slate-400 placeholder:font-normal"
                required
              />
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-slate-100 group-focus-within:bg-orange-500 transition-colors"></div>
            </div>
            
            <div className="h-8 w-px bg-slate-200 hidden md:block"></div>

            <div className="flex-1 w-full relative group">
              <input 
                type="text" 
                placeholder="To: Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-6 py-5 bg-transparent rounded-2xl focus:outline-none text-slate-800 font-semibold placeholder:text-slate-400 placeholder:font-normal"
                required
              />
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-slate-100 group-focus-within:bg-orange-500 transition-colors"></div>
            </div>

            <button 
              type="submit"
              disabled={isSearching}
              className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white px-12 py-5 rounded-[24px] font-black transition-all shadow-xl hover:shadow-orange-200 flex items-center justify-center gap-3 active:scale-95"
            >
              {isSearching ? 'Searching...' : 'Explore'}
              {!isSearching && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </form>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="text-white/80 text-sm font-bold uppercase tracking-widest mr-2 mt-2">Popular:</span>
          {['Mumbai to Pune', 'Delhi to Jaipur', 'Bangalore to Coorg'].map(tag => (
            <button key={tag} className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold border border-white/20 transition-all">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
