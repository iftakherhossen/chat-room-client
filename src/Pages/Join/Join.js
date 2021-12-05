import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    // for removing space and converting on lower case
    // const lName = name.replace(/\s+/g, '-').toLowerCase();
    // const lRoom = room.replace(/\s+/g, '-').toLowerCase();

    return (
        <div className="outerContainer">
            <div className="joinInnerContainer">
                <h1 className="title">Join</h1>
                <div className="joinUnderline"></div>
                <div className="formContainer">
                    <div>
                        <input
                            type="text"
                            placeholder="Name" className="joinInputField"
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Room" className="joinInputField"
                            onChange={e => setRoom(e.target.value)}
                            required
                        />
                    </div>
                    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button type="submit" className="joinButton">JOIN</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Join;