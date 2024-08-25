import React, { useContext } from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
      try {
        setAuthUser({
          ...authUser,
          user: null,
        });
        localStorage.removeItem("UserInfo");
        toast.success("Logout successfully");
  
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } catch (error) {
        toast.error("Something went wrong");
        setTimeout(() => {}, 2000);
      }
    };

    return (
        <div className='bg-red-500 cursor-pointer px-3 py-2 text-white rounded-md hover:bg-red-700 duration-300' onClick={handleLogout}>
            Logout
        </div>
    );
}

export default Logout;
