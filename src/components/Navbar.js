import { Link } from 'react-router-dom'

//style
import './Navbar.css'
//images
import Temple from '../assets/temple.svg'


//Setup the Navbar of the app for the user to use it
//In the css file we have the navbar fixed to the top of the screen
export default function Navbar(){
    return (
        <div className="navbar">
            <ul>
                <li className="logo">
                    <img src={Temple} alt="dojo logo" />
                    <span>The Dojo</span>
                </li>

                <li><Link to="login">Login</Link></li>
                <li><Link to="signup">Signup</Link></li>

                <li>
                    <button className="btn">Logout</button>
                </li>

            </ul>
        </div>
    )
}