import React from 'react';
import type { IpopularProduct } from '../types';

interface IcartProps {
    cart: IpopularProduct[];
}

const Cart = ({ cart }: IcartProps) => {
    return (
        <div className="max-w-7xl mx-auto py-4 px-4">
            <h2 className="text-2xl font-bold mb-4 text-[#179800]">
                Cart
            </h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-12 gap-4">
                    {cart.map((product) => {
                        return (
                            <div
                                key={product.title}
                                className="col-span-4 bg-white p-4 rounded-md shadow-2xl"
                            >
                                <img
                                    src={product.productImg}
                                    alt={product.title}
                                    className="w-full h-48 object-cover rounded-md"
                                />

                                <h3 className="font-bold text-lg">
                                    {product.title}
                                </h3>

                                <p className="text-gray-500">
                                    ${product.price.toFixed(2)}
                                </p>

                                <p className="text-yellow-500">
                                    Rating: {product.rating}
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
            {cart.length > 0 && (
                <div className='mt-4'>
                    <h3 className='font-bold text-lg'>Total: ${cart.reduce((total, product) => total + product.price, 0)
                        .toFixed(2)}
                    </h3>


                </div>
            )}
        </div>
    );
};

export default Cart;