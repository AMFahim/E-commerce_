import React, { useEffect, useState } from 'react';
import MainLayout from '../../../Layout/MainLayout';
import UiToggleBtn from '../../../Components/ui/UiToggleBtn';
import { BsThreeDotsVertical } from 'react-icons/bs';
import UiButton from '../../../Components/ui/UiButton';
import axios from 'axios';


const AddProduct = () => {
    const [product, setProduct] = useState([])

    const getAllProducts = async() => {
        try {
            const res = await axios.get("https://e-commerce-admin-three.vercel.app/api/v1/products")
            setProduct(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllProducts()
    },[])
    return (
        <MainLayout>

            {/* Topbar */}
            <div className=' pt-10  px-12 bg-primary text-white font-bold text-xl'>
                <h1 className='text-center pb-8'>Catalouge</h1>
                <div className='flex justify-between'>
                    <h3 className='border-b-2'>Products</h3>
                    <h3>Categories</h3>
                </div>

            </div>

            {/* Products  */}

            {
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
                                    <BsThreeDotsVertical />
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

            {/* Add New Product Button  */}
            <div className='p-8 bottom-7 sticky '>
                <UiButton label="Add New Product"></UiButton>
            </div>

        </MainLayout>

    );
};

export default AddProduct;