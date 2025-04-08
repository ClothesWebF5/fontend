import { get } from "../../utils/request";
import { config } from "../../config/index.config"

export const listRole = async () => {
    const res = await get(`admin/roles`);
    return res;
}

// export const createRole = async (data) => {
//     const res = await post(`${config.prefixAdmin}/role/create`, data);
//     return res;
// }

// export const updateRole = async (data) => {
//     const res = await patch(`${config.prefixAdmin}/role/update`, data);
//     return res;
// }

// export const deleteRole = async (id) => {
//     const res = await del(`${config.prefixAdmin}/role/delete`, id);
//     return res;
// }