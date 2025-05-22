import { prefixUser } from "../../constants"
import { get } from "../../utils/request"

export const filterProdutForUser = async (data) => {
    const { categoryId, slugSearchKey } = data;
    const res = await get(`${prefixUser}/products?categoryId=${categoryId}&searchKey=${slugSearchKey}`);
    return res;
}