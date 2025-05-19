import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { sendCode } from "../../services/Client/user.service";
import { notification } from "../../helpers/toast";
import { jwtDecode } from "jwt-decode";
import { getProfile } from "../../services/auth/auth.service";
import { useDispatch } from "react-redux";
import { infor as profile } from "../../components/action/infor.action";

function OAuth2Callback() {
    const navigate = useNavigate();
    const { type } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        if (code) {
            const fetchApi = async () => {
                const res = await sendCode(type, code);
                if (res.status == 200) {
                    const token = res.data.result.token;
                    localStorage.setItem("accessToken", token);
                    const infor = await getProfile();
                    if (infor.status == 200) {
                        localStorage.setItem("profile", JSON.stringify(infor.data.result));
                        dispatch(profile(infor.data.result));
                        const scope = jwtDecode(token).scope;
                        const isUser = scope.split(" ").includes("ROLE_USER");
                        if (isUser) navigate("/");
                        else navigate("/admin/dashboard");
                    } else {
                        notification(toast, "Không lấy được thông tin người dùng");
                        navigate("/login");
                    }
                } else {
                    notification(toast, res.data.message);
                    navigate("/login");
                }
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
