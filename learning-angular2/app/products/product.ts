export interface IProduct {
  productId: number;
  price: number;
  starRating: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  imageUrl: string;
}

/**
 * Product BUSINESS OBJECT class to implement in the event we have
 * 
 */

export class Product implements IProduct {
  
  constructor (
    public productId: number,
    public price: number,
    public starRating: number,
    public productName: string,
    public productCode: string,
    public releaseDate: string,
    public description: string,
    public imageUrl: string
  ) {}
  
  calculateDiscount (percent: number): number {
    return this.price - (this.price * percent / 100);
  }
}