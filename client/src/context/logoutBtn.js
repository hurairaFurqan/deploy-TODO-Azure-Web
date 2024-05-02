import React from 'react';

const LogoutButton = () => {
    const handleLogout = () => {
        // Remove token from local storage
        localStorage.removeItem('token');

        // Redirect or update UI as needed
        // Example: redirect to login page
        window.location.href = '/';
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
