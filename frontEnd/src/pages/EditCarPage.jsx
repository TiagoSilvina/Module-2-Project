import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';


const API = "http://localhost:5000";

function EditCarPage(){

    const [year, setYear] = useState("Select Year");
    const [brand, setBrand] = useState("Select Brand");
    const [model, setModel] = useState("Select Model");
    const [color, setColor] = useState("Select Color");
    const [km, setKm] = useState("Select Km");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{

        axios.get(`${API}/cars/${id}`).then((response)=>{
              setYear(response.data.year);
              setBrand(response.data.brand);
              setModel(response.data.model);
              setColor(response.data.color);
              setKm(response.data.km);
           
        }).catch((error)=> console.log(error))
    }, [])

function handleSubmit(e){
    e.preventDefault();

    const car ={
        year,
        brand,
        model,
        color,
        km,
        favorite
    };

    axios.put(`${API}/cars/${id}`, data)
         .then(()=>{ navigate("/cars");})
         .catch((error)=>{console.log(error)})
    }

function deleteCar(){

    axios.delete(`${API}/cars/${id}`)
         .then(() => { navigate("/cars");})
         .catch((error) => console.log(error));
        };

    return(
        <article>
        <form onSubmit={handleSubmit}>

            <label>Year:</label>
            <input value = {year} name="year" type="date" 
            required onChange={(e)=> setYear(e.target.value)}/>

            <label>Brand:</label>
            <input value = {brand} name="brand" type="text" 
            required onChange={(e)=> setBrand(e.target.value)}/>

            <label>Model:</label>
            <input value = {model} name="model" type="text" 
            required onChange={(e)=> setModel(e.target.value)}/>

            <label>Km:</label>
            <input value = {km} name="km" type="number" 
            required onChange={(e)=> setKm(e.target.value)}/>

            <button type='submit'>Add Car</button>
        </form>

        <button onClick={deleteCar}>Remove Car</button>
        </article>
    )
}
export default EditCarPage