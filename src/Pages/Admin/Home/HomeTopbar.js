import React from 'react';
import { MdVerified } from 'react-icons/md'

const HomeTopbar = () => {
    return (
        <div className='flex justify-between p-4 pb-12 text-white bg-primary'>
            <div className='flex'>
                <h1>Mono Super Market </h1>
                <MdVerified className='m-1'/>
            </div>
            <div className="mb-3">
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input type="checkbox" name="toggle" id="Blue" className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" checked />
                    <label for="Blue" className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
                    </label>
                </div>
                <span className="font-medium text-white">
                    Online
                </span>
            </div>
        </div>
    );
};

export default HomeTopbar;