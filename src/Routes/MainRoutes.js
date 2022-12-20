import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Admin/Home/Home';
import AddProduct from '../Pages/Admin/Products/AddProduct';

const MainRoutes = () => {
    return (
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<AddProduct/>}>
                </Route>
            </Routes>
    );
};

export default MainRoutes;