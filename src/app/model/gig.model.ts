import { SellerService } from './../services/seller.service';
export interface Gig {
    id: string;
    name: string;
    category:string;
    description:string;
    price: number;
    img:string;
    sellerName:string;
    sellerId:string;
    sellerImg:string;
    gigDate:string;
}