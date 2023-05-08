import { useEffect, useState } from "react";

export default function useJsonFetch(request, options = null) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (query) => {
      setLoading(`Идёт загрузка...`);

      try {
        const response = await fetch(process.env.REACT_APP_URL + query, options);
        const data = await response.json();
        setData(`Данные загружены. Статус: ${data.status}`);
      } catch (e) {
        setError(`Ошибка!`);
      } finally {
        setLoading(false);
      }
    };

    fetchData(request);
  }, [request, options]);

  return [{data, loading, error}];
}