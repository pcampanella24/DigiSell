import React, { useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CarList from './components/CarList';
import FindCar from './components/FindCar';
import Cart from './components/Cart';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { carActions } from './store/cars';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export default function App() {

  const showFind = useSelector(state => state.car.showFind);
  const showCart = useSelector(state => state.cart.showCart);
  
  const dispatch = useDispatch();

  const allModels = () => {
    axios.get('http://localhost:8080/models/')
    .then(response => dispatch(carActions.findAllModel(response.data)));
  };

  useEffect(() => {
    allModels();
  }, []);

  return (
    <>
      <ToastContainer />
      <SearchBar />
      {showFind && <FindCar />}
      <CarList />
      {showCart && <Cart />}
    </>
  );
}