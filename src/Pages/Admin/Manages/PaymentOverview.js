import React from 'react';
import { AiOutlineRight } from 'react-icons/ai'


const PaymentOverview = () => {
    return (
        <div>
            <div className='flex justify-between p-2 mt-4'>
                <span className='font-bold text-gray-600'>Payments Overview</span>
                <span className='flex text-gray-500'>Lifetime <AiOutlineRight className='m-1' /></span>
            </div>

            <div className='grid grid-cols-2 gap-2 p-3'>
                <div className='border-[1px] rounded-md p-4 shadow bg-goldenrod text-white'>
                    <p className='font-bold text-lg'>Amount On Hold</p>
                    <p className='text-xl'>$701</p>
                </div>
                <div className='border-[1px] rounded-md p-4 shadow bg-greencard text-white'>
                    <p className='font-bold text-lg'>Amount Recived</p>
                    <p className='text-xl'>$2,319</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentOverview;