import React from 'react';
import MainLayout from '../../../Layout/MainLayout';
import HomeTopbar from './HomeTopbar';
import OrderPreviews from './OrderPreviews';
import Overview from './Overview';
import ShareMore from './ShareMore';

const Home = () => {
    return (
        <MainLayout>
            <HomeTopbar/>
            <ShareMore />
            <Overview/>
            <OrderPreviews />
        </MainLayout>
    );
};

export default Home;