import { useSelector } from "react-redux";
import { Navigate, useLocation} from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { isLoggedIn } = useSelector((state) => state.auth)
    return isLoggedIn ? 
            children:
        <Navigate to={"/login"} state={{ from: location }} replace={true}/>
}