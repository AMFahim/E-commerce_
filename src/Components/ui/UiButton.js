import React from 'react';

const UiButton = (props) => {
    return (
        <div>
            <button type="button" className="py-2 px-4 flex justify-center items-center  bg-goldenrod hover:bg-goldenrod focus:ring-goldenrod focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                {props.label}
            </button>

        </div>
    );
};

export default UiButton;