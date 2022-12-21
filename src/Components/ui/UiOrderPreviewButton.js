import React from 'react';

const UiOrderPreviewButton = (props) => {
    return (
        <div>

            <button type={props.type} className="py-2 px-4 bg-primary hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                {props.label} {props.data}
            </button>

        </div>
    );
};

export default UiOrderPreviewButton;