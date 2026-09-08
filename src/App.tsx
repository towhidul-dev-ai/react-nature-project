import { Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Service from './components/Service';
import PopularProducts from './components/PopularProducts';
import type { IpopularProduct } from './types';
import Cart from './components/Cart';

const usersFetch = async (): Promise<IpopularProduct[]> => {
    const response = await fetch("/public/popular-products.json");
    const data = await response.json();
    return data;
}


const App = () => {
    const usersPromise = usersFetch();
    const [cart, setCart] = useState<IpopularProduct[]>([]);
    return (
        <>
            <Navbar cart={cart} setCart={setCart} />
            <Banner />
            <Service />
            <Cart cart={cart}></Cart>
            <Suspense fallback={<div>Loading popular products...</div>}>
                <PopularProducts
                    usersPromise={usersPromise}
                    cart={cart}
                    setCart={setCart} />
            </Suspense>
            <h2>Banner Section</h2>
            <h2>Services section</h2>
            <h2>Footer</h2>
        </>
    );
};

export default App; 