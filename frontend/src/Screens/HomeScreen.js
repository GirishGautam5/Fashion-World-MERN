import React, { useEffect } from 'react'
import Product from '../components/Product'
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
export default function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector((state)=> state.productList)
  const { loading, products, error} = productList
    useEffect(()=> {
      dispatch(listProducts())
    },[dispatch])
  return (
    <div>
           {loading ? (
                  <LoadingBox />
              ): error ? (<MessageBox variant="danger">{error}</MessageBox>) : (
                <div className="row center">
           
                {products.map((product) => (
                 <Product key={product._id} product={product}/>
                ))}
              </div>
              ) }
        </div>
  )
}
