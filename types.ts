export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  brand: Brand;
  color: Color;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Billboards {
  billboards: Billboard[];
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Brand {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
