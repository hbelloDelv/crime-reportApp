import React from 'react';
import { Route } from 'react-router-dom';
import TopNavbar from '../topNavbar/TopNavbar';
import Footer from '../footer/Footer';

function PublicRoute( { children, ...props} ) {
    return (
        <>
        <TopNavbar />
        <Route {...props}>{children}</Route>
        <Footer />
        </>
    )
}

export default PublicRoute
