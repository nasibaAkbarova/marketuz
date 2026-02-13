import React from 'react';
import { products } from '../../data/data';
import { useAppContext } from '../../context/AppContext';
import ProductCard from '../../components/ProductCard';
import Accordion from '../accardion/Accardion';
import ProductCarousel from '../ProductCarousel/ProductCarousel';

const Home: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="container mx-auto px-4 py-6 space-y-10">
      {/* 1-rasmdagi kabi Katta Banner Karusel */}
      <section>
        <Accordion />
      </section>

      {/* Foydali bo'limlar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: "🧸", label: t('home.moms') },
          { icon: "✅", label: t('home.guarantee') },
          { icon: "🧥", label: t('home.modern') },
          { icon: "🛍️", label: t('home.benefit') },
        ].map((item, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm flex items-center gap-4 hover:shadow-md transition-all cursor-pointer border border-gray-100 dark:border-slate-700">
            <span className="text-3xl">{item.icon}</span>
            <span className="text-sm font-bold text-gray-700 dark:text-gray-200">{item.label}</span>
          </div>
        ))}
      </section>

      {/* Mahsulotlar to'plami */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-black dark:text-white tracking-tight">{t('home.popular')}</h2>
            <div className="h-2 w-2 rounded-full bg-uzum-primary animate-pulse mt-2"></div>
          </div>
          <button className="text-uzum-primary font-bold hover:underline flex items-center gap-1">
            Barchasi <span className="text-xl">›</span>
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </section>
      <ProductCarousel/>
    </div>
  );
};

export default Home;