import './App.css';
import {useContext} from 'react';
import {products} from './products.js';
import { CartContext } from './CartContext.js';

function ProductList(){
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

function Cart(){
  const {cart,removeFromCart} = useContext(CartContext);
  const listItems = cart.map(eachProduct => (
      <li key={eachProduct.id}>{eachProduct.name}
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

function App() {
  return (
   <>
   <h1>SHOPPING</h1>
   <ProductList/>
   <Cart/>
   </>
  );
}

export default App;
