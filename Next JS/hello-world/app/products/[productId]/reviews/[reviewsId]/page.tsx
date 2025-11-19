import React from 'react'
import { notFound } from 'next/navigation';


export default async function ReviewPage({
    params,
}: {
    params: Promise<{ productId: string; reviewsId: string }>
}) {

    const { productId, reviewsId } = await params;
    if (parseInt(reviewsId) > 1000) {
        notFound();
    }

    return (
        <div>
            <h1>Review {reviewsId} for product {productId}</h1>
        </div>
    )
}
