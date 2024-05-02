import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const RequireAuth = () => {
    const userToken = useSelector((state) => state.authRequests.userToken)
    const userInfo = useSelector((state) => state.authRequests.userInfo)
    console.log('User Token in RequireAuth:', userToken);
    const location = useLocation()


    return (
        userToken && userToken
            ? <Outlet />
            : <Navigate to="/" state={{ from: location }} replace />
    )
}
export default RequireAuth