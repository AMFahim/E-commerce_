import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../../Assets/db/Localdb';

const Navbar = () => {
    return (
        // < !--component -- >
        <div className="w-full h-screen">
            <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
                <div id="tabs" className="flex justify-between">
                    {
                        Navigation.map(item => (
                            <Link to={item.href} key={item.name}  className="w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
                                <div className='inline-block mb-1'>
                                    {item.icon}
                                </div>
                                <span className="tab tab-home block text-xs">{item.name}</span>
                            </Link>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default Navbar;