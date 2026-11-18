import { createContext, useContext, useState } from "react";
import {
    useLogin,
    useRefreshToken,
    useRegistration,
    useGetCurrentUser
} from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { loginAPI } = useLogin();
    const { registrationAPI } = useRegistration();
    const { refreshToken } = useRefreshToken();
    const { getCurrentUser } = useGetCurrentUser();

    // LOGIN
    const login = async (email, password) => {
        setIsLoading(true);
        try {
            const data = await loginAPI({ email, password });

            if (!data) return false;

            const accessToken = data.access_token;
            if (!accessToken) return false;

            sessionStorage.setItem("access_token", accessToken);

            const currentUser = await getCurrentUser();

            setUser(currentUser);
            return true;
        } finally {
            setIsLoading(false);
        }
    }

    const register = async (userData) => {
        setIsLoading(true);
        try {
            const data = await registrationAPI(userData);
            return data;
        } finally {
            setIsLoading(false);
        }
    }

    const logout = async () => {
        setIsLoading(true);
        // try{
        //     const request = await
        // }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                register,
                logout,
                isLoading,
                IsAuthenticated: Boolean(user)
            }}
        >{children}</AuthContext.Provider>
    )
};

export function useAuth() {
    return useContext(AuthContext);
} 