import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API ="http://localhost:5000";


function FavoritesPage(){

    return(
      <article className="favorites-page">
      <h1>Page under construction</h1>
      <p>Favorites page</p>
      <Link to="/"><button>Back to Home Page</button></Link>
      </article>
        );
}
export default  FavoritesPage;