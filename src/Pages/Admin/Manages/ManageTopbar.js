import React from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CiCircleInfo } from "react-icons/ci";

const ManageTopbar = () => {
    return (
        <div className='flex justify-between p-4 bg-primary text-white font-bold py-6'>
            <span className='text-xl'><AiOutlineArrowLeft /></span>
            <p>Payments</p>
            <span className='text-xl font-bold'><CiCircleInfo /></span>
        </div>
    );
};

export default ManageTopbar;