import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="wrapper">
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

            <Footer />
        </div>
    );
};

export default Join;