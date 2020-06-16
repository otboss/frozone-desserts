import gql from 'graphql-tag';

export abstract class Mutations {
    public static createIceCream = gql`
        mutation createIceCream(
            $name: String!
            $cost: Float!
            $image: String!
        ) {
            createIceCream(
                name: $name
                cost: $cost
                toppings: []
                rating: 0
                image: $image
            ) {
                name
            }
        }
    `;
}