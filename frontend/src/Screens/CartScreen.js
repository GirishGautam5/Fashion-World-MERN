import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../MessageBox";

export default function CartScreen(props) {
  const { id } = useParams();
  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get("qty");
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;
  const { cartItems} = useSelector((state)=>state.cart) 
 const navigate = useNavigate()
  const dispatch = useDispatch()
useEffect(()=>{
  if(id){
dispatch(addToCart(id,qty))
  }
},[dispatch,id,qty])
const removeCartHandler=(id)=>{
dispatch(removeFromCart(id))
}
const checkoutHandler=()=>{
navigate('/signin?redirect=shipping')
}
  return (
    <div className="row top">
     <div className="col-2">
       <h1>Shopping Cart</h1>
       {cartItems.length === 0 ?
      <MessageBox>
        Cart is Empty <Link to='/'>Go Shopping</Link>
      </MessageBox> : (
        <ul>
          {cartItems.map((item)=>(
            <li key={item.product}>
              <div className="row">
                <div>
                  <img src={item.image} className="small" alt={item.name} />
                </div>
                <div className="min-30">
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </div>
                <div>
                  <select value={item.qty} onChange={(e)=>dispatch(addToCart(item.product,Number(e.target.value)))}>
                  {[...Array(item.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                  </select>
                </div>
                <div>${item.price}</div>
                <div>
                  <button type="button" onClick={()=>removeCartHandler(item.product)}>
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )
      }
     </div>
     <div className="col-1">
       <div className="card card-body">
         <ul>
           <li>
             <h2>
               SubTotal ({cartItems.reduce((a,c)=>a+c.qty,0)}): ${cartItems.reduce((a,c)=>a+c.price*c.qty,0)} 
             </h2>
           </li>
           <li>
             <button type="button" className="primary block" onClick={checkoutHandler} disabled={cartItems.length === 0}>
               Proceed to Checkout
             </button>
           </li>
         </ul>
       </div>
     </div>
    </div>
  );
}
