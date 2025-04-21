import { Navigate, Outlet } from "react-router";

const Protect = ({
    Autorized,
    redirectPath = "/"
}) => {
    if (!Autorized) {
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />
}

export default Protect