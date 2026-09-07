

import React from 'react';
import ServiceImage from "../assets/service.png"
import FastImage from "../assets/delivery.png"
import HealthyImage from "../assets/products.png"

const Service = () => {
    return (
        <div className='my-[80px] max-w-7xl mx-auto py-4 px-4'>
            <h2 className='text-3xl font-bold  mb-12 mt-8 text-[#179800]'>Services</h2>
            <div className='grid grid-cols-3 gap-4  '>
                <div className='rounded-md shadow-2xl border-gray-500 p-4'>
                    <img src={ServiceImage} className='mx-auto' alt="" />
                    <h2 className='text-4xl font-bold text-center mb-2'>
                        Our <span className='text-[#179800]'>Services</span>
                    </h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt</p>
                </div>
                <div className='rounded-md shadow-2xl border-gray-500 p-4'>
                    <img src={FastImage} className='mx-auto' alt="" />
                    <h2 className='text-4xl font-bold text-center mb-2'>
                        Our <span className='text-[#179800]'>Services</span>
                    </h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt</p>
                </div>
                <div className='rounded-md shadow-2xl border-gray-500 p-4'>
                    <img src={HealthyImage} className='mx-auto' alt="" />
                    <h2 className='text-4xl font-bold text-center mb-2'>
                        Our <span className='text-[#179800]'>Services</span>
                    </h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt</p>
                </div>
            </div>
        </div>
    );
};

export default Service;