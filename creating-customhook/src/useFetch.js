import { useState, useEffect } from 'react';
export default function useFetch(searchCity) {
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!searchCity)
            return;
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=20f87299df2cf2929a2d76cf2cb60c5d`);
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.message || "Failed to fetch");
                }

                setResult(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setResult(null);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [searchCity]);

    return { result, error, loading };
}
