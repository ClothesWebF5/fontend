import { get } from "../../utils/request"

export const getColors = async () => {
    const res = await get("api/common/colors");
    return res;
}

export const getSizes = async () => {
    const res = await get("api/common/sizes");
    return res;
}

export const getProducts = async () => {
    const res = await get("api/common/products");
    return res;
}