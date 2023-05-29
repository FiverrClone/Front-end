
import { Gig } from "./gig.model";
import { AppUser } from "./user.model";

export interface Order {
client: AppUser;
id:number;
user:AppUser;
gigs:Array<Gig>;
totalAmount:number;
date:Date;
}