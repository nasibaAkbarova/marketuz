import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Savatcha: React.FC = () => {
  const { cart, removeFromCart, updateCartQuantity, t } = useAppContext();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.narx * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center space-y-4">
        <div className="text-6xl">🛒</div>
        <h2 className="text-2xl font-bold dark:text-white">{t('cart.empty')}</h2>
        <p className="text-gray-500 max-w-md mx-auto">{t('cart.empty_desc')}</p>
        <Link to="/" className="inline-block bg-uzum-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-uzum-primary/90 transition-all">
          {t('cart.start_shopping')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">{t('cart.title')}, <span className="text-gray-400 font-normal">{totalItems} {t('cart.items')}</span></h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 dark:border-slate-700 pb-4">
              <input type="checkbox" className="w-5 h-5 accent-uzum-primary" checked readOnly />
              <span className="font-medium dark:text-white">{t('cart.deselect_all')}</span>
            </div>

            <div className="text-uzum-primary font-bold text-sm mb-4">{t('cart.delivery_tomorrow')}</div>

            <div className="space-y-6">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 border-b border-gray-50 dark:border-slate-700 last:border-0 pb-6">
                  <div className="w-24 h-32 rounded-lg overflow-hidden bg-gray-50 shrink-0">
                    <img src={item.img} alt={item.nom} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col sm:flex-row justify-between gap-4">
                    <div>
                      <h3 className="font-medium mb-1 dark:text-white">{item.title}</h3>
                      <p className="text-sm text-gray-400">{t('cart.seller')}: <span className="text-gray-600 dark:text-gray-300">Uzum Market</span></p>
                      
                      <div className="mt-4 flex items-center gap-4 bg-gray-50 dark:bg-slate-700 w-fit rounded-lg px-2 py-1">
                        <button onClick={() => updateCartQuantity(item.id, -1)} className="p-1 text-gray-500 hover:text-uzum-primary transition-colors">
                          <AiOutlineMinus />
                        </button>
                        <span className="font-bold min-w-20px text-center dark:text-white">{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, 1)} className="p-1 text-gray-500 hover:text-uzum-primary transition-colors">
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors text-sm"
                      >
                        <AiOutlineDelete size={18} /> {t('cart.remove')}
                      </button>
                      <div className="text-right">
                        <p className="text-xl font-bold text-uzum-primary">{new Intl.NumberFormat('uz-UZ').format(item.narx * item.quantity)} so'm</p>
                        <p className="text-xs text-gray-400 line-through">{new Intl.NumberFormat('uz-UZ').format((item.narx + 5000) * item.quantity)} so'm</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 sticky top-24">
            <h3 className="text-xl font-bold mb-6 dark:text-white">{t('cart.your_order')}</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{t('cart.items')} ({totalItems}):</span>
                <span className="font-medium dark:text-white">{new Intl.NumberFormat('uz-UZ').format(totalPrice + (totalItems * 5000))} so'm</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{t('cart.delivery')}:</span>
                <span className="text-green-500 font-medium">{t('cart.free')}</span>
              </div>
              <div className="border-t border-gray-100 dark:border-slate-700 pt-4 flex justify-between items-end">
                <span className="font-bold dark:text-white">{t('cart.total')}:</span>
                <div className="text-right">
                  <p className="text-2xl font-bold text-uzum-primary">{new Intl.NumberFormat('uz-UZ').format(totalPrice)} so'm</p>
                  <p className="text-xs text-green-500">{t('cart.savings')}: {new Intl.NumberFormat('uz-UZ').format(totalItems * 5000)} so'm</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-uzum-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-uzum-primary/90 transition-colors shadow-lg shadow-uzum-primary/25">
              {t('cart.checkout')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savatcha;