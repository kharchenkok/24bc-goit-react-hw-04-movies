import React from 'react';
import Navigation from '../navigation/Navigation';

const Layout = ({children}) => {
    return (
        <>
            <Navigation/>
            {children}
        </>
    );
};

export default Layout;