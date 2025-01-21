import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-blue-600 text-white'>
        <div>
            <Link href='/'>
                <h1 className='text-xl font-bold'>Shop Sample</h1>
            </Link>
            <nav>
                <Link href='/cart' className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 mr-1'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l2 9'
                      />
                    </svg>
                    장바구니
                </Link>
            </nav>
        </div>
    </header>
  );
}

