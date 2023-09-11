import { gql } from '@apollo/client'

export const itemsQuery = gql` query getItems {
    items {
        id
        title
        description
        image
        price
    }
}`

export const deliveriesQuery = gql` query getDeliveries {
    deliveries {
        id
        scheduledDate
        status
        orderItems {
            id
            quantity
            item {
                id
                title
                description
                image
                price
            }
        }
    }
}`