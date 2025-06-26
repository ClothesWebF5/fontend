import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getStompClient } from "../../helpers/stompClient";
import { notification } from '../../helpers/toast';
import { getProfile } from '../../services/auth/auth.service';
import { infor } from '../action/index.action';

const OrderNotification = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.infor);
    const stompClient = getStompClient();

    const fetchProfile = async () => {
        try {
            const res = await getProfile();
            if (res.status === 200) {
                const updatedProfile = res.data.result;
                localStorage.setItem("profile", JSON.stringify(updatedProfile));
                dispatch(infor(updatedProfile));
            }
        } catch (error) {
            notification(toast, "Không thể lấy thông tin người dùng");
        }
    };

    useEffect(() => {
        if (!profile?.id) return;

        // Nếu chưa kết nối thì kích hoạt
        if (!stompClient.connected) {
            stompClient.onConnect = () => {
                // Đăng ký kênh riêng
                stompClient.subscribe(`/topic/order/${profile.id}`, (message) => {
                    fetchProfile();
                });

                // Đăng ký kênh chung
                stompClient.subscribe(`/topic/discount`, (message) => {
                    fetchProfile();
                });

                // cập nhập trang thái 
                stompClient.subscribe(`/user/queue/notification/ack`, (message) => {
                    if (message.body == "success") {
                        fetchProfile();
                    }
                });

                // exception
                stompClient.subscribe(`/user/queue/errors`, async (message) => {
                    notification(toast, message.body);
                })

            };

            stompClient.onStompError = () => {
                notification(toast, "STOMP lỗi kết nối");
            };

            stompClient.activate();
        }

    }, [profile?.id, dispatch]);

    return null;
};

export default OrderNotification;
