/**
 * Structures ice cream information
 * */
export class IceCream {
    image = "";
    name = "";
    cost = "";
    toppings = [];
    /**
     * A number from 0 to 5, where 0 is unrated
     * */
    rating = 0;
    constructor(
        image,
        name,
        cost,
        /**
         * An array of ice cream toppings=
         * */
        toppings
    ){ }
}