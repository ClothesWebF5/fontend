import { get, post } from "../../utils/request"

export const getInfor = async () => {
    const res = await get("api/client/users/myInfor");
    return res;
}

export const login = async (data) => {
    const res = await post("auth/login", data);
    return res;
}

export const sendEmail = async(data) => {
    const res = await post("auth/sendEmail", data);
    return res;
}

export const getCity = async () => {
    const res = await get("cities");
    return res;
}

export const register = async (data) => {
    const res = await post("auth/register", data);
    return res;
}

export const withGoogleOrFacebook = async (type) => {
    const res = await get(`auth/social-login?type=${type}`);
    return res;
}

export const sendCode = async (type, code) => {
    const res = await get(`auth/login/${type}?code=${code}`);
    return res;
}

export const logout = async () => {
    const res = await get(`auth/logout`);
    return res;
}