import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login, withGoogleOrFacebook } from "../../../services/Client/user.service";
import { notification } from "../../../helpers/toast";
import { jwtDecode } from "jwt-decode";

function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginWithProvider = async (type) => {
        try {
            const res = await withGoogleOrFacebook(type);
            if (res.status === 200) {
                window.location.href = res.data.message;
            } else {
                notification(toast, res.data.message);
            }
        } catch (err) {
            notification(toast, "Có lỗi xảy ra khi đăng nhập với " + type);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email.trim() == "") {
            notification(toast, "Vui lòng nhập email!");
        } else if (password.trim() == "") {
            notification(toast, "Vui lòng nhập mật khẩu!");
        } else {
            const res = await login({ email, password });
            if (res.status === 200) {
                localStorage.setItem("accessToken", res.data.result.token);
                const scope = jwtDecode(res.data.result.token).scope;
                const isUser = scope.split(" ").includes("ROLE_USER");
                if (isUser) navigate("/user/infor");
                else navigate("/admin/dashboard");
            } else {
                notification(toast, res.data.message);
            }
        }
    };

    return (
        <>
            <ToastContainer position="top-center" autoClose={5000} pauseOnHover={false} />
            <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] font-poppins text-white px-4">
                <div className="w-full max-w-sm p-8 bg-[rgba(0,0,0,0.6)] rounded-2xl backdrop-blur-md shadow-xl">
                    <h1 className="text-center text-3xl font-bold mb-6 text-green-400">Đăng nhập</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 relative">
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-full p-3 pl-10 bg-[rgba(255,255,255,0.1)] rounded-full focus:outline-none placeholder:text-white"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="absolute left-4 top-[50%] translate-y-[-50%]">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                        </div>
                        <div className="mb-4 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Mật khẩu"
                                className="w-full p-3 pl-10 pr-10 bg-[rgba(255,255,255,0.1)] rounded-full focus:outline-none placeholder:text-white"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="absolute left-4 top-[50%] translate-y-[-50%]">
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <span
                                className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="text-green-400" />
                            </span>
                        </div>
                        <div className="flex items-center justify-between mb-4 text-sm">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                Ghi nhớ đăng nhập
                            </label>
                            <Link to={"/forgot"} className="hover:underline text-green-400">Quên mật khẩu</Link>
                        </div>
                        <button
                            type="submit"
                            className="w-full p-3 bg-gradient-to-r from-[#a64bf4] to-[#d946ef] text-white rounded-full font-semibold shadow-md hover:opacity-90 transition-all"
                        >
                            Đăng nhập
                        </button>
                    </form>

                    <div className="flex justify-center items-center my-4">
                        <div className="border-t border-gray-500 w-1/4" />
                        <span className="mx-2 text-sm">hoặc</span>
                        <div className="border-t border-gray-500 w-1/4" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <button className="w-full p-3 bg-[#db4437] rounded-full font-semibold hover:opacity-90 transition-all" onClick={() => loginWithProvider("google")}>
                            Đăng nhập với Google
                        </button>
                        <button className="w-full p-3 bg-[#3b5998] rounded-full font-semibold hover:opacity-90 transition-all" onClick={() => loginWithProvider("facebook")}>
                            Đăng nhập với Facebook
                        </button>
                    </div>

                    <p className="text-center text-sm mt-6">
                        Bạn chưa đăng ký? <Link to={"/register"} className="text-green-400 hover:underline">Tạo tài khoản</Link>
                    </p>
                </div>
            </div>

        </>
    );
}

export default Login;
