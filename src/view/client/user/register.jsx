import { faCircleMinus, faClipboardCheck, faEnvelope, faEye, faEyeSlash, faImage, faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { delete_preview, preview } from "../../../helpers/preview_avatar";
import { useState } from "react";
import { register } from "../../../services/Client/user.service";
import { ToastContainer, toast } from 'react-toastify';
import { notification } from "../../../helpers/toast";

function Register() {
    const [showPass, setShowPass] = useState(false);
    const [dataForm, setDataForm] = useState({});
    const [fileUpload, setFileUpload] = useState(null);
    const handleChangeAvatar = (e) => {
        preview(e);
        setFileUpload(e.target.files[0]);
    }
    const handleDeletePreview = () => {
        delete_preview();
        setFileUpload(null);
    }

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setDataForm({
            ...dataForm,
            [key]: value
        })
    }
    const handleSubmit = async (e) => {
        const patternEmail = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.(com|vn)$/;
        const patternPassword = /(?=.*\d)(?=.*\W)(?=.*[A-Z]).{8,}/;
        const patternPhone = /^0[0-9]{9}$/;
        e.preventDefault();
        if (!dataForm?.fullName?.trim()) {
            notification(toast, "Vui lòng nhập họ và tên!");
        } else if (!dataForm?.phone?.trim()) {
            notification(toast, "Vui lòng nhập số điện thoại!");
        } else if (!dataForm?.email?.trim()) {
            notification(toast, "Vui lòng nhập email!");
        } else if (!dataForm?.password?.trim()) {
            notification(toast, "Vui lòng nhập mật khẩu!");
        } else if (!dataForm?.confirmPassword?.trim()) {
            notification(toast, "Vui lòng xác nhận mật khẩu!");
        } else if (!dataForm?.email?.trim()) {
            notification(toast, "Vui lòng nhâp số điện thoại!");
        } else if (!fileUpload) {
            notification(toast, "Vui lòng chọn ảnh đại diện!");
        } else if (!patternEmail.test(dataForm.email)) {
            notification(toast, "Email không đúng định dạng!");
        } else if (!patternPhone.test(dataForm.phone)) {
            notification(toast, "Số điện thoại gồm 10 chữ số và bắt đầu bằng 0!");
        } else if (!patternPassword.test(dataForm.password)) {
            notification(toast, "Mật khẩu tối thiểu 8 ký tự (ít nhất 1 chữ hoa, 1 số và 1 ký tự đặc biệt)!");
        } else if (dataForm.password !== dataForm.confirmPassword) {
            notification(toast, "Vui lòng xác nhận lại mật khẩu!");
        } else {
            const formData = new FormData();
            formData.append("avatar", fileUpload);
            for (const item in dataForm) {
                formData.append(item, dataForm[item]);
            }
            const res = await register(formData);
            if(res.status === 200){
                notification(toast, res.data.message, "success");
            }else{
                notification(toast, res.data.message);
            }

        }
    }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                pauseOnHover={false}
            />
            <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-third via-four to-five font-poppins">
                <form className="w-full max-w-md mx-auto max-h-[448px] overflow-y-auto bg-white shadow-lg rounded-lg px-6 pb-6 space-y-6 border border-gray-200 relative"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-2xl font-bold text-gray-800 text-center sticky bg-white top-0 z-50 py-3">Đăng ký tài khoản</h1>
                    <div className="space-y-2">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                            Họ và tên
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="w-full px-4 py-2 pl-10 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none"
                                placeholder="Nhập họ tên"
                                onChange={handleChange}
                            />
                            <span className="absolute left-4 top-[50%] translate-y-[-50%]">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Số điện thoại
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                className="w-full px-4 pl-10 py-2 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none"
                                placeholder="Nhập số điện thoại"
                                onChange={handleChange}
                            />
                            <span className="absolute left-4 top-[50%] translate-y-[-50%]">
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="pl-10 w-full px-4 py-2 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none"
                                placeholder="Nhập email"
                                onChange={handleChange}
                            />
                            <span className="absolute left-4 top-[50%] translate-y-[-50%]">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Mật khẩu
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-[50%] translate-y-[-50%]">
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input
                                type={showPass ? "text" : "password"}
                                id="password"
                                name="password"
                                className="w-full pl-10 pr-10 px-4 py-2 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none"
                                placeholder="Nhập mật khẩu"
                                onChange={handleChange}
                            />
                            <span className="absolute right-4 top-[50%] translate-y-[-50%]" onClick={() => setShowPass(!showPass)}>
                                <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} className="cursor-pointer" />
                            </span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Xác nhận mật khẩu
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full px-4 pl-10 py-2 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none"
                                placeholder="Nhập lại mật khẩu..."
                                onChange={handleChange}
                            />
                            <span className="absolute left-4 top-[50%] translate-y-[-50%]">
                                <FontAwesomeIcon icon={faClipboardCheck} />
                            </span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
                            Ảnh đại diện
                        </label>
                        <div className="mt-1 flex justify-center p-1 w-full items-center border-2 border-gray-300 border-dashed rounded-md h-[100px]">
                            <div className="space-y-1 text-center" id="preview_text">
                                <div className="w-[40px] h-[40px] mx-auto opacity-55">
                                    <FontAwesomeIcon icon={faImage} className="w-full h-full" />
                                </div>
                                <div className="flex text-sm text-gray-600">
                                    <label
                                        htmlFor="avatar"
                                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                    >
                                        <span>Tải lên ảnh</span>
                                        <input
                                            id="avatar"
                                            name="avatar"
                                            type="file"
                                            className="sr-only"
                                            onChange={handleChangeAvatar}
                                            accept=".png, .jpg"
                                        />
                                    </label>
                                    <p className="pl-1">hoặc kéo và thả</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG tối đa 10MB</p>
                            </div>
                            <div className="w-full h-full relative hidden" id="preview_avatar">
                                <img className="w-full h-full object-contain" alt="avatar" />
                                <FontAwesomeIcon icon={faCircleMinus}
                                    className="absolute top-0 right-0 hover:text-red-500 transition-all duration-200 cursor-pointer opacity-15 hover:opacity-100" id="delete_icon"
                                    onClick={handleDeletePreview}
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-opacity-90 transition"
                    >
                        Đăng ký
                    </button>
                </form>
            </div>
        </>
    );
}

export default Register;
