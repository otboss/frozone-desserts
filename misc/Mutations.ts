import gql from 'graphql-tag';
import { IceCream } from './IceCream';

export abstract class Mutations {
    public static createIceCream = gql`
        mutation createIceCream(
            $name: String!
            $cost: Float!
            $image: String
        ) {
            createItem(
                name: $name
                cost: $cost
                image: $image
            ) {
                name
            }
        }
    `;
}