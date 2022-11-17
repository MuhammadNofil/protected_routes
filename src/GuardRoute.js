import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const  PrivateRoute = () => {
    let auth= null; // determine if authorized, from context or however you're doing it
    console.log(auth)
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/" />;
}
export default PrivateRoute