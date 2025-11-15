import React from 'react'

export default async function Doc({ params, }: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <h1>Docs Home page</h1>
    </div>
  )
}
