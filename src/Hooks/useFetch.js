import { useEffect, useState } from 'react'

const useFetch = (url="",options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true);
    
    fetch(url, options)
    .then((res) => res.json())  
    .then((data) => {
        setData(data);
        setError(null);
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        setLoading(false)
    })
    
  }, [url, options])

  return { data, error, loading };

}

export default useFetch
