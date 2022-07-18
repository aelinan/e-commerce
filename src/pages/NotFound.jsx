import React from 'react';
import '../styles/NotFound.scss';
import ghost from '@icons/ghost.png';

const NotFound = () => {
    return (
        <div className='container'>
            <h1>Error 404</h1>
            <img src={ghost} alt="Ghost" />
        </div>

    );
}

export default NotFound;