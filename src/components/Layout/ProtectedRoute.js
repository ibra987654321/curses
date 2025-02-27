import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
    const isAuth = useSelector((state) => state.auth.isAuthenticated); // Замените на вашу проверку авторизации
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
