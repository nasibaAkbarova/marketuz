import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { 
  AiOutlineSearch, 
  AiOutlineUser, 
  AiOutlineHeart, 
  AiOutlineShoppingCart,
  AiOutlineSun,
  AiOutlineMoon,
  AiOutlineDown
} from 'react-icons/ai';

const Navbar: React.FC = () => {
  const { cart, favorites, theme, toggleTheme, language, setLanguage, setIsLoginModalOpen, t } = useAppContext();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const langMap = {
    uz: { 
      label: "O'zbekcha", 
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png" 
    },
    ru: { 
      label: "Русский", 
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png" 
    },
    en: { 
      label: "English", 
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" 
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md shadow-sm transition-colors duration-300 border-b border-gray-100 dark:border-slate-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-10 h-10 bg-uzum-primary rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
            <span className="text-white dark:text-blue-600 font-black text-2xl">U</span>
          </div>
          <span className="text-2xl font-black text-uzum-primary hidden sm:block tracking-tight">uzum market</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative hidden md:block">
          <input 
            type="text" 
            placeholder={t('nav.search')}
            className="w-full bg-uzum-secondary dark:bg-slate-700 dark:text-white px-5 py-2.5 rounded-xl outline-none border border-transparent focus:border-uzum-primary transition-all shadow-inner"
          />
          <button className="absolute right-0 top-0 h-full px-5 bg-transparent rounded-r-xl hover:text-uzum-primary transition-colors">
            <AiOutlineSearch size={22} className="text-gray-500 dark:text-gray-300" />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 lg:gap-6">
          {/* Dark Mode Toggle */}
          <button onClick={toggleTheme} className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-white transition-all active:scale-95">
            {theme === 'light' ? <AiOutlineMoon size={22} /> : <AiOutlineSun size={22} />}
          </button>

          {/* Language Switcher - NEW DESIGN AS REQUESTED */}
          <div className="relative" onMouseEnter={() => setIsLangOpen(true)} onMouseLeave={() => setIsLangOpen(false)}>
            <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-all dark:text-white">
              <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200">
                <img src={langMap[language].flag} alt={language} className="w-full h-full object-cover scale-150" />
              </div>
              <span className="text-sm font-medium hidden sm:block">{langMap[language].label}</span>
              <AiOutlineDown size={12} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-gray-100 dark:border-slate-700 p-1 w-40 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                {(Object.keys(langMap) as Array<keyof typeof langMap>).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setIsLangOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm transition-colors ${
                      language === lang 
                        ? 'bg-uzum-primary/10 text-uzum-primary font-bold' 
                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 dark:text-white'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full overflow-hidden border border-gray-100">
                      <img src={langMap[lang].flag} alt={lang} className="w-full h-full object-cover scale-150" />
                    </div>
                    {langMap[lang].label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login/Entry Button */}
          <button onClick={() => setIsLoginModalOpen(true)} className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-all dark:text-white">
            <AiOutlineUser size={24} />
            <span className="hidden lg:block text-sm font-medium">{t('nav.login')}</span>
          </button>

          {/* Favorites */}
          <Link to="/sevimli" className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-all relative dark:text-white">
            <AiOutlineHeart size={24} />
            {favorites.length > 0 && (
              <span className="absolute top-1 right-1 bg-uzum-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800">
                {favorites.length}
              </span>
            )}
            <span className="hidden lg:block text-sm font-medium">{t('nav.fav')}</span>
          </Link>

          {/* Cart */}
          <Link to="/savatcha" className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-all relative dark:text-white">
            <AiOutlineShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute top-1 right-1 bg-uzum-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
            <span className="hidden lg:block text-sm font-medium">{t('nav.cart')}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;