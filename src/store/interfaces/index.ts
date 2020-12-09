export interface ProductInterface {
    _id: string,
    name: string,
    amount: number,
    price: number
}

export interface ProductReducerInterface {
    products: ProductInterface[]
}