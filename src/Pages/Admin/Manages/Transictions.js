import React, { useState } from 'react';
import { PaymentTransictions } from '../../../Assets/db/Localdb';

const Transictions = () => {
    const [payment, setPayment] = useState([])

    const allItem = () => {
        setPayment([])
    }


    const filterItem = (paymentItem) => {
        const updatePayments = PaymentTransictions.filter((currentPayment) => {
            return currentPayment.payment === paymentItem
        })
        setPayment(updatePayments)
    }
    return (
        <div>
            <h3 className='text-lg font-bold p-2'>Transictions</h3>
            <div>
                <div className='flex justify-between pt-4 gap-2'>
                    <button type="button" className="py-2 px-2 bg-white border-2 text-gray-600 hover:bg-primary focus:ring-primary focus:bg-primary text-white focus:ring-offset-priamry-200 focus:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full" onClick={allItem}>
                        All ({PaymentTransictions.length})
                    </button>
                    <button type="button" className="py-2 px-2 bg-white border-2 text-gray-600 hover:bg-primary focus:ring-primary focus:bg-primary text-white focus:ring-offset-priamry-200 focus:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full" onClick={() => filterItem('On-Hold')}>
                        On Hold
                    </button>
                    <button type="button" className="py-2 px-2 bg-white border-2 text-gray-600 hover:bg-primary focus:ring-primary focus:bg-primary text-white focus:ring-offset-priamry-200 focus:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full" onClick={() => filterItem('Recived')}>
                        Payments
                    </button>
                    <button type="button" className="py-2 px-2 bg-white border-2 text-gray-600 hover:bg-primary focus:ring-primary focus:bg-primary text-white focus:ring-offset-priamry-200 focus:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full" onClick={() => filterItem('Refund')}>
                        Refunds
                    </button>
                </div>
                <div>
                    {
                        payment.length > 0 ?
                            payment.map(pay => (
                                <div key={pay.orderId} className=" rounded-2xl bg-white dark:bg-gray-800 p-4">
                                    <div className=" border-b-2 flex-row gap-4 flex justify-between items-center">
                                        <div className="flex-shrink-0">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src={pay.productImg} className="mx-auto object-cover rounded h-16 w-16 " />
                                            </a>
                                        </div>
                                        <div className=" flex flex-col">
                                            <span className="text-lg font-medium text-gray-600 dark:text-white">
                                                Order #{pay.orderId}
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                {pay.orderDate}
                                            </span>
                                        </div>
                                        <div>
                                            <span className='text-xl font-bold text-greencard'>${pay.price}</span>
                                            <p>{pay.payment}</p>
                                        </div>
                                    </div>
                                </div>
                            )) :
                            PaymentTransictions.map(payTrans => (
                                <div key={payTrans.orderId} className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4">
                                    <div className="flex-row gap-4 flex justify-between items-center">
                                        <div className="flex-shrink-0">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src={payTrans.productImg} className="mx-auto object-cover rounded h-16 w-16 " />
                                            </a>
                                        </div>
                                        <div className=" flex flex-col">
                                            <span className="text-lg font-medium text-gray-600 dark:text-white">
                                                Order #{payTrans.orderId}
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                {payTrans.orderDate}
                                            </span>
                                        </div>
                                        <div>
                                            <span className='text-xl font-bold text-greencard'>${payTrans.price}</span>
                                            <p>{payTrans.payment}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }



                </div>
            </div>
        </div>
    );
};

export default Transictions;