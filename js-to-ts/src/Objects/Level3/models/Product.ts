export interface Rating {
  userId: string;
  rate: number;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  ratings: Rating[];
  likes: string[];
}
