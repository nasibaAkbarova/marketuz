import React from 'react';
import { useAppContext } from '../context/AppContext';
import { AiOutlineClose } from 'react-icons/ai';

const LoginModal: React.FC = () => {
  const { isLoginModalOpen, setIsLoginModalOpen } = useAppContext();

  if (!isLoginModalOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-violet-400 dark:bg-slate-800 w-full max-w-md rounded-2xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setIsLoginModalOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
        >
          <AiOutlineClose size={24} />
        </button>

        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-uzum-primary rounded flex items-center text-2xl justify-center text-white font-bold">U</div>
              <span className="text-xl text-blue-700  font-bold dark:text-white">Market.UZ</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-8 dark:text-white">Uzum Market'ga kirish</h2>
          
          <div className="relative mb-6">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">+998</div>
            <input 
              type="tel" 
              placeholder="00 000-00-00"
              className="w-full bg-gray-100 dark:bg-slate-700 dark:text-white pl-16 pr-4 py-4 rounded-xl outline-none border-2 border-transparent focus:border-uzum-primary transition-all text-lg"
            />
          </div>

          <button className="w-full bg-uzum-primary text-black dark:text-white py-4 rounded-xl font-bold text-lg hover:bg-uzum-primary/90 transition-colors shadow-lg shadow-uzum-primary/25 mb-6">
            Kodni olish
          </button>

          <p className="text-[10px] text-gray-400 leading-relaxed">
            Davom etgan holda men <a href="#" className="underline">shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik</a> bildirasiz va <a href="#" className="underline">Uzum ID ommaviy oferta bilan rozi bo'laman</a>
          </p>

          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-700">
            <a href="#" className="text-uzum-primary text-sm font-medium hover:underline  ">Uzum ID nima?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;