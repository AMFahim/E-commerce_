import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import UiInput from '../../../Components/ui/UiInput';

const CustomerTopbar = () => {
    return (
        <div className='bg-primary'>
            <div className='flex gap-32 text-white pt-6 px-2'>
                <span><AiOutlineArrowLeft /></span>
                <h3 className='text-lg font-bold'>My Customers</h3>
            </div>
            <UiInput placeholder="Search by customer names"/>
        </div>

    );
};

export default CustomerTopbar;