import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cart';
import style from '../components/Styles.module.css';

export default function Cart() {

    const cart = useSelector(state => state.cart.cart);
    const subTotal = useSelector(state => state.cart.cartTotalAmount);

    const dispatch = useDispatch();

    const handleAddToCart = model => {
        dispatch(cartActions.addToCart(model));
    };

    const handleDecreaseToCart = model => {
        dispatch(cartActions.decrease(model));
    };

    const handleRemoveFromCart = model => {
        dispatch(cartActions.removeFromCart(model));
    };

    const handleReset = () => {
        dispatch(cartActions.resetCart());
    };

    const cartList = cart.map(model => {
        return (
            <div key={model.id}>
                <span>{model.manufacturer.name}{' '}</span>
                <span>{model.name}{' '}</span>
                <span>
                    Total:{' '}
                    {(parseFloat(model.quantity) * parseFloat(model.price)).toFixed(2)} €
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
    });

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
                    {' '}{subTotal} €
                </button>
            </div>
        </div>
    );
}