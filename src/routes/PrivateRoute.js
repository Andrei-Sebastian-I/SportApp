import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Paths } from '../pages/Paths';

export const PrivateRoute = ({role="admin"}) => {
    const isLogged = useSelector(state => state.isLogged);

    return isLogged ? <Outlet /> : <Navigate to={Paths.login} />;
}