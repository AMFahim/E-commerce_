import React from 'react';
import UiButton from '../../../Components/ui/UiButton';
import { BsWhatsapp } from 'react-icons/bs';
import UiSocialButton from '../../../Components/ui/UiSocialButton';

const ShareMore = () => {
    return (
        <div className='mt-[-50px]'>
            <div className='m-4 p-3 border-2 rounded bg-white'>
            <h3 className='text-xl'>Share More & Earn More</h3>
            <p className='text-gray-500'>Use the toggle component to switch between a binary state of true or false </p>
            <div className='flex justify-between'>
                <p className='text-goldenrod font-bold p-3'>abdulMozidfahim</p>
                <UiSocialButton icon={<BsWhatsapp/>} label="WhatsApp"/>
            </div>
        </div>
        </div>
    );
};

export default ShareMore;