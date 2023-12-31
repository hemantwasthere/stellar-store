"use client";

import { useEffect, useState } from 'react';

import Button from '@/components/ui/button';
import Container from '@/components/ui/container';
import useCart from '@/hooks/use-cart';

import CartItem from './components/cart-item';
import Summary from './components/summary';

export const revalidate = 0;

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    useEffect(() => setIsMounted(true), []);

    if (!isMounted) return null;

    const onRemoveAll = () => cart.removeAll();

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <div className="lg:flex items-center justify-between lg:w-[60%]">
                        <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
                        {cart.items.length > 1 && <Button onClick={onRemoveAll} className="mt-5 lg:mt-0 bg-gray-300 text-black text-sm py-2 px-3">Remove all items</Button>}
                    </div>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
                            <ul>
                                {cart.items.map((item) => (
                                    <CartItem key={item.id} data={item} />
                                ))}
                            </ul>
                        </div>
                        <Summary />
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default CartPage;