import React from 'react';
import { DropdownOption, OverviewCards } from '../../../Assets/db/Localdb';

const Overview = () => {
    return (
        <div>
            <div className='flex justify-between p-2'>
                <h3 className='text-lg'>Overview</h3>
                <select class="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="filter">
                    {
                        DropdownOption.map(option => (
                            <option key={option.id} value={option.name}>
                                {option.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            {/* Cards  */}
            <div className='grid grid-cols-2 gap-2 p-3'>
                {
                    OverviewCards.map(card => (
                        <div key={card.id} className='border-[1px] rounded-md p-4 shadow'>
                            <p className='text-gray-500 text-xl'>{card.category}</p>
                            <p className='text-2xl'>{card.value}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Overview;