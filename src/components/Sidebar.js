import { NavLink } from 'react-router-dom';

// styles
import './Sidebar.css';
//images
import DashboardIcon from '../assets/dashboard_icon.svg';
import addIcon from '../assets/add_icon.svg';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="user">
                    {/* TODO: avatar and username here later */}
                    <p>Hey user</p>
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
                                <span>Add New Project</span>
                            </NavLink>
                        </li>
                    </ul>

                </nav>
            </div>
        </div>
    )
} //end of Sidebar
