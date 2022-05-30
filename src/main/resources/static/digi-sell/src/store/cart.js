import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cart: [],
    showCart: false,
    cartTotalQuantity: 0,
    cartTotalAmount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartTotalQuantity++;
            state.cartTotalAmount += action.payload.price;
            const tempIndex = { ...action.payload, quantity: 1 };
            const itemIndex = state.cart.findIndex(
                item => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cart[itemIndex].quantity++;
                toast.info(`Increased ${state.cart[itemIndex].name} Quantity`, {
                    position: 'bottom-right'
                });
            }  else {
                state.cart.push(tempIndex);
                toast.success(`Added ${tempIndex.name} To Cart`, {
                    position: 'bottom-right'
                });
            }
        },
        removeFromCart(state, action) {
            const item = state.cart.filter(
                item => item.id !== action.payload.id
            );
            state.cart = item;
            state.cartTotalAmount -= (action.payload.price * action.payload.quantity);
            state.cartTotalQuantity -= action.payload.quantity;
            if (state.cart.length === 0) {
                state.showCart = false;
                state.cartTotalAmount = 0;
                state.cartTotalQuantity = 0;
                toast.error('Cart Clear', {
                    position: 'bottom-right'
                });
            } 
            toast.error(`${action.payload.name} Removed From Cart`, {
                position: 'bottom-right' 
            });
        },
        decrease(state, action) {
            const item = state.cart.findIndex(
                item => item.id === action.payload.id
            );
            if (state.cart[item].quantity > 1) {
                state.cart[item].quantity--;
                state.cartTotalQuantity--;
                state.cartTotalAmount -= action.payload.price;
                toast.info(`Decreased ${action.payload.name} Quantity`, {
                    position: 'bottom-right'
                });
            } else if (state.cart[item].quantity === 1) {
                const nextItem = state.cart.filter(
                    item => item.id !== action.payload.id
                );
                state.cart = nextItem;
                if (state.cart.length === 0) {
                    state.showCart = false;
                    state.cartTotalQuantity = 0;
                    state.cartTotalAmount = 0;
                    toast.error('Cart Clear', {
                        position: 'bottom-right'
                    });
                }
                toast.error(`${action.payload.name} Removed From Cart`, {
                    position: 'bottom-right'
                });
            }
        },
        resetCart(state) {
            state.cart = [];
            state.showCart = false;
            state.cartTotalQuantity = 0;
            toast.error('Cart Clear', {
                position: 'bottom-right'
            });
        },
        setShowCart(state) {
            state.showCart = true;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;