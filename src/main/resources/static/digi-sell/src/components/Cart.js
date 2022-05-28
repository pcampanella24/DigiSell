import { useSelector, useDispatch } from 'react-redux';
import { carActions } from '../store/cars';
import style from '../components/Styles.module.css'
import { useEffect } from 'react';

export default function Cart() {

    const cart = useSelector(state => state.car.cart);
    /* const subTotal = useSelector(state => state.car.cartTotalAmount); */

    const dispatch = useDispatch();

    /* useEffect(() => {
        dispatch(carActions.getTotals());
    }, [cart]); */

    const handleAddToCart = model => {
        dispatch(carActions.addToCart(model));
    };

    const handleDecreaseToCart = model => {
        dispatch(carActions.decrease(model));
    };

    const handleRemoveFromCart = item => {
        dispatch(carActions.removeFromCart(item))
    };

    const handleReset = () => {
        dispatch(carActions.resetCart());
    };

    const cartList = cart.map(model => {
        return (
            <div key={model.id}>
                <span>{model.manufacturer.name}{' '}</span>
                <span>{model.name}{' '}</span>
                <span>
                    Total:{' '}
                    {(parseFloat(model.quantity) * parseFloat(model.price)).toFixed(3)}
                </span>
                <div className={style.button_container}>
                    <button 
                        onClick={() => handleAddToCart(model)}
                    >
                        +
                    </button>
                    Quantity:{' '}{model.quantity}
                    
                    <button 
                        onClick={() => handleDecreaseToCart(model)}
                    >
                        -
                    </button>
                    <button 
                        onClick={() => handleRemoveFromCart(model)}
                    >
                        Remove
                    </button>
                </div>
                    
            </div> 
        );
    })

    return (
        <div id='cart' className={style.cart_item}>
            <h2>Your Shopping Cart</h2>
            {cartList}
            <div className={style.cart_buttons}>
                <button 
                    onClick={() => handleReset()}
                >
                    Clear Cart
                </button>
                <button
                    onClick={() => alert('Not Enough Money')}
                >
                    CheckOut
                    {/* {subTotal} */}
                </button>
            </div>
        </div>
    );
}