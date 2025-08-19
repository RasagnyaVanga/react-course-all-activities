import { product } from './productobjects.js';
function App() {
  const print = (name) => {
    console.log(name);
  }
  const listItems = product.map(eachProduct => (
    <li key={eachProduct.id}>{eachProduct.name}
      <button onClick={() => print(eachProduct.name)}>{eachProduct.name}</button>
    </li>
  ));
  return ( 
    product.length > 0?
    (<div>
      <ul>{listItems}</ul>
    </div> ):
   ( <div>NO PRODUCTS AVAILABLE</div>)
   );
  }
export default App;
