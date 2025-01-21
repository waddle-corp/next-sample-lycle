'use client';

import { useCart } from "@/components/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
    const { cartItems, updateCart } = useCart();
    const [success, setSuccess] = useState(false);

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleCheckout = () => {
        setSuccess(true);
        updateCart(cartItems, 0);
    }

    if (success) {
        return <div>
            <h1>결제가 완료되었습니다.</h1>
            <p>주문 번호: {Math.random().toString(36).substring(2, 15)}</p>
        </div>;
    }

    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>결제</h1>
            <div className='mb-4'>
                <h2 className='font-semibold'>주문 내역</h2>
                {cartItems.map((item) => (
                    <div key={item.id} className='flex justify-between'>
                        <span>{item.name} x {item.quantity}</span>
                        <span>{(item.price * item.quantity).toLocaleString()}원</span>
                    </div>
                ))}
                <div className='flex justify-between font-bold mt-2'>
                    <span>총 합계</span>
                    <span>{totalPrice.toLocaleString()}원</span>
                </div>
            </div>
            <button 
                onClick={handleCheckout}
                className='bg-green-500 text-white px-4 py-2 rounded'
            >
                결제하기
            </button>
        </div>
    );
}