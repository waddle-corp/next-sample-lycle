import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className='border rounded shadow p-4 flex flex-col'>
        <img src={product.image} alt={product.name} className='mb-4 h-48 object-cover' />
        <h2 className='text-lg font-semibold mb-2'>{product.name}</h2>
        <p className='text-gray-700 mb-4'>{product.description}</p>
        <p className='text-lg font-bold mb-2'>${product.price}</p>
        <div className='mt-auto'>
            <span className='text-blue-600 font-bold'>{product.price.toLocaleString()}원</span>
            <Link href={`/products/${product.id}`} className='block text-center bg-blue-600 text-white py-2 rounded'>
                상세보기
            </Link>
        </div>
    </div>
  );
}
