import useJsonFetch from "./useJsonFetch";

export default function Loading() {
  const [{loading}] = useJsonFetch('loading');
  return <div>Loading: {loading}</div>;
}