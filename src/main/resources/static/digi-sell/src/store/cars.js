import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    allCars: [],
    cart: [],
    findCar: {},
    selectValue: {},
    showFind: false,
    showCart: false,
    showSearchButton: false,
    /* cartTotalQuantity: 0,
    cartTotalAmount: 0 */
};

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        findAllModel(state, action) {
            state.allCars = action.payload;
        },
        findByName(state, action) {
            if (state.findCar) {
                state.findCar = action.payload;
                state.showFind = true;
            }
        },
        setSelectValue(state, action) {
            state.selectValue = action.payload;
        },
        addToCart(state, action) {
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
            if (state.cart.length === 0) {
                state.showCart = false;
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
            toast.error('Cart Clear', {
                position: 'bottom-right'
            });
        },
        setShowFind(state) {
            state.showFind = true;
        },
        setShowFindFalse(state) {
            state.showFind = false;
        },
        setShowCart(state) {
            state.showCart = true;
        },
        setShowSearchButton(state) {
            state.showSearchButton = true;
        },
        setShowSearchButtonFalse(state) {
            state.showSearchButton = false;
        },
        /* getTotals(state) {
            let { total, quantity } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;
                    return cartTotal;
                },
                {
                    total:0,
                    quantity:0
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total
        } */
    }
});

export const carActions = carSlice.actions;

export default carSlice.reducer;