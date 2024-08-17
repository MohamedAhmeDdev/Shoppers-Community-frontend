import React, { useState, useEffect } from 'react';
import { UseWishListContext } from "../hook/WishListCartContext";
import { UseAuthContext } from "../hook/UseAuthContext";

function QueryProductList({ results }) {
    const [isLoading, setIsLoading] = useState(true);
    const { wishListItems, addToWishList, removeFromWishList } = UseWishListContext();
    const { user } = UseAuthContext();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                </div>
            ) : (
                <div className="col-span-12 md:col-span-9">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {results.length > 0 ? (
                            results.map((item, index) => {
                                const isAdded = wishListItems.find((wishItem) => wishItem.id === item.id);
                                return (
                                    <div key={index} className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border shadow-md bg-white">
                                        <div className="relative flex h-60 overflow-hidden">
                                            <img className="object-cover w-full h-full" src={item.product_image} alt={item.name} />
                                        </div>
                                        <div className="mt-4 px-5 pb-5">
                                            <h5 className="text-md tracking-tight text-slate-900">
                                                <span className='font-bold'>Shop name:</span> {item.shop.name}
                                            </h5>
                                            <h5 className="text-md tracking-tight text-slate-900">{item.name}</h5>
                                            <div className="mt-2 mb-5 flex items-center justify-between">
                                                <p>
                                                    <span className="text-md text-slate-900">${item.price.toFixed(2)}</span>
                                                </p>
                                                <div className="flex items-center">
                                                    {Array.from({ length: Math.round(item.ratings) }).map((_, i) => (
                                                        <svg key={i} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                        </svg>
                                                    ))}
                                                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{item.ratings.toFixed(1)}</span>
                                                </div>
                                            </div>

                                            {user && (
                                                <div className="flex justify-center items-center">
                                                    {isAdded ? (
                                                        <button
                                                            onClick={() => removeFromWishList(item.id)}
                                                            className="cursor-pointer w-full flex items-center justify-center rounded-md bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="currentColor"
                                                                className="size-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                                                />
                                                            </svg>
                                                            {" "} Remove from Wishlist
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() => addToWishList(item)}
                                                            className="cursor-pointer w-full flex items-center justify-center rounded-md bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="currentColor"
                                                                className="size-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                                                />
                                                            </svg>
                                                            {" "} Add to Wishlist
                                                        </button>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p className="text-gray-600 text-center">Product Not found</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default QueryProductList;
