import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const API ="http://localhost:5000";

function AddCarPage(){
    
    const [year, setYear] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [km, setKm] = useState("");
    const [imageUrl, setImg] = useState("");
    const [user, setUser] = useState("");
    const [favorite, setFavorite] = useState(false);
    const navigate = useNavigate();

function handleSubmit(e){
    e.preventDefault();

    const car ={
            year,
            brand,
            model,
            imageUrl,
            km,
            user,
            favorite
        };

    axios.post(`${API}/cars`, car)
         .then(() => navigate("/cars"))
         .catch((error)=> console.log(error));
    }
    

function deleteCar(){

        axios.delete(`${API}/cars/${id}`)
             .then(() => { navigate("/cars");})
             .catch((error) => console.log(error));
            };

    
    return(
        <article >
        <form className="car-form" onSubmit={handleSubmit}>

            <label>Year:</label>
            <input value = {year} name="year" type="number" placeholder="Year"
            min="1965" max="2000" 
            required onChange={(e)=> setYear(e.target.value)}/>

            <label>Brand:</label>
            <input value = {brand} name="brand" type="text" placeholder="Brand"
            required onChange={(e)=> setBrand(e.target.value)}/>

            <label>Model:</label>
            <input value = {model} name="model" type="text" placeholder="Model"
            required onChange={(e)=> setModel(e.target.value)}/>

            <label>Km:</label>
            <input value = {km} name="km" type="number" placeholder="Km"
            min="0" max="1000000"
            required onChange={(e)=> setKm(e.target.value)}/>

            <label>Image:</label>
            <input value = {imageUrl} name="img" type="text" placeholder="Image Url"
            required onChange={(e)=> setImg(e.target.value)}/>

            <label>User:</label>
            <input value = {user} name="user" type="text" placeholder="User"
            required onChange={(e)=> setUser(e.target.value)}/>

            <button type='submit'>Add Car</button>
        </form>
        <Link to="/cars"><button className="back2listing">Back to Listing</button></Link>
        </article>
    )
}

export default AddCarPage