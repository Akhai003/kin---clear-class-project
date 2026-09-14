export interface Product {
  id: string;
  name: string;
  slug: string;
  shortBenefit: string;
  category: string;
  subcategory?: string;
  size: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  alternateImages?: string[];
  badge?: string;
  description: string;
  benefits: string[];
  ageSuitability: string;
  skinConcern: string[];
  ingredients: Ingredient[];
  usage: string;
  texture?: string;
  fragrance?: string;
  relatedProductIds?: string[];
}

export interface Ingredient {
  id: string;
  name: string;
  slug: string;
  whatItIs: string;
  role: string;
  safetyContext: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  tags: string[];
  author?: string;
  relatedProductIds?: string[];
  relatedIngredientIds?: string[];
}

export interface Routine {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  productIds: string[];
  steps: { title: string; description: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
