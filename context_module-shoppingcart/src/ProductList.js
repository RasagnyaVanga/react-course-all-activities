import {products} from './products.js';
import {useContext} from 'react';
import { CartContext } from './CartContext.js';
export default function ProductList(){
  const {addToCart} = useContext(CartContext);
    const listItems = products.map(eachProduct => (
      <li key={eachProduct.id}>{eachProduct.name}
        <button onClick={() => addToCart(eachProduct)}>ADD TO CART</button>
      </li>
    ));
    
  return(
    <>
    <h1>VARIOUS PRODUCTS</h1>
    <div>
      <ul>{listItems}</ul>
    </div>
    </>
  )
}