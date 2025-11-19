"use client";

import React from 'react';
import { usePathname } from 'next/navigation';


export default function notFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];

    return (
        <div>
            <h1 className='text-center text-5xl'>
                <strong>
                    <i>
                        The review you're looking for is not found
                    </i>
                </strong>
            </h1>
            <h2 className='text-center mt-5'>
                Review {reviewId} is not found product {productId} 
            </h2>
        </div> 
    )
}
