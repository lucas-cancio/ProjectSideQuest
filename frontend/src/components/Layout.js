import React from 'react';
import NavBar from './NavBar';

import '../assets/styles/customStyles.css';


function Layout( {children, isViewHeight100=false} ) {
    
    return (
        // <div className="container-fluid m-0 p-0 bg-dark text-light vh-100">
        <div className={`container-fluid m-0 p-0 bg-dark text-light ${isViewHeight100==true ? 'vh-100' : ''}`}>
            <NavBar />
            {children}
            {/* <div className="d-flex flex-column col-12 align-items-center justify-content-center flex-grow-1">
            </div> */}
        </div>
    );
};

export default Layout;