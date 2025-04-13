import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../../services/Client/user.service";
import { notification } from "../../../helpers/toast";

import { jwtDecode } from 'jwt-decode';

function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const patternEmail = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.(com|vn)$/;
    const patternPassword = /(?=.*\d)(?=.*\W)(?=.*[A-Z]).{8,}/;

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!email.trim()) {
        //     notification(toast, "Email không để trống");
        // } else if (!password.trim()) {
        //     notification(toast, "Mật khẩu không để trống!");
        // } else if (!patternEmail.test(email)) {
        //     notification(toast, "Email không đúng định dạng!");
        // } else if (!patternPassword.test(password)) {
        //     notification(toast, "Mật khẩu tối thiểu 8 ký tự (ít nhất 1 chữ hoa, 1 số và 1 ký tự đặc biệt)!");        
        // } else {

        // }

        const res = await login({ email, password });
        if (res.status === 200) {
            localStorage.setItem("accessToken", res.data.result.token);
            const scope = jwtDecode(res.data.result.token).scope;
            const isUser = scope.split(" ").includes("ROLE_USER");
            if (isUser) {
                navigate("/user/infor");
            } else {
                navigate("/admin/dashboard");
            }
        } else {
            notification(toast, res.data.message);
        }
    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                pauseOnHover={false}
            />
            <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#3ec1d3] font-poppins">
                <div className="w-[360px] p-8 bg-[rgba(255,255,255,0.2)] rounded-[16px] backdrop-blur-[20px] shadow-lg text-white">
                    <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 relative">
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full p-3 pl-10 bg-[rgba(255,255,255,0.3)] rounded-full focus:outline-none placeholder:text-white focus:placeholder:opacity-25"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="absolute left-4 top-[50%] translate-y-[-50%]">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                        </div>
                        <div className="mb-4 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full p-3 pl-10 pr-10 bg-[rgba(255,255,255,0.3)] rounded-full focus:outline-none placeholder:text-white focus:placeholder:opacity-25"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="absolute left-4 top-[50%] translate-y-[-50%]">
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <span
                                className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                            </span>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center text-sm">
                                <input type="checkbox" className="mr-2" />
                                Remember me
                            </label>
                            <Link className="text-sm hover:underline" to={"/forgot"}>Forgot password</Link>
                        </div>
                        <button
                            type="submit"
                            className="w-full p-3 bg-gradient-to-r from-[#2a5298] to-[#1e3c72] 
                                text-white rounded-full font-medium hover:from-[#3ec1d3] 
                                hover:to-[#2a5298] transition-all duration-300 shadow-md 
                                hover:shadow-lg active:scale-95 focus:outline-none 
                                focus:ring-2 focus:ring-[#3ec1d3] focus:ring-opacity-50"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-center text-sm mt-6">
                        Don't have an account?
                        <Link to={"/register"} className="ml-1 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;