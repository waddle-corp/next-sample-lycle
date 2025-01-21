'use client';

import { useCart } from '@/components/CartContext';
import Link from 'next/link';

export default function CartPage() {
    const { cartItems, removeFromCart } = useCart();

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>장바구니</h1>
            {cartItems.length === 0 ? (
                <p>장바구니에 상품이 없습니다.</p>
            ) : (
                <div className='space-y-4'>
                    {cartItems.map((item) => (
                        <div key={item.id} className='flex items-center justify-between border-b pb-2'>
                            <div>
                                <h2 className='font-semibold'>{item.name}</h2>
                                <p>{item.price.toLocaleString()}원 × {item.quantity}</p>
                            </div>
                            <button 
                                onClick={() => removeFromCart(item.id)} 
                                className='bg-red-500'
                            >
                                제거
                            </button>
                        </div>
                    ))}
                    <div className='text-right font-bold'>
                        총 금액: {totalPrice.toLocaleString()}원
                    </div>
                    <Link href='/checkout' className='mt-4 bg-green-500 text-white px-4 py-2 rounded'>
                        결제하기
                    </Link>
                </div>
            )}
        </div>
    );
}