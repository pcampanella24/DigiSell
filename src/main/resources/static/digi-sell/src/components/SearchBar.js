import { useDispatch, useSelector } from 'react-redux';
import { carActions } from '../store/cars';
import { BsCartCheck } from "react-icons/bs";
import style from '../components/Styles.module.css';
import { Anchor } from 'antd';

const { Link } = Anchor;

export default function SearchBar() {

    const selectValue = useSelector(state => state.car.selectValue);
    const allCars = useSelector(state => state.car.allCars);
    const cart = useSelector(state => state.car.showCart);
    const searchButton = useSelector(state => state.car.showSearchButton);
    /* const totalItem = useSelector(state => state.car.cartTotalQuantity); */

    const dispatch = useDispatch();

    const find = allCars.filter(e => e.name === selectValue);

    const handleSelectChange = name => {
        dispatch(carActions.setSelectValue(name));
        dispatch(carActions.setShowSearchButton());
    };

    const handleSearch = name => {
        dispatch(carActions.findByName(name));
        dispatch(carActions.setShowSearchButtonFalse());
    };

    const cars = allCars.map(model => {
        return (
            <option key={model.id}>
                {model.name}
            </option>
        );
    });

    return (
        <div className={style.search_bar}>
            <div className={style.select_container}>
                <h1>Find Your Car</h1>
                <select
                    value={selectValue}
                    onChange={e => handleSelectChange(e.target.value)}
                >
                    <option>-- Select Car--</option>
                    {cars}
                </select>
                {searchButton && <button
                    className={style.search_button}
                    onClick={() => handleSearch(find)}
                >
                    Search...
                </button>}
            </div>
            {cart && 
                <>
                    <span 
                        className={style.quantity}
                    >
                        4{/* {totalItem} */}
                    </span>
                    <Anchor>
                        <Link href='#cart' title={
                                                    <button
                                                        className={style.cart}
                                                    >
                                                        <BsCartCheck />
                                                    </button>
                                                }
                        />
                    </Anchor>
                </>
            }
        </div>
    );
}