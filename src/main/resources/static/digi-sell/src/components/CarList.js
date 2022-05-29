import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { carActions } from '../store/cars';
import { BsBag } from "react-icons/bs";
import style from '../components/Styles.module.css';

export default function CarList() {

    const cars = useSelector(state => state.car.allCars);

    const dispatch = useDispatch();

    const[currentItems, setCurrentItems] = useState([]);
    const[pageCount, setPageCount] = useState(0);
    const[itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    const handlePageClick = event => {
        const newOffset = (event.selected * itemsPerPage) % cars.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(cars.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(cars.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, cars]);

    const handleAddToCart = model => {
        dispatch(carActions.addToCart(model));
        dispatch(carActions.setShowCart());
    };

    const car = currentItems.map(model => {
        return (
            <div key={model.id} className={style.image}>
                <h3>
                    {model.manufacturer.name} {' '} {model.name}
                    <span className={style.float_right}>Price:{model.price}</span>
                </h3>
                <img src={'/assets/img/' + model.image} alt={model.name} />
                <div className={style.float_left}>
                    <p><strong>Engine: </strong>{model.engine}</p>
                    <p><strong>Power: </strong>{model.power}</p>
                    <p><strong>Weight: </strong>{model.weight}</p>
                </div>
                <div className={style.float_right}>
                    <p><strong>Number of cylinders: </strong>{model.cylinders}</p>
                    <p><strong>Max speed: </strong>{model.maxSpeed}</p>
                    <p><strong>Typology: </strong>{model.typology}</p>
                </div>
                <div>
                    <select className={style.hide}>
                        <option>
                            -- Select Package --
                        </option>
                    </select>
                </div>
                <button
                        className={style.shop}
                        onClick={() => handleAddToCart(model)}
                    >
                        <BsBag />
                </button>
            </div>  
        );
    });

    return (
        <>
            <div className={style.images}>
                {car}
                <ReactPaginate
                    nextLabel='Next >'
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    previousLabel='< Previous'
                    renderOnZeroPageCount={null}
                    containerClassName={style.pagination}
                    pageLinkClassName={style.page_num}
                    previousLinkClassName={style.page_num}
                    nextLinkClassName={style.page_num}
                    activeLinkClassName={style.active}
                />
            </div>
        </>    
    );
}