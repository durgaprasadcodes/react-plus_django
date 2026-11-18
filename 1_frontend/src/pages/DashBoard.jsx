
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function Profile() {

    const { user, IsAuthenticated } = useAuth();

    return (
        <div>
            <Navbar />
            <h2>{user}</h2>

            <p>
                Status: {
                    IsAuthenticated
                        ? "User Logged In"
                        : "User Not Logged In"
                }
            </p>
        </div>
    );
}

