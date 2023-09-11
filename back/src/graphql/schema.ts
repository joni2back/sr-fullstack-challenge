import { buildSchema } from 'graphql';

export const schema = buildSchema(`

    enum DeliveryStatus {
        pending
        confirmed
        cancelled
    }

    type Item {
        id: Int!
        title: String!
        image: String
        description: String
        price: Float!
    }

    type OrderItem {
        id: Int!
        item: Item
        quantity: Int!
    }

    type Deliviery {
        id: Int!
        orderItems: [OrderItem]
        scheduledDate: String
        status: DeliveryStatus
    }

    type Root {
        item(id: Int): Item
        orderItem(id: Int): OrderItem
        delivery(id: Int): Deliviery
        items: [Item]
        orderItems: [OrderItem]
        deliveries: [Deliviery]
    }

    schema {
        query: Root
    }
`);
