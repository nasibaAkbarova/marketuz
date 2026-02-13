import React from 'react';
// import { useAppContext } from '../context/AppContext';

const Footer: React.FC = () => {
//   const { t } = useAppContext();
  
  return (
    <footer className="bg-blue-600 dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700 py-12 mt-20 transition-colors">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900 dark:text-white">Biz haqimizda</h4>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li className="hover:text-uzum-primary cursor-pointer transition-colors">Topshirish punktlari</li>
            <li className="hover:text-uzum-primary cursor-pointer transition-colors">Vakansiyalar</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900 dark:text-white">Foydalanuvchilarga</h4>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li className="hover:text-uzum-primary cursor-pointer transition-colors">Biz bilan bog'lanish</li>
            <li className="hover:text-uzum-primary cursor-pointer transition-colors">Savol-javob</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900 dark:text-white">Tadbirkorlarga</h4>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li className="hover:text-uzum-primary cursor-pointer transition-colors">Uzumda soting</li>
            <li className="hover:text-uzum-primary cursor-pointer transition-colors">Sotuvchi kabineti</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900 dark:text-white">Ilovani yuklab olish</h4>
          <div className="flex gap-4">
            <div className="w-32 h-10 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-[10px] font-bold dark:text-white border border-gray-200 dark:border-slate-600">App Store</div>
            <div className="w-32 h-10 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-[10px] font-bold dark:text-white border border-gray-200 dark:border-slate-600">Google Play</div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2024 Uzum Market Clone. Barcha huquqlar himoyalangan.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-gray-600 cursor-pointer">Maxfiylik kelishuvi</span>
          <span className="hover:text-gray-600 cursor-pointer">Foydalanish shartlari</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;