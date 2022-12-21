import React from 'react';

const UiInput = (props) => {
    return (
        <div className='p-6 item-center'>
             <input type="text" id="&quot;form-subscribe-Search" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-12 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder={props.placeholder}/>
        </div>
    );
};

export default UiInput;