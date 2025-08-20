
import { useState } from 'react';
import './App.css';
import useFetch from './useFetch.js';
function App() {

  const [city, setCity] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const { result, error,loading } = useFetch(searchCity);
  const handleChange = (e) => {
    setCity(e.target.value);
  }
  const handleClick = () => {
    setSearchCity(city);
    setCity('');
  }
  return(
    <div style={{textAlign:'center'}}>
      <h1>Weather updates</h1>
      <input type="text" value={city} onChange={(e) => handleChange(e)} placeholder="Write the city"></input>
      <button onClick={() => handleClick()} >Search</button>
      {loading && (<p style={{ color: 'green' }}>Loading...</p>)}
      {error && (<p style={{ color: 'red' }}>{error}</p>)}
      {result && result.weather &&
        (<p>Weather in {result.name}: {result.weather[0].main} <br />
          Temperature in {result.name}: {result.main.temp} Kelvin</p>)
      }
    </div>
  );
}

export default App;