import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from '../context/logoutBtn';
// rsc 

const HomeForm = props => {
    const userInfo = useSelector((state) => state.authRequests.userInfo);
    return (
        <div>
            <button style={{ backgroundColor: 'white' }}>{userInfo.firstName}</button>
            <LogoutButton />
        </div>
    );
};


export default HomeForm;