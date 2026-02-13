import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';

const Sevimli: React.FC = () => {
  const { favorites } = useAppContext();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center space-y-4">
        <div className="text-6xl">❤️</div>
        <h2 className="text-2xl font-bold dark:text-white">Saralangan mahsulotlar ro'yxati bo'sh</h2>
        <p className="text-gray-500 max-w-md mx-auto">Yoqtirgan mahsulotlaringizni keyinchalik ko'rish uchun yurakcha belgisini bosing.</p>
        <Link to="/" className="inline-block bg-uzum-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-uzum-primary/90 transition-all">
          Asosiy sahifaga qaytish
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 dark:text-white">Saralanganlar</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {favorites.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Sevimli;