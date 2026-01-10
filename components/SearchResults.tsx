
import React from 'react';
import { Place } from '../constants';

interface SearchResultsProps {
  results: Place[];
  route: { source: string; destination: string };
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, route }) => {
  if (results.length === 0) return null;

  return (
    <section id="results" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-100 pb-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Top Places on <span className="text-orange-600">{route.source} ➔ {route.destination}</span> Route
          </h2>
          <div className="flex flex-wrap gap-3 mt-6">
            {['Filter', 'Sort By', 'Ratings 4.0+', 'Pure Veg', 'Offers', 'Rs. 300-600'].map(filter => (
              <button key={filter} className="px-4 py-2 rounded-full border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2">
                {filter}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {results.map((place) => (
            <div 
              key={place.id} 
              className="group cursor-pointer transition-transform duration-300 hover:scale-[0.97]"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-4">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {place.offer && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-black text-lg uppercase tracking-tight leading-tight">
                      {place.offer}
                    </p>
                  </div>
                )}

                <div className="absolute top-4 left-4">
                   <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl backdrop-blur-md ${
                    place.type === 'Restaurant' ? 'bg-orange-500 text-white' : 'bg-indigo-600 text-white'
                  }`}>
                    {place.type}
                  </span>
                </div>
              </div>
              
              <div className="px-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-black text-slate-800 truncate pr-2">{place.name}</h3>
                  <div className="bg-green-600 text-white px-1.5 py-0.5 rounded-md text-xs font-bold flex items-center gap-1 shrink-0">
                    ⭐ {place.rating}
                  </div>
                </div>
                
                <div className="flex items-center text-slate-500 text-sm font-bold gap-1 mb-1">
                   <span>{place.time}</span>
                   <span className="text-[6px] opacity-30">•</span>
                   <span>{place.distance}</span>
                </div>

                <p className="text-slate-400 text-xs font-medium truncate mb-2">{place.cuisine}</p>
                
                <p className="text-slate-700 text-sm font-bold">{place.priceRange}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
