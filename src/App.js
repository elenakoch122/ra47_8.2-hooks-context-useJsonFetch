import './App.css';
import Data from './components/Data';
import Error from './components/Error';
import Loading from './components/Loading';

export default function App() {
  return (
    <div className="App">
      <Data />
      <Error />
      <Loading />
    </div>
  );
}
