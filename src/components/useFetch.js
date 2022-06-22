import { useState, useEffect } from 'react';

const API_URL = 'https://62a4d0d547e6e4006398b48b.mockapi.io/api';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`${API_URL}/${url}`)
      .then((response) => {
        if (!response.ok) {
          throw Error('Could not fetch data!');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
