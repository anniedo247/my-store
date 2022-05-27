export interface Product {
  id?: number;
  name: string;
  price: {
    regularPrice: {
      amount: {
        currency: string;
        value: number;
      };
    };
  };
  small_image: {
    url: string;
  };
  rating_summary: number;
}

export interface ProductInfo extends Product {
  review_count: number;
}
