import {create} from "zustand"
import { productsType } from "./storeTypes"
import { persist } from "zustand/middleware"
import { toast } from "react-toastify"



export type cartTypes ={
    id: any, 
    name: string, 
    imageUrl: string, 
    price: any, 
    discount: number,
    quantity: number,
    bg_size?: string
}
export type State = {
    cartItems: cartTypes[]
}

export type Actions = {
    addToCart: (id: any, name: string, price: any, discount: number, quantity: number, imageUrl: string, bg_size: string) => void
    removeItem: (id: any) => void
    increaseCount: (id: any) => void
    decreaseCount: (id: any) => void
    updatePriceFromAPI: (id: any, price: number) => void
    updateQuantityFromAPI: (id: any, quantity: number) => void
    checkItemExists: (id: any) => void
}
export const useCartStore = create<Actions & State>()(
    persist(
    set => ({
    cartItems: [],
    addToCart(id, name, price, discount, quantity, imageUrl, bg_size) {
         set(state => {
        const itemExists = state.cartItems.find(item => item.id === id);

        if (itemExists) {
            // Update the quantity of the existing item
            toast.warn(`${name} already exists in the cart.`);
            return {
                cartItems: state.cartItems.map(item =>
                    item.id === id 
                        ? item
                        : item
                )
            };
        } else {
            // Add the new item to the cart
            toast.success("item added to cart")
            return {
                cartItems: [
                    ...state.cartItems, 
                    { id, name, price, discount, quantity, imageUrl, bg_size }
                ]
            };
        }
    });
    },
    checkItemExists(id) {
       
    },
    removeItem(id) {
        set(state=> ({
            cartItems: state.cartItems.filter((item) => item.id !== id)
        }))
    },
    updatePriceFromAPI(id, price) {
        set(state =>({
            cartItems: state.cartItems.map((item) => item.id === id ? {...item, price: price } : item)
        }))
    },
    updateQuantityFromAPI(id, quantity) {
        set(state =>({
            cartItems: state.cartItems.map((item) => item.id === id ? {...item, quantity: quantity } : item)
        }))
    },
    increaseCount(id) {
        set(state =>({
            cartItems: state.cartItems.map((item) => item.id === id ? {...item, quantity: item.quantity + 1 } : item)
        }))
    },
    decreaseCount(id) {
        set(state =>({
            cartItems: state.cartItems.map((item) => item.id === id ? {...item, quantity: item.quantity - 1 } : item)
        }))
    },
}),{name: "shopp-store"}));