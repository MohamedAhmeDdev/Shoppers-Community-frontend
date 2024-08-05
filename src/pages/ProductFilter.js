import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryProduct from '../Component/CategoryProduct';
import CategoryProductFilter from '../Component/CategoryProductFilter';
import {SERVER_URL} from '../constant'

function ProductFilter() {
    const [error, setError] = useState('');
    const [productList, setProductList] = useState([]);
    const [filterProductList, setFilterProductList] = useState([]);
    const [product, setProduct] = useState([]);
    const [showFiltered, setShowFiltered] = useState(false);
    const { category_id } = useParams();
    const [filters, setFilters] = useState({
        product: '',
        priceMin: '',
        priceMax: '',
        rating: '',
        paymentMethod: ''
    });
    const [tempFilters, setTempFilters] = useState({
        product: '',
        priceMin: '',
        priceMax: '',
        rating: '',
        paymentMethod: ''
    });


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${SERVER_URL}/categories/${category_id}`);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch data.');
                }
                const data = await response.json();
                setProduct(data.product_names);
                setProductList(data.products_by_shop);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchCategories();
    }, [category_id]);


    useEffect(() => {
        const filterApi = async () => {
            try {
                const queryString = new URLSearchParams({
                    ...filters,
                    category_id
                }).toString();
                const response = await fetch(`${SERVER_URL}/filtered-products?${queryString}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setFilterProductList(data.products);
                
            } catch (error) {
                setError('No products found');
            }
        };

        if (Object.values(filters).some(value => value !== '')) {
            filterApi();
        }
    }, [filters, category_id]);
    

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setTempFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };


    const handleApplyFilters = () => {
        setFilters(tempFilters);
        setShowFiltered(true);
    };

    const handleReset = () => {
        setFilters({
            product: '',
            priceMin: '',
            priceMax: '',
            rating: '',
            paymentMethod: ''
        });
        setTempFilters({
            product: '',
            priceMin: '',
            priceMax: '',
            rating: '',
            paymentMethod: ''
        });
        setShowFiltered(false);
    };

    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">              
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
                        <div className="mt-7 box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
                            <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                                <p className="font-medium text-base leading-7 text-black">Filter</p>
                                <p 
                                    className="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600"
                                    onClick={handleReset}
                                >
                                    RESET
                                </p>
                            </div>
     
                            <p className="font-medium text-sm leading-6 text-black mb-3">Products</p>
                            <div className="box flex flex-col gap-2 pb-10">
                                {product.map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            id={`product-${index}`}
                                            type="radio"
                                            name="product"
                                            value={item}
                                            checked={tempFilters.product === item}
                                            onChange={handleFilterChange}
                                            className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-indigo-100"
                                        />
                                        <label htmlFor={`product-${index}`} className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">
                                            {item}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <p className="font-medium text-sm leading-6 text-black mb-3">Price</p>
                            <div className="box flex flex-col gap-2 pb-10">
                                <div className="items-center">
                                    <label htmlFor="price-min" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">Min</label>
                                    <input 
                                        id="price-min" 
                                        type="number" 
                                        name="priceMin"
                                        value={tempFilters.priceMin}
                                        onChange={handleFilterChange} 
                                        className="px-2 focus:border-indigo-200 ml-3 w-40 outline-none appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100"
                                    />
                                </div>
                                <div className="items-center">
                                    <label htmlFor="price-max" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">Max</label>
                                    <input 
                                        id="price-max" 
                                        type="number" 
                                        name="priceMax"
                                        value={tempFilters.priceMax}
                                        onChange={handleFilterChange} 
                                        className="px-2 focus:border-indigo-200 ml-3 w-40 outline-none appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100"
                                    />
                                </div>
                            </div>

                            <p className="font-medium text-sm leading-6 text-black mb-3">Ratings</p>
                            <div className="box flex flex-col gap-2 pb-10">
                                {[1, 2, 3, 4, 5].map(rating => (
                                    <div key={rating} className="flex items-center">
                                        <input 
                                            id={`rating-${rating}`} 
                                            type="radio" 
                                            name="rating"
                                            value={rating} 
                                            checked={tempFilters.rating === rating.toString()}
                                            onChange={handleFilterChange}
                                            className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-indigo-100"
                                        />
                                        <label htmlFor={`rating-${rating}`} className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">{rating}</label>
                                    </div>
                                ))}
                            </div>

                            <p className="font-medium text-sm leading-6 text-black mb-3">Payment Methods</p>
                            <div className="box flex flex-col gap-2 pb-10">
                                {['After Delivery', 'Upfront'].map((method, index) => (
                                    <div key={index} className="flex items-center">
                                        <input 
                                            id={`paymentMethod-${index}`} 
                                            type="radio" 
                                            name="paymentMethod"
                                            value={method} 
                                            checked={tempFilters.paymentMethod === method}
                                            onChange={handleFilterChange}
                                            className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-indigo-100"
                                        />
                                        <label htmlFor={`paymentMethod-${index}`} className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">{method}</label>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={handleApplyFilters}
                                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                    
                    <div className="col-span-12 md:col-span-9">
                        {showFiltered ? (
                            <CategoryProductFilter filterProductList={filterProductList} error={error} />
                        ) : (
                            <CategoryProduct productList={productList} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductFilter;
