import React, { useContext } from 'react'
import { UserContext } from '../global/Context'
import { Navigate, Outlet, useLocation } from 'react-router'

const Private = () => {
    const { user } = useContext(UserContext);
    const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login"  replace state={{ from: location}}/>
  );
};

export default Private