
import React from 'react';
import { POPULAR_FOODS } from '../constants';

const PopularFoods: React.FC = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Most Ordered Delights
        </h2>
        <p className="mt-4 text-xl text-slate-600">
          Try what fellow travelers are loving right now
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {POPULAR_FOODS.map((food) => (
          <div 
            key={food.id} 
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={food.image} 
                alt={food.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-bold text-orange-600 flex items-center shadow-sm">
                ⭐ {food.rating}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900">{food.name}</h3>
                <span className="text-lg font-bold text-orange-600">${food.price.toFixed(2)}</span>
              </div>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {food.description}
              </p>
              <button className="w-full py-2.5 bg-slate-50 hover:bg-orange-50 text-slate-900 hover:text-orange-600 border border-slate-200 hover:border-orange-200 rounded-xl text-sm font-bold transition-all">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularFoods;
