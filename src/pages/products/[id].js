'use client';

import { products } from '@/data/products';
import { useCart } from '@/components/CartContext';
import { useRouter } from 'next/router';

export default function ProductDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const product = products.find((p) => p.id === parseInt(id));    
    const { addToCart } = useCart();

    if (!product) {
        return <p>제품을 찾을 수 없습니다.</p>;
    }

    const handleAddToCart = () => {
        addToCart(product);
        router.push('/cart');
    }

    return (
        <div className='flex flex-col md:flex-row' >
            <img src={product.image} alt={product.name} className='w-full md:w-1/2 h-64 object-cover mb-4 md:mb-0' />
            <div className='md:ml-6'>
                <h1 className='text-2xl font-bold mb-2'>{product.name}</h1>
                <p className='text-gray-700 mb-4'>{product.description}</p>
                <p className='text-xl text-blue-600 mb-4'>{product.price.toLocaleString()}원</p>
                <button 
                    onClick={handleAddToCart} 
                    className='bg-blue-500 text-white px-4 py-2 rounded'
                >
                    장바구니에 추가
                </button>
            </div>
        </div>
    );
}
