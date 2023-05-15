import { SellerService } from './../services/seller.service';
export interface Gig {
    id: string;
    name: string;
    description:string;
    price: number;
    img:string;
    sellerName:string;
    sellerId:string;
}