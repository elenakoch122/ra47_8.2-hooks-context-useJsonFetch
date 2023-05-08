import { useEffect, useState } from "react";

export default function useJsonFetch(request) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (query) => {
      setLoading('Идёт загрузка...');

      try {
        await fetch(process.env.REACT_APP_URL + query);
        setData('Данные загружены.');
      } catch (error) {
        setError('Ошибка!');
      } finally {
        setLoading(false);
      }
    };

    fetchData(request);
  }, [request]);

  return [{data, loading, error}];
}