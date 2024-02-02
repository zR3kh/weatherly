import { useDispatch } from "react-redux";
import { getWeather } from "../features/weatherSlice";
import { useState } from "react";

export default function Navbar() {

  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  return (
    <nav className="pt-5">
      <div className="container-fluid">
        <form className="d-flex justify-content-center" role="search">
          <input 
            className="form-control me-2 w-75 rounded" 
            type="search" 
            placeholder="Bagneux" 
            aria-label="Search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
          <button 
            style={{width: '50px', height: '50px'}} 
            className="btn btn-light rounded-circle" 
            type="submit"
            onClick={(e) => {
                e.preventDefault()
                dispatch(getWeather(city))
              }
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </form>
      </div>
    </nav>
  )
}
