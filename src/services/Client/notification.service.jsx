import { prefixUser } from "../../constants"
import { patch } from "../../utils/request"

export const updateStatus = async () => {
    const res = await patch(`${prefixUser}/notifications`);
    return res;
}