import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const api = import.meta.env.VITE_API_URL;

let stompClient = null;

export const getStompClient = () => {
    if (!stompClient) {
        stompClient = new Client({
            webSocketFactory: () => new SockJS(`${api}/ws`),
            reconnectDelay: 5000
        });
        stompClient.activate();
    }
    return stompClient;
};
