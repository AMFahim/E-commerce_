import React from 'react';
import Navbar from '../Components/shared/Navbar';

const MainLayout = ({children}) => {
    return (
        <div>
            {children}
            <Navbar/>
        </div>
    );
};

export default MainLayout;