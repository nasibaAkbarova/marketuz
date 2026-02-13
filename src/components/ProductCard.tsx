import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useAppContext } from '../context/AppContext';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleFavorite, favorites, addToCart } = useAppContext();
  const isFavorite = favorites.some(f => f.id === product.id);

  const formattedPrice = new Intl.NumberFormat('uz-UZ').format(product.narx);

  return (
    <div className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-slate-700">
      <Link to={`/product/${product.id}`} className="block relative aspect-3/4 overflow-hidden">
        <img 
          src={product.img} 
          alt={product.nom} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 z-10">
          <button 
            onClick={(e) => { e.preventDefault(); toggleFavorite(product); }}
            className="p-2 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full shadow-sm hover:scale-110 transition-transform"
          >
            {isFavorite ? <AiFillHeart className="text-red-500" size={20} /> : <AiOutlineHeart className="text-gray-600 dark:text-gray-300" size={20} />}
          </button>
        </div>
      </Link>

      <div className="p-3 flex-1 flex flex-col">
        {/* SIZ SO'RAGAN STRUKTURA */}
        <div className="mt-3">
          <h1 className="text-sm text-gray-700 dark:text-gray-200 line-clamp-2">
            {product.nom}
          </h1>

          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {formattedPrice} so'm
          </p>
        </div>

        <div>
          <h1 className="text-xs text-gray-400 dark:text-gray-500 mt-1">{product.title}</h1>
        </div>
        {/* STRUKTURA TUGADI */}

        <div className="flex items-center justify-between mt-auto pt-3">
          <div className="bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
            {new Intl.NumberFormat('uz-UZ').format(Math.round(product.narx / 12))} so'm/oy
          </div>
          
          <button 
            onClick={() => addToCart(product)}
            className="p-2 border border-gray-200 dark:border-slate-600 rounded-full hover:bg-uzum-primary hover:text-white transition-all duration-300 dark:text-white active:scale-90"
          >
            <AiOutlineShoppingCart size={22} className='text-blue-600' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;