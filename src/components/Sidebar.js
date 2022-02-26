import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
// styles
import './Sidebar.css';
//images
import DashboardIcon from '../assets/dashboard_icon.svg';
import addIcon from '../assets/add_icon.svg';
import Avatar from './Avatar';

export default function Sidebar() {
    const {user} = useAuthContext();
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="user">
                    <Avatar src={user.photoURL}/>
                    <p>Hey {user.displayName}</p>
                </div>
                <nav className="links">
                    <ul>
                        <li>
                            <NavLink exact  to="/">
                                <img src={DashboardIcon} alt="dashboard icon" />
                                <span>DashBoard</span>
                            </NavLink>
                        </li>

                        
                        <li>
                            <NavLink to="/create">
                                <img src={addIcon} alt="add project icon" />
                                <span>New Project</span>
                            </NavLink>
                        </li>
                    </ul>

                </nav>
            </div>
        </div>
    )
} //end of Sidebar
