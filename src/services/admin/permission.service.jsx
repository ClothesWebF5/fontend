import { config } from "../../config/index.config"
import { get } from "../../utils/request";

export const listPermission = async () => {
    const res = await get(`admin/permissions`);
    return res;
}