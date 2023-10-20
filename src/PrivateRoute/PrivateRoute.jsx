import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    const location = useLocation()
    console.log(location);
        if(loading){
            return <h2 className="text-6xl text-center">Loading....</h2>
        }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;