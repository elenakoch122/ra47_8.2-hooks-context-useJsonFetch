import useJsonFetch from "./useJsonFetch";

export default function Error() {
  const [{error}] = useJsonFetch('error');
  return <div>Error: {error}</div>;
}