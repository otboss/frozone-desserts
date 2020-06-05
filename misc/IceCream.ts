import { Toppings } from "./Topping";

/**
 * Structures ice cream information
 * */
export class IceCream {
    constructor(
        /**
         * BASE64 image
         * */
        public name: string,
        public cost: number,
        /**
         * An array of ice cream toppings=
         * */
        public toppings: Array<Toppings>,
        public image?: string,
        /**
         * A number from 0 to 5
         * */
        public rating: number = 0
    ) {
        this.rating = this.rating % 5;
    }
}