import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Hotels from './pages/hotels/Hotels';
import HotelPage from './pages/hotelPage/HotelPage';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
        <Route path="/hotels/:id" element={<HotelPage/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
