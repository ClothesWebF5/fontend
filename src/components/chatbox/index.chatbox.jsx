import { useEffect, useRef, useState } from 'react';

const ChatRoom = ({ messages, profile, onSend }) => {
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = () => {
        if (newMessage.trim()) {
            onSend(newMessage.trim());
            setNewMessage('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const formatTime = (time) => {
        const date = new Date(time);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="flex flex-col h-[600px] w-full max-w-md mx-auto bg-white border rounded-lg shadow">
            {/* Chat message area */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
                {messages.map((msg, index) => {
                    const isOwnMessage = msg.senderId === profile.id;

                    return (
                        <div key={index} className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
                            <div
                                className={`max-w-xs rounded-lg p-3 shadow-md ${
                                    isOwnMessage
                                        ? 'bg-blue-500 text-white rounded-br-none'
                                        : 'bg-gray-200 text-gray-900 rounded-bl-none'
                                }`}
                            >
                                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                                <div className="text-xs mt-1 text-right opacity-70">
                                    {formatTime(msg.createAt)}
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="border-t p-3 flex items-center gap-2 bg-white">
                <textarea
                    className="flex-1 resize-none border rounded-lg p-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
                    rows={1}
                    placeholder="Nhập tin nhắn..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    onClick={handleSend}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Gửi
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;
