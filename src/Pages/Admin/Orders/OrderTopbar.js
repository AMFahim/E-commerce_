import React from 'react';
import UiInput from '../../../Components/ui/UiInput';
import { OrderData } from '../../../Assets/db/Localdb';



const OrderTopbar = () => {
    return (
        <div>
            <div className='bg-primary'>
                <h1 className='text-center text-white pt-4 font-bold'>All Orders ({OrderData.length})</h1>
                <UiInput placeholder="Search by order id, mobile number or name" />
            </div>

        </div>
    );
};

export default OrderTopbar;