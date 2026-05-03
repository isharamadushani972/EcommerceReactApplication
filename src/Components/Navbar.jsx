import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className="container-fluid" style={{padding: 0}}>
            <div className="nav-item">
                <nav className="nav-menu mobile-menu">
                    <div
                        style={{
                            padding: '10px',
                            color: '#ffffff',
                            width: '267px'
                        }}
                    >
                        <h4>Ishara Fashion</h4>
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Checkout">Checkout</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                   <div className="nav-right" style={{display: 'flex', gap: '8px'}}>
+                        <Link to="/Login" className="login-panel" style={{backgroundColor: '#524d4d', color: '#fff', padding: '5px 10px', borderRadius: '4px', textDecoration: 'none'}}>Login</Link>
+                        <Link to="/Signup" className="login-panel" style={{backgroundColor: '#007bff', color: '#fff', padding: '5px 10px', borderRadius: '4px', textDecoration: 'none'}}>Signup</Link>
+                    </div>
                </nav>

            </div>

        </div>
    )
}

export default Navbar