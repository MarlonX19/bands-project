import React from 'react';
import { FiArrowRightCircle } from "react-icons/fi";

import './styles.css';

function LogoutButton({ handleLogout }) {
    return (
        <>
            <button type='button' className='no-style-btn' onClick={() => handleLogout()}>
                <FiArrowRightCircle className='logout-icon' color='red' />
            </button>
        </>
    )
}

export default LogoutButton;