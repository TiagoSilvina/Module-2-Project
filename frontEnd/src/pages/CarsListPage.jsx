import { useEffect, useState } from "react"; 
import axios from 'axios';
import {Link} from 'react-router-dom';


const API ="http://localhost:5000";

function CarsListPage(){
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        axios.get(`${API}/cars`)
        .then((response)=> setCars(response.data))
        .catch((error)=> console.log(error));
    }, [])

    return(
    <div>
      {cars && cars.map((car)=>{

        return (
          <div>
          <Link to={`/cars/${car.id}`}>
          <article  className="car-container" key={car.id}>
            
                <img url={car.imageUrl} alt="Car"/>
                <article className="car-data">
                  <h3>{car.year} {car.brand} {car.model}</h3>
                  <p><b>KM: </b> {car.km}</p>
                  <Link to="/bids"><button>Place bid</button></Link>
                </article>
          </article>
          </Link>
          </div>
          );
      })}  
    </div>)
}

export default CarsListPage