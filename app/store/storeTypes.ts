
export type productsType = {
    id: any;
    image: string[];
    name: string;
    description?: string;
    price: number;
    discount: any;
    quantity: number;
    bg_size: string;
    category: string[];
}

export type cartItems = {
    id: any,
    image: string,
    name: string,
    price: number,
    discount?: number,
    bg_size: string
}

