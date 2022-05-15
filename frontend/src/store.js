import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

const preloadedState  = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  });

const store = configureStore({
  preloadedState ,
    reducer,
    middleware: [thunk],
})

export default store
