import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
    const navigate = useNavigate();
    const [loggedOut, setLoggedOut] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setLoggedOut(true);
    };

    if (loggedOut) {
        navigate('/');
        return null;
    }

    return (
        <button onClick={handleLogout} className='nav-link text-white'>
            <i className='fas fa-sign-out'></i>
            <span className='ms-2'>Logout</span>
        </button>
    );
}

export default LogoutButton;