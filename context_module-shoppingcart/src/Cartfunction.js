import {useContext} from 'react';
import { CartContext } from './CartContext.js';
export default function Cart(){
  const {cart,removeFromCart} = useContext(CartContext);
  const listItems = cart.map(eachProduct => (
      <li >{eachProduct.name}
        <button onClick={() =>removeFromCart(eachProduct.id)}>REMOVE FROM CART</button>
      </li>
    ));
    return(
    <>
    <h1>YOUR CART</h1>
    <div>
      <ul>{listItems}</ul>
    </div>
    </>
  )
}