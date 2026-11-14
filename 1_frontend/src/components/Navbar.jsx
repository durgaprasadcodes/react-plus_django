import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"


export default function Navbar() {

    const navigate = useNavigate();

    const { user, logout, IsAuthenticated } = useAuth();
    return (
        <nav>
            <h2>TaskFlow</h2>
            <NavLink to="/">Home</NavLink> <br />
            <NavLink to="/profile">Profile</NavLink>
            {
                IsAuthenticated ?
                    (
                        <div className="data">
                            <p> {user.username} </p>
                            <button onClick={logout}>Log Out</button>
                        </div>
                    )
                    :
                    (
                        <div className="btns">
                            <button onClick={() => navigate('/login')}>Login</button>
                            <button onClick={() => navigate('/login')}>Sign Up</button>
                        </div>
                    )
            }
        </nav>
    );
}
