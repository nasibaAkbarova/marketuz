export interface Product {
  id: number;
  nom: string;
  narx: number;
  title: string;
  img: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Language = 'uz' | 'ru' | 'en';

export const Theme = {
  LIGHT: 'light',
  DARK: 'dark'
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];
