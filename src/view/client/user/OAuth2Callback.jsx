import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { sendCode } from "../../../services/Client/user.service";

function OAuth2Callback() {
    const navigate = useNavigate();
    const { type } = useParams();
    

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        if (code) {
            const fetchApi = async () => {
                const res = await sendCode(type, code);
                localStorage.setItem("accessToken", res.data.result.token);
                navigate("/user/infor");
            }
            fetchApi();
        } else {
            toast.error("Thiếu mã code trong URL!");
            navigate("/login");
        }
    }, []);

    return <div className="text-white text-center mt-10">Đang xử lý đăng nhập Google...</div>;
}

export default OAuth2Callback;
