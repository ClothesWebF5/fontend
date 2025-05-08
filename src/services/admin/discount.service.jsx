import { del, get, patch, post } from "../../utils/request"

export const listDiscountByProductId = async (productId) => {
    const res = await get(`api/discounts/${productId}`);
    return res;
}

export const createDiscount = async (data) => {
    const res = await post("api/discounts", data);
    return res;
}

export const deleteDiscount = async (id) => {
    const res = await del(`api/discounts/${id}`);
    return res;
}