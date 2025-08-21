import {useState} from 'react';
import { CartContext } from './CartContext';
import App from './App';   
export default function CartProvider(){
const[cart,setCart] = useState([]);

function addToCart(product){
  setCart((cart)=>[...cart,product]);
}

function removeFromCart(productId){
  setCart((cart)=>cart.filter(item=>item.id !== productId));
}

return ( 
  <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
    <App/>
  </CartContext.Provider>
);
}