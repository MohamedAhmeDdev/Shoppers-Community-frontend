import React, { useState, useEffect } from 'react';

function CategoryProduct({ productList }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    
        return () => clearTimeout(timeout);
    }, []);
 
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">All Products</h2>
            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                </div>
            ) : (
                <div className="col-span-12 md:col-span-9">
                    {Object.entries(productList).map(([shopName, { products }]) => (
                        <div key={shopName} className="w-full">
                            <h2 className="text-lg font-bold text-gray-900 pl-10 mb-4">{shopName}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
                                {products.map(product => (
                                    <div key={product.id} className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border shadow-md bg-white">
                                        <div className="relative flex h-60 overflow-hidden">
                                            <img className="object-cover w-full h-full" src={product.product_image} alt={`${product.name}`} />
                                        </div>
                                        <div className="mt-4 px-5 pb-5">
                                            <h5 className="text-md tracking-tight text-slate-900">{product.name}</h5>
                                            <div className="mt-2 mb-5 flex items-center justify-between">
                                                <p>
                                                    <span className="text-md text-slate-900">${product.price.toFixed(2)}</span>
                                                </p>
                                                <div className="flex items-center">
                                                    {Array.from({ length: Math.round(product.ratings) }).map((_, i) => (
                                                        <svg key={i} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                        </svg>
                                                    ))}
                                                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.ratings.toFixed(1)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CategoryProduct;
