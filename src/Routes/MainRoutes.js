import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Admin/Home/Home';
import Orders from '../Pages/Admin/Orders/Orders';
import AddProduct from '../Pages/Admin/Products/AddProduct';

const MainRoutes = () => {
    return (
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<AddProduct/>}>
                </Route>
                <Route path='/orders' element={<Orders/>}></Route>
            </Routes>
    );
};

export default MainRoutes;