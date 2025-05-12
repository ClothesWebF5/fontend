import { get, patch, post } from "../../utils/request"
import { prefixAdmin } from "../../constants";

export const listCategory = async () => {
    const res = await get(`${prefixAdmin}/categories`);
    return res;
}

export const createCategory = async (data) => {
    const res = await post(`${prefixAdmin}/categories`, data);
    return res;
}

export const getCategoryById = async (id) => {
    const res = await get(`${prefixAdmin}/categories/${id}`);
    return res;
}

export const updateCategory = async (id, data) => {
    const res = await patch(`${prefixAdmin}/categories/${id}`, data);
    return res;
}