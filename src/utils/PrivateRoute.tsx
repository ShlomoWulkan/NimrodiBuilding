import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { RootState } from "../store/store";

interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component }:IPrivateRoute) => {
    const floorAccess = useSelector((state: RootState) => state.floorAccess.floorAccess);
    const { index } = useParams<{ index: string }>();
    const navigate = useNavigate();
    useEffect(() => {
        if (!floorAccess[parseInt(index || "0")]) {
            navigate("/forbidden");
        }
    }, [index, floorAccess, navigate]);
    return <>{component}</>;
};

export default PrivateRoute;
