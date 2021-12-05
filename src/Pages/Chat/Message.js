import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {
    let isSendByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSendByCurrentUser = true;
    }

    return (
        isSendByCurrentUser ? (
            <div className="messageContainer justifyEnd">
                <p className="userName pr-10">{trimmedName}</p>
                <div className="messageBox backgroundDark">
                    <p className="messageText">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        ) : (
            <div className="messageContainer justifyStart">
                <div className="messageBox  backgroundLight">
                        <p className="messageText">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="userName pl-10">{user}</p>
            </div>
        )
    );
};

export default Message;