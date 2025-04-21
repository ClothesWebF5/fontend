import { get, patch, post } from "../../utils/request"

export const listCategory = async () => {
    const res = await get("api/categories");
    return res;
}

export const createCategory = async (data) => {
    const res = await post(`api/categories`, data);
    return res;
}

export const getCategoryById = async (id) => {
    const res = await get(`api/categories/${id}`);
    return res;
}

export const updateCategory = async (id, data) => {
    const res = await patch(`api/categories/${id}`, data);
    return res;
}