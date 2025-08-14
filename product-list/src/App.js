import { product } from './productobjects.js';
function App() {
  const print =(name)=>{
    console.log(name);
  }
  const listItems = product.map(eachProduct =>(
    <li key={eachProduct.id}>{eachProduct.name}
      <button onClick={()=>print(eachProduct.name)}>{eachProduct.name}</button>
    </li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>);
}
export default App;
