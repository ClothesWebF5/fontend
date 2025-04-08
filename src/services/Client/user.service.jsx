import { get, post } from "../../utils/request"

export const getInfor = async () => {
    const res = await get("api/client/users/myInfor");
    return res;
}

export const login = async (data) => {
    const res = await post("auth/login", data);
    return res;
}

export const register = async(data) => {
    const res = await post("register", data);
    return res;
}