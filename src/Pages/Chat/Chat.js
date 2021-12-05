import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from "socket.io-client";
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const location = useLocation();
    const endPoint = 'localhost:5000';
    const send = <FontAwesomeIcon icon={faPaperPlane} />

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(endPoint);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {

        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [endPoint, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });
    }, []);

    const sendMessage = e => {
        e.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        } 
    }

    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="chatInnerContainer">
                <div className="header">
                    <div>
                        <h1 className="subTitle">{room}</h1>
                        <span className="activeIcon"></span>
                    </div>
                    <button className="leaveButton">Leave</button>
                </div>
                <div className="chatUnderline"></div>
                <div className="chatDisplay">
                    <h2>Chat</h2>
                </div>
                <div className="chatUnderline"></div>
                <div className="chatBox">
                    <input
                        type="text"
                        placeholder="Type Here..."
                        className="chatInputField"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' ? sendMessage(e): null}
                    />
                    <button type="submit" className="chatButton">{send}</button>
                </div>
            </div>
        </div>
    );
};

export default Chat;