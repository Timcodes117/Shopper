import {create} from "zustand"

export type products = {
    id: any;
    image: string[];
    name: string;
    description?: string;
    price: number;
    discount: any;
    quantity: number;
}

export type cartItems = {
    id: any,
    image: string,
    name: string,
    price: number,
    discount?: number,
}

