import './App.css';
import Navbar from './components/Navbar';
import Display from './components/Display';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from './features/weatherSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather('Bagneux'))
  }, [])

  return (
    <div className="weather-container container-fluid --bs-info">
      <Navbar/>
      <Display/>
    </div>
  );
}

export default App;
