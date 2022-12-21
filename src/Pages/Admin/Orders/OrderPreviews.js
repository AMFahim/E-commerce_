import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { OrderData } from '../../../Assets/db/Localdb';

const OrderPreviews = () => {
    const [order, setOrder] = useState([])

    const allItem = () => {
        setOrder([])
    }


    const filterItem = (categoryItem) => {
        const updateItems = OrderData.filter((curItem) => {
            return curItem.orderCreated === categoryItem
        })
        setOrder(updateItems)
    }
    return (
        <div>
            <div>
                <div className='flex justify-between pt-4 gap-2'>
                    <button type="button" className="py-2 px-2 bg-white border-2 text-gray-600 hover:bg-primary focus:ring-primary focus:bg-primary text-white focus:ring-offset-priamry-200 focus:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full" onClick={allItem}>
                        All ({OrderData.length})
                    </button>
                    <button type="button" className="py-2 px-2 bg-white border-2 text-gray-600 hover:bg-primary focus:ring-primary focus:bg-primary text-white focus:ring-offset-priamry-200 focus:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full" onClick={() => filterItem('Today')}>
                        Today 
                    </button>
                    <button type="button" className="py-2 px-2 bg-white border-2 text-gray-600 hover:bg-primary focus:ring-primary focus:bg-primary text-white focus:ring-offset-priamry-200 focus:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full" onClick={() => filterItem('Yesterday')}>
                        Yesterday
                    </button>
                </div>
            </div>
            {
                order.length > 0 ?
                    order.map(odr => (
                        <div key={odr.id} className='bg-white shadow-lg py-3 mt-4 m-3 rounded-lg'>
                            <div className="flex max-w-md overflow-hidden bg-white rounded-lg my-4 border-b-2">
                                <div className="w-1/3 bg-cover bg-landscape">
                                    <img src={odr.image}></img>
                                </div>
                                <div className="w-2/3 p-4">
                                    <div className='flex justify-between'>
                                        <h1 className="text-lg font-bold text-gray-900">
                                            {odr.name}
                                        </h1>
                                        <span>
                                            {odr.orderCreated}
                                        </span>
                                    </div>
                                    <div className="flex justify-between item-center">
                                        <h1 className="text-lg font-bold text-gray-700">
                                            ${odr.price}
                                        </h1>
                                        <span className="px-4 py-1  text-base rounded text-red-600 border border-red-600 bg-red-200 ">
                                            {odr.payment}
                                        </span>
                                    </div>
                                    <p className='text-green-400'>Order: #{odr.orderId}</p>
                                </div>
                            </div>
                            <div className='flex justify-between px-3'>
                                <p className='font-bold text-lg'>{odr.status}</p>
                                <Link to="/details">
                                    <button className='border-2 px-3 py-1 rounded flex'>Details <AiOutlineRight className='m-1' /></button>
                                </Link>
                            </div>
                        </div>
                    )) :
                    OrderData.map(order => (
                        <div key={order.id} className='bg-white shadow-lg py-3 mt-4 m-3 rounded-lg'>
                            <div className="flex max-w-md overflow-hidden bg-white rounded-lg my-4 border-b-2">
                                <div className="w-1/3 bg-cover bg-landscape">
                                    <img src={order.image}></img>
                                </div>
                                <div className="w-2/3 p-4">
                                    <div className='flex justify-between'>
                                        <h1 className="text-lg font-bold text-gray-900">
                                            {order.name}
                                        </h1>
                                        <span>
                                            {order.orderCreated}
                                        </span>
                                    </div>
                                    <div className="flex justify-between item-center">
                                        <h1 className="text-lg font-bold text-gray-700">
                                            ${order.price}
                                        </h1>
                                        <span className="px-4 py-1  text-base rounded text-red-600 border border-red-600 bg-red-200 ">
                                            {order.payment}
                                        </span>
                                    </div>
                                    <p className='text-green-400'>Order: #{order.orderId}</p>
                                </div>
                            </div>
                            <div className='flex justify-between px-3'>
                                <p className='font-bold text-lg'>{order.status}</p>
                                <Link to="/details">
                                    <button className='border-2 px-3 py-1 rounded flex'>Details <AiOutlineRight className='m-1' /></button>
                                </Link>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
};

export default OrderPreviews;