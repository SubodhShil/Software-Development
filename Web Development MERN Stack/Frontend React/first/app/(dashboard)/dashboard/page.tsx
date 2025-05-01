import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-5'>Welcome to the Dashboard</h1>
            <h2>Go to the <Link href='./dashboard/users' className='underline text-blue-300'>Users</Link> page</h2>
        </div>
    )
}

export default Page; 
