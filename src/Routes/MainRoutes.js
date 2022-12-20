import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AddProduct from '../Pages/Admin/AddProduct';

const MainRoutes = () => {
    return (
            <Routes>
                <Route path='/' element={<AddProduct/>}>
                </Route>
            </Routes>
    );
};

export default MainRoutes;