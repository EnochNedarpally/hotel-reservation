import './Home.css'
import Navbar from '../../components/navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';

const Home = () => {
  return (
    <>
    <div className='homeContainer'>
        <Navbar/>
        <Header/>
    </div>
    <div className="homeWrapper">
        <Featured/>
        <PropertyList/>
        <FeaturedProperties/>
    </div>
    </>
  )
}

export default Home