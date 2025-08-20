### Initialized react 
through npx create-react-app weather-app

### installed '@tanstack/react-query'
to use , QueryClient, QueryClientProvider, useQuery. 

as useQuery provides caching, and if fetching fails due to any error, it itself tries to fetch again repetetively for 3 times to avoid error, we use this.

### useState 

used two states, one is to update the city as we typoe in the input.
other is searchCity to fetch based upon this city. 

const [city, setCity] = useState('') => to store city name as we type
const [searchCity, setSearchCity] = useState('') => to fetch for the typed city as we click on the search button 

### error 

generally if there is no data returned to the city, i.e, if we give an invalid city, fetch do not throw an error, as fetch do not throw error for HTTP errors. 

but made it throw an error if there is no data. 
