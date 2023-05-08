import useJsonFetch from "./useJsonFetch";

export default function Data() {
  const [{data}] = useJsonFetch('data');
  return <div>Data: {data}</div>;
}