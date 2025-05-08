import { del, get, patch, post } from "../../utils/request";

export const createProduct = async (data) => {
    const res = await post(`api/products`, data);
    return res;
}

export const filterProduct = async (data) => {
    const {searchKey, categoryId, status, pageNumber} = data;
    const res = await get(`api/products?searchKey=${searchKey}&categoryId=${categoryId}&status=${status}&pageNumber=${pageNumber}`);
    return res;
}

export const deleteProduct = async (ids) => {
    const res = await del(`api/products/${ids}`);
    return res;
}

export const getProductById = async (id) => {
    const res = await get(`api/products/${id}`);
    return res;
}

export const updateProduct = async (data) => {
    const res = await patch("api/products", data);
    return res;
}