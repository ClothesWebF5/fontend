import { prefixUser } from "../../constants"
import { post } from "../../utils/request"

export const sendQuestion = async (question) => {
    const res = await post(`${prefixUser}/chatbot/ask`, question);
    return res;
}