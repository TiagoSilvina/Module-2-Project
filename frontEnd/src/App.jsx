import './App.css'
import { Routes, Route } from 'react-router-dom'

//Components
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

// Pages
import HomePage from "./pages/HomePage"
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import AddCarPage from './pages/AddCarPage';
import  CarDetailsPage from './pages/CarDetailsPage';
import CarsListPage from './pages/CarsListPage';
import EditCarPage from './pages/EditCarPage';
import BidsPage from './pages/BidsPage';
import FavoritesPage from './pages/FavoritesPage';
import SearchPage from './pages/SearchPage';

function App() {

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />;
          <Route path="/search" element={<SearchPage />} />;
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/cars" element={<CarsListPage/>} />
          <Route path="/cars/:id" element={<CarDetailsPage/>} />
          <Route path="/add-car" element={<AddCarPage />} />
          <Route path="/edit-car/:id" element={<EditCarPage />} />
          <Route path="/bids" element={<BidsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
  </>
  )
}

export default App
