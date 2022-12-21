import React from 'react';
import MainLayout from "../../../Layout/MainLayout"
import ManageTopbar from './ManageTopbar';
import PaymentOverview from './PaymentOverview';
import Payments from './PaymentsMethod';
import Transictions from './Transictions';

const Manages = () => {
    return (
        <MainLayout>
            <ManageTopbar />
            <Payments />
            <PaymentOverview />
            <Transictions />
        </MainLayout>
    );
};

export default Manages;