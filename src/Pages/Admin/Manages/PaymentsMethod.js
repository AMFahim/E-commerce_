import React from 'react';
import {AiOutlineRight} from 'react-icons/ai'

const Payments = () => {
    return (
        <div>
            <div className='flex justify-between p-2 text-gray-500'>
                <span>Default Method</span>
                <span className='flex'>Both Options <AiOutlineRight className='m-1'/></span>
            </div>
            <div className='flex justify-between p-2 text-gray-500 border-b-[1px]'>
                <span>Payment Profile</span>
                <span className='flex'>Bank Account <AiOutlineRight className='m-1'/></span>
            </div>
        </div>
    );
};

export default Payments;