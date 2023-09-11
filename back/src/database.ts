export const item1 = {
    id: 1,
    title: 'Product 1',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    image: 'https://static.cookunity.com/growth/media/landings/rebrand-meals/global-cusines/1.png',
    price: 100.00,
}

export const item2 = {
    id: 2,
    title: 'Product 2',
    description: 'Lorem the industry\'s standard dummy text ever since the 1500s',
    image: 'https://static.cookunity.com/growth/media/landings/rebrand-meals/global-cusines/2.png',
    price: 200.00,
}

export const item3 = {
    id: 3,
    title: 'Product 3',
    description: 'Lorem ipsum dolor sit',
    image: 'https://static.cookunity.com/growth/media/landings/rebrand-meals/global-cusines/3.png',
    price: 100.00,
}

export const orderItem1 = {
    id: 1,
    item: item1,
    quantity: 1
}

export const orderItem2 = {
    id: 2,
    item: item2,
    quantity: 2
}

export const orderItem3 = {
    id: 3,
    item: item3,
    quantity: 3
}

export const delivery1 = {
    id: 1,
    scheduledDate: (new Date('2023-06-25T13:00:00.000Z')).toDateString(),
    status: 'pending',
    orderItems: [
        orderItem1,
        orderItem2,
    ]
}

export const delivery2 = {
    id: 2,
    scheduledDate: (new Date('2023-08-01T15:30:00.000Z')).toDateString(),
    status: 'confirmed',
    orderItems: [
        orderItem2,
    ]
}

export const delivery3 = {
    id: 3,
    scheduledDate: (new Date('2023-10-30T15:30:00.000Z')).toDateString(),
    status: 'confirmed',
    orderItems: [
        orderItem3,
    ]
}

export default  {
    items: [item1, item2],
    orderItems: [orderItem1, orderItem2, orderItem3],
    deliveries: [delivery1, delivery2, delivery3],
}