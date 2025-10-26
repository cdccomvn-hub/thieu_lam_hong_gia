export interface Product {
  id: number;
  name: string;
  code: string;
  price: number;
  image: string;
  category: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ComboPackage {
  id: number;
  name: string;
  price: number;
  features: string[];
}
