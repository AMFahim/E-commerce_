import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { OrderData } from '../../../Assets/db/Localdb';
import { Link } from 'react-router-dom';
import UiToggleBtn from '../../../Components/ui/UiToggleBtn';
import { BsThreeDotsVertical } from 'react-icons/bs';

const OrderPreviews = () => {
    const [product, setProduct] = useState([])

    const allItem = () => {
        setProduct([])
    }


    const filterItem = (categoryItem) => {
        const updateItems = OrderData.filter((curItem) => {
            return curItem.status === categoryItem
        })
        setProduct(updateItems)
    }
    return (
        <div>
            <div className='flex justify-between py-4'>
                <h3 className='text-gray-500 text-lg'>Active Orders</h3>
                <Link to="/orders" className='flex gap-2 text-gray-500'>View all <AiOutlineRight className='m-1' /></Link>
            </div>
            <div className='flex justify-between pt-4 gap-2'>
                <button type="button" className="py-2 px-2 bg-white border-2 text-gray-600 hover:bg-primary focus:ring-primary focus:bg-primary text-white focus:ring-offset-priamry-200 focus:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full" onClick={allItem}>
                    All
                </button>
                <button type="button" className="py-2 px-2 bg-white border-2 text-gray-600 hover:bg-primary focus:ring-primary focus:bg-primary text-white focus:ring-offset-priamry-200 focus:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full" onClick={() => filterItem('pending')}>
                    Pending
                </button>
                <button type="button" className="py-2 px-2 bg-white border-2 text-gray-600 hover:bg-primary focus:ring-primary focus:bg-primary text-white focus:ring-offset-priamry-200 focus:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full" onClick={() => filterItem('accepted')}>
                    Accepted
                </button>
                <button type="button" className="py-2 px-2 bg-white border-2 text-gray-600 hover:bg-primary focus:ring-primary focus:bg-primary text-white focus:ring-offset-priamry-200 focus:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full" onClick={() => filterItem('shipped')}>
                    Shipped
                </button>
            </div>

            <div>
                {
                    product.length > 0 ?
                        product.map(item => (
                            <div key={item.id}>
                                <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg my-4">
                                    <div className="w-1/3 bg-cover bg-landscape">
                                        <img src={item.image}></img>
                                    </div>
                                    <div className="w-2/3 p-4">
                                        <div className='flex justify-between'>
                                            <h1 className="text-2xl font-bold text-gray-900">
                                                {item.name}
                                            </h1>
                                            {
                                                item.status === "pending" ?
                                                    <p className='text-red-800 font-bold'>{item.status}</p> :
                                                    <p className='text-green-400 font-bold'>{item.status}</p>
                                            }
                                        </div>
                                        <div className="flex justify-between mt-3 item-center">
                                            <h1 className="text-xl font-bold text-gray-700">
                                                ${item.price}
                                            </h1>
                                            <UiToggleBtn />
                                        </div>
                                        <p className='text-green-400'>{item.stock}</p>
                                    </div>
                                </div>
                            </div>
                        )) :
                        OrderData.map(item => (
                            <div key={item.id}>
                                <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg my-4">
                                    <div className="w-1/3 bg-cover bg-landscape">
                                        <img src={item.image}></img>
                                    </div>
                                    <div className="w-2/3 p-4">
                                        <div className='flex justify-between'>
                                            <h1 className="text-2xl font-bold text-gray-900">
                                                {item.name}
                                            </h1>
                                            {
                                                item.status === "pending" ?
                                                    <p className='text-red-800 font-bold'>{item.status}</p> :
                                                    <p className='text-green-400 font-bold'>{item.status}</p>
                                            }
                                        </div>
                                        <div className="flex justify-between mt-3 item-center">
                                            <h1 className="text-xl font-bold text-gray-700">
                                                ${item.price}
                                            </h1>
                                            <UiToggleBtn />
                                        </div>
                                        <p className='text-green-400'>{item.stock}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>

        </div>
    );
};

export default OrderPreviews;