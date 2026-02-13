import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Theme, type CartItem, type Language, type Product  } from '../types';
import { toast } from 'react-toastify';
import { translate } from '../app/i18n';

interface AppContextType {
  cart: CartItem[];
  favorites: Product[];
  language: Language;
  theme: Theme;
  t:(path: string) => string;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateCartQuantity: (id: number, delta: number) => void;
  toggleFavorite: (product: Product) => void;
  setLanguage: (lang: Language) => void;
  toggleTheme: () => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [language, setLanguage] = useState<Language>('uz');
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === Theme.DARK) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const t = useCallback((path: string) => {
    return translate(path, language);
  }, [language]);

  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        toast.info(`${product.nom} miqdori oshirildi`);
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      toast.success(`${product.nom} savatchaga qo'shildi`);
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
    toast.warn("Mahsulot savatchadan olib tashlandi");
  }, []);

  const updateCartQuantity = useCallback((id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  }, []);

  const toggleFavorite = useCallback((product: Product) => {
    setFavorites(prev => {
      const isFav = prev.find(item => item.id === product.id);
      if (isFav) {
        toast.info("Saralanganlardan olib tashlandi");
        return prev.filter(item => item.id !== product.id);
      }
      toast.success("Saralanganlarga qo'shildi");
      return [...prev, product];
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }, []);

  return (
    <AppContext.Provider value={{
      cart, favorites, language, theme, t,
      addToCart, removeFromCart, updateCartQuantity, toggleFavorite,
      setLanguage, toggleTheme, isLoginModalOpen, setIsLoginModalOpen
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
