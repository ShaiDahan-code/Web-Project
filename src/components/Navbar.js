import { Link } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
//style
import './Navbar.css'
//images
import Temple from '../assets/temple.svg'


//Setup the Navbar of the app for the user to use it
//In the css file we have the navbar fixed to the top of the screen
export default function Navbar(){
    const {logout,isPending} = useLogout();
    const {user} = useAuthContext();
    return (
        <div className="navbar">
            <ul>
                <li className="logo">
                    <img src={Temple} alt="dojo logo" />
                    <span>The Dojo</span>
                </li>
                {!user &&(
                    <>
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="signup">Signup</Link></li>
                    </>
                )}
                {user && (
                <li>
                  {!isPending && <button className="btn" onClick={logout}>Logout</button>}
                  {isPending && <button className="btn" disabled>Logging out</button>}

                </li>
                )}
            </ul>
        </div>
    )
}