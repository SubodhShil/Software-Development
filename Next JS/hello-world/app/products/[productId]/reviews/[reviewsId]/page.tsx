import React from 'react'

export default async function ReviewPage({
    params,
}: {
    params: Promise<{ productId: string; reviewsId: string }>
}) {
    const { productId, reviewsId } = await params;
    return (
        <div>
            <h1>Review {reviewsId} for product {productId}</h1>
        </div>
    )
}
