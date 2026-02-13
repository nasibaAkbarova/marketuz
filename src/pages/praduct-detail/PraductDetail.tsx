import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../data/data';
import { useAppContext } from '../../context/AppContext';
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleFavorite, favorites } = useAppContext();
  
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Mahsulot topilmadi</h2>
        <button onClick={() => navigate('/')} className="text-uzum-primary font-bold">Asosiy sahifaga qaytish</button>
      </div>
    );
  }

  const isFavorite = favorites.some(f => f.id === product.id);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-700 flex flex-col md:flex-row gap-10 p-8">
        <div className="md:w-1/2 aspect-square rounded-2xl overflow-hidden bg-gray-50 dark:bg-slate-700">
          <img src={product.img} alt={product.nom} className="w-full h-full object-cover" />
        </div>

        <div className="md:w-1/2 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Artikul: {100000 + product.id}</span>
            <button 
              onClick={() => toggleFavorite(product)}
              className="flex items-center gap-2 text-gray-500 hover:text-uzum-primary transition-colors font-medium"
            >
              {isFavorite ? <AiFillHeart className="text-red-500" size={22} /> : <AiOutlineHeart size={22} />}
              <span>{isFavorite ? "Saralanganlarda" : "Saralanganlarga qo'shish"}</span>
            </button>
          </div>

          <h1 className="text-3xl font-bold dark:text-white leading-tight">{product.title}</h1>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="dark:text-gray-300 font-medium">4.9 (57 sharhlar)</span>
            </div>
            <span className="text-gray-300">|</span>
            <span className="text-green-500 font-bold">Sotuvda bor</span>
          </div>

          <div className="border-y border-gray-100 dark:border-slate-700 py-6">
            <div className="flex items-end gap-3 mb-4">
              <span className="text-3xl font-black text-uzum-primary">{new Intl.NumberFormat('uz-UZ').format(product.narx)} so'm</span>
              <span className="text-lg text-gray-400 line-through mb-1">{new Intl.NumberFormat('uz-UZ').format(product.narx + 15000)} so'm</span>
            </div>
            <div className="bg-uzum-secondary dark:bg-slate-700 p-4 rounded-xl flex items-center justify-between border border-gray-100 dark:border-slate-600">
              <span className="text-sm font-bold dark:text-white">Muddatli to'lov:</span>
              <div className="flex items-center gap-2">
                <span className="bg-yellow-400 px-3 py-1 rounded-lg font-black text-xs shadow-sm">
                  {new Intl.NumberFormat('uz-UZ').format(Math.round(product.narx / 12))} so'm/oy
                </span>
                <span className="text-xs text-gray-400">›</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg dark:text-white">Mahsulot tavsifi:</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              Bu <strong>{product.nom}</strong> yuqori sifatli materiallardan tayyorlangan bo'lib, har bir detalga alohida e'tibor berilgan. 
              Dizayni zamonaviy va ergonomik bo'lib, har qanday interyerga yoki uslubga mos tushadi. 
              {product.title} mahsulotini bugun buyurtma qiling va ertagayoq yetkazib beramiz!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 bg-uzum-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-uzum-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-uzum-primary/20 active:scale-95"
            >
              <AiOutlineShoppingCart size={24} />
              Savatchaga qo'shish
            </button>
            <button className="flex-1 border-2 border-uzum-primary text-uzum-primary py-4 rounded-xl font-bold text-lg hover:bg-uzum-primary/5 transition-all active:scale-95">
              Bir bosishda xarid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;