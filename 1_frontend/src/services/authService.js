import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export const useLogin = () => {

    const loginAPI = useCallback(async (credentials) => {

        try {
            const request = api.post("/auth/login", credentials);

            toast.promise(request, {
                loading: "Logging in...",
                success: "Login Successful",
                error: (err) => err.response?.data?.message || "Login Failed",
            });

            const { data } = await request;
            return data;
        } catch {
            return null;
        }
    }, []);

    return { loginAPI };
};

export const useRegistration = () => {

    const registrationAPI = useCallback(async (userData) => {

        try {
            const request = api.post("/auth/register", userData);

            toast.promise(request, {
                loading: "Please wait...",
                success: "Registration Successful",
                error: (err) =>
                    err.response?.data?.message || err.message || "Registration Failed",
            });

            const { data } = await request;
            return data;
        } catch {
            return null;
        }

    }, []);

    return { registrationAPI };
};

export const useRefreshToken = () => {
    const navigate = useNavigate();

    const refreshToken = useCallback(async () => {

        try {

            const { data } = await api.post("/auth/refresh/");

            if (data?.access_token) {
                sessionStorage.setItem("access_token", data.access_token);
            }

            return data;
        } catch {
            sessionStorage.removeItem("access_token");
            toast.info("Session expired, please login again");
            navigate("/login");
            return null;
        }

    }, [navigate]);

    return { refreshToken };
};

export const useGetCurrentUser = () => {

    const getCurrentUser = useCallback(async () => {

        try {
            const { data } = await api.get("/auth/me/");
            return data;
        } catch (err) {
            if (err.response?.status === 401) {
                return null;
            }
            const errMessage =
                err.response?.data?.message ||
                err.message ||
                "Something went wrong, refresh the page";
            toast.error(errMessage);
            return null;
        }

    }, []);

    return { getCurrentUser };
};