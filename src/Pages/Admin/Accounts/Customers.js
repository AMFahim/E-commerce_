import React from 'react';
import { CustomerList } from '../../../Assets/db/Localdb';

const Customers = () => {
    return (
        <div>
            {
                CustomerList.map(customer => (
                    <div key={customer.id} className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4">
                        <div className="flex-row gap-4 flex items-center border-b-2">
                            <div className="flex-shrink-0">
                                <a href="#" className="relative block">
                                    <img alt="profil" src={customer.profilePic} className="mx-auto object-cover rounded-lg h-16 w-16 " />
                                </a>
                            </div>
                            <div className=" flex flex-col">
                                <span className="text-lg font-medium text-gray-600 dark:text-white">
                                    {customer.name}
                                </span>
                                <span className="text-base text-gray-400">
                                    {customer.orders.length} orders
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Customers;