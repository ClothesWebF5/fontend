import { post } from "../../utils/request";

export const createProduct = async (data) => {
    const res = await post(`api/products`, data);
    return res;
}