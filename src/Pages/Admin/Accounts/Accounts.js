import React from 'react';
import MainLayout from '../../../Layout/MainLayout';
import Customers from './Customers';
import CustomerTopbar from './CustomerTopbar';

const Accounts = () => {
    return (
        <MainLayout>
            <CustomerTopbar />
            <Customers />
        </MainLayout>
    );
};

export default Accounts;