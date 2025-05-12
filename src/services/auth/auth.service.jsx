import { verifyToken as verify, get } from "../../utils/request";

export const verifyToken = async (data) => {
    const res = await verify("auth/introspect", data);
    return res;   
}

export const getProfile = async () =>{
    const res = await get("auth/profile");
    return res;
}