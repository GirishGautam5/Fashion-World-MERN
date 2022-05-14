import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducer';



const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
  });

const store = configureStore({
    reducer,
    middleware: [thunk],
})

export default store
