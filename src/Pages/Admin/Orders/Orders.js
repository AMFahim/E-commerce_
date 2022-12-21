import React from 'react';
import MainLayout from '../../../Layout/MainLayout'
import OrderPreviews from './OrderPreviews';
import OrderTopbar from './OrderTopbar';

const Orders = () => {
    return (
        <MainLayout>
            <OrderTopbar/>
            <OrderPreviews/>
        </MainLayout>
    );
};

export default Orders;