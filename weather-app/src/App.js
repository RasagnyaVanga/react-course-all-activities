
import './App.css';
import { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Weather />
    </QueryClientProvider>
  );
}
function Weather() {
  const [city, setCity] = useState('');
  const [searchCity, setSearchCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);  //city=hyderabad
  }
  const handleClick = () => {
    setSearchCity(city);  //searchCity = city = hyderabad
    setCity('');
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['weather-data', searchCity],
    queryFn: async () =>{
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=20f87299df2cf2929a2d76cf2cb60c5d`);
        const jsonData=await res.json();
        if(!res.ok){
          throw new Error(jsonData.message || "Failed to fetch weather for the given city");
        }
        return jsonData;
      },
    enabled: !!searchCity, 
    staleTime: 1000* 60* 60 *1,
  })


  return (
    <div style={{textAlign:'center'}}>
      <h1>Weather Search</h1>
      <input id="city_id" type="text" placeholder='write the city' onChange={(e) => handleChange(e)} value={city} />
      <button onClick={() => handleClick()}>Search</button>
      {isPending && (searchCity!=='') && (<p style={{color: 'green'}}>Loading...</p>)}
      {error && (<p style={{color: 'red'}}>{error.message}</p>)}
      {data && data.weather &&
        (<p>Weather in {data.name}: {data.weather[0].main} <br />
          Temperature in {data.name}: {data.main.temp} Kelvin</p>)
      }
    </div>
  )
}
export default App;
