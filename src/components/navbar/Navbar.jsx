import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <span className="navLogo">hotelBook .</span>
        <div className="navButtons">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
        </div>
    </div>
  )
}

export default Navbar