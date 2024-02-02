import sun_1 from '../images/sun_1.png';
import humidity from '../images/humidity.png';
import wind from '../images/wind.png';
import { useSelector } from 'react-redux';

export default function Display() {

  const data = useSelector((state) => state.weather)
  
  if (!data.isLoading) {
    return (
      <div className="mt-5 display-container d-flex flex-column align-items-center">
        <img 
          style={{width: '140px'}}
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt="sun" 
          className='img-fluid'
        />
        <p className='display-1 m-0 text-light'><strong>{data.temperature}°C</strong></p>
        <p className='display-1 m-0 text-light'><strong>{data.city}</strong></p>
        <div className='d-flex mt-5 justify-content-around container'>
          <div className='d-flex flex-column align-items-center'>
            <img style={{width: '80px'}} src={humidity} alt='humidity'/>
            <div className='display-6 text-light mt-3'>{data.humidity}%</div>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <img style={{width: '80px'}} src={wind} alt='wind' />
            <p className='display-6 text-light mt-3'>{data.wind}km/h</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="display-1 mt-5 d-flex justify-content-center text-light">Loading...</div>
    )
  }
}
