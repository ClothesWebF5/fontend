import { verifyToken as verify } from "../../utils/request";

export const verifyToken = async (data) => {
    const res = await verify("auth/introspect", data);
    return res;   
}