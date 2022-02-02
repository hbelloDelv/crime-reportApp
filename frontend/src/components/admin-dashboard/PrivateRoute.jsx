import React from 'react';
import { Route } from 'react-router-dom';
import AdminHeader from './admin-header/Admin.header';
import SearchBar from './search-bar/SearchBar';
import Footer from  '../footer/Footer';
import Sidebar from './sidebar/Sidebar';

export default function PrivateRoute( { children, ...props} ) {
    return (
        <div>
        <AdminHeader />
        <SearchBar />
            <div style={{display: 'flex'}}>
                <Sidebar style={{flex: '1 auto'}}/>
                <Route {...props}>{children}</Route>
            </div>
        {/* <Footer /> */}
        </div>
    )
}
