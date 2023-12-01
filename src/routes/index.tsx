import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";

export const PrivateRoutes = () => {
    const { signed }:any = useContext(AuthContext);
    return signed ? <Outlet /> : <Navigate to="/" />;
};