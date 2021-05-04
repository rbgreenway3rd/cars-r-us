const database = {
    paints: [
        { id: 1, style: "Silver", price: 200.00 },
        { id: 2, style: "Midnight Blue", price: 250.00 },
        { id: 3, style: "Firebrick Red", price: 300.50 },
        { id: 4, style: "Spring Green", price: 350.50 }
    ],
    interior: [
        {id: 1, style: "Beige Fabric", price: 250.50 },
        {id: 2, style: "Charcoal Fabric", price: 250.50},
        {id: 3, style: "White Leather", price: 350.50},
        {id: 4, style: "Black Leather", price: 350.50},
    ],
    technology: [
        {id: 1, style: "Basic Package", price: 100.00 },
        {id: 2, style: "Navigation Package", price: 150.00},
        {id: 3, style: "Visibility Package", price: 200.50},
        {id: 4, style: "Ultra Package", price: 250.50},
    ],  
    wheels: [
        {id: 1, style: "17-inch Pair Radial", price: 50.00},
        {id: 2, style: "17-inch Pair Radial Black", price: 75.00},
        {id: 3, style: "18-inch Pair Spoke Silver", price: 100.00},
        {id: 4, style: "18-inch Pair Spoke Black", price: 125.00},
    ],
    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelsId: 1,
        }
    ],
    orderBuilder: {
        id: 0,
        paintsId: 0,
        interiorId: 0,
        technologyId: 0,
        wheelsId: 0,
    }
}

export const getColor = () => {
    return [...database.paints]
}
export const getInterior = () => {
    return [...database.interior]
}
export const getTechnology = () => {
    return [...database.technoloy]
}
export const getWheels = () => {
    return [...database.wheels]
}

export const setColor = (id) => {
    database.orderBuilder.paintsId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}