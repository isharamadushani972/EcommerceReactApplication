import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className="nav-item">
            <nav className="nav-menu mobile-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Checkout">Checkout</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
            <div id="mobile-menu-wrap"></div>
        </div>
    )
}

export default Navbar