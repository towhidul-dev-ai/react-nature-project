import React from 'react';
import type { IpopularProduct } from '../types';
import { Bounce, toast } from 'react-toastify';

interface IpopularProductCardProps {
    product: IpopularProduct;
    cart: IpopularProduct[];
    setCart: React.Dispatch<React.SetStateAction<IpopularProduct[]>>

}


const PopularProductCard = ({ product, cart, setCart }: IpopularProductCardProps) => {
    const handleAddToCart = (product: IpopularProduct) => {
        setCart([...cart, product])
        // toast.success(`${product.title} added to cart!`);
        toast.success((`${product.title} added to cart!`), {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };
    return (
        <div key={product.title} className="bg-white
                             p-4 rounded-md shadow-md">
            <img src={product.productImg} alt={product.title}
                className="w-full h-48 object-cover rounded-md" />
            <h3 className="font-bold text-lg">{product.title}</h3>
            <p className="text-gray-500">${product.price.toFixed(2)}</p>
            <p className="text-yellow-500">Rating: {product.rating}</p>
            <button onClick={() => handleAddToCart(product)}
                className="bg-[#179800] text-white font-bold
                                        py-2 px-4 rounded-md hover:bg-[#145c00]">Add to Cart</button>
        </div>
    );
};

export default PopularProductCard;