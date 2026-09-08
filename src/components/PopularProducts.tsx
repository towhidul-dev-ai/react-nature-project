import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IpopularProduct } from "../types";
import { Bounce, toast } from "react-toastify";
import PopularProductCard from "./PopularProductCard";

interface IPopularProductsProps {
    usersPromise: Promise<IpopularProduct[]>;
    cart: IpopularProduct[];
    setCart: Dispatch<SetStateAction<IpopularProduct[]>>;
}


const PopularProducts = ({ usersPromise,
    cart,
    setCart,
}: IPopularProductsProps) => {


    const data = use(usersPromise);



    return (
        <div className='my-[80px] max-w-7xl mx-auto py-4 px-4'>
            <h2 className='text-3xl font-bold  mb-12 mt-8 text-[#179800]'>Popular Products</h2>

            <div className='grid grid-cols-12 gap-4'>
                {/* 30% */}
                <div className='col-span-4 rounded-md shadow-2xl p-4 
                bg-gradient-to-r from-[#179800] to-[#6d7b6a]'>
                    <h2 className='font-bold text-2xl'>30% discount</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsum.
                    </p>
                    <button className='bg-white text-[#179800] font-bold py-2
                    px-4 rounded-md hover: bg-gray-500'>Buy Now</button>

                </div>

                {/* 70% */}

                <div className='col-span-8 '>
                    {/* card1, card2, card3 */}

                    <div className="grid grid-cols-3 gap-4">
                        {
                            data.map((product) => {
                                console.log(product, "product")
                                return (
                                    <PopularProductCard key={product.title} product={product}
                                        cart={cart} setCart={setCart} />
                                );
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopularProducts; 