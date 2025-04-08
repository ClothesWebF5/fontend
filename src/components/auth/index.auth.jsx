import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { verifyToken } from "../../services/auth/auth.service";
function Auth() {
    const [isAuthorized, setIsAuthorized] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchApi = async () => {
                const token = localStorage.getItem("accessToken");
                const res = await verifyToken({token});
                if (res.status === 200) {
                    setIsAuthorized(true);
                } else {
                    navigate("/login");
                }
        
        }
        fetchApi();
    }, [navigate]);
    return (
        (isAuthorized ?  <Outlet /> : <div>Error</div>)
    );
}

export default Auth;