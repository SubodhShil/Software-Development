'use client';

import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>Dashboard users</h1>
            <ul className='mt-10'>
                <li><Link href='/dashboard/users/1'>User 1</Link></li>
                <li><Link href='/dashboard/users/2'>User 2</Link></li>
                <li><Link href='/dashboard/users/3'>User 3</Link></li>
                <li><Link href='/dashboard/users/4'>User 4</Link></li>
                <li><Link href='/dashboard/users/5'>User 5</Link></li>
            </ul>
        </div>
    )
}

export default Page; 
