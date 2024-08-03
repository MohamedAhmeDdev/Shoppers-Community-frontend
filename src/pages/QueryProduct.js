import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function QueryProduct() {
    const[error , setError] = useState('')
    const [results, setResults] = useState([]);
    const [filterProductList, setFilterProductList] = useState([]);
    const location = useLocation();
    const [filters, setFilters] = useState({
        product: '',
        priceMin: '',
        priceMax: '',
        rating: '',
        paymentMethod: ''
    });
    const [showFiltered, setShowFiltered] = useState(false);

   
    const query = new URLSearchParams(location.search).get('search');

    useEffect(() => {
        if (query) {
            const getSearch = async () => {
                try {
                    const response = await fetch(`http://127.0.0.1:5555/search?query=${encodeURIComponent(query)}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch search results');
                    }
                    const data = await response.json();
                    setResults(data);
                } catch (error) {
                    console.error('Search error:', error);
                }
            };

            getSearch(); 
        }
    }, [query]);


    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
      };


    useEffect(() => {
        const filterApi = async () => {
            try {
                const product_name = results.map(product => product.name);
                const queryString = new URLSearchParams({
                    ...filters, 
                 product_name: product_name[0] 
                }).toString();
                const response = await fetch(`http://127.0.0.1:5555/filterequery?${queryString}`, {
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
                setError('No products found')
            }
        };
        
        if (Object.values(filters).some(value => value !== '')) {
            filterApi();
        }
    }, [filters]);
    
    // Reset filters
    const handleReset = () => {
        setFilters({
            product: '',
            priceMin: '',
            priceMax: '',
            rating: '',
            paymentMethod: ''
        });
        setShowFiltered(false);
    };

    return (
        <div>
  
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
                          

                            <p className="font-medium text-sm leading-6 text-black mb-3">Price</p>
                            <div className="box flex flex-col gap-2 pb-10">
                                <div className="items-center">
                                    <label htmlFor="price-min" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">Min</label>
                                    <input 
                                        id="price-min" 
                                        type="number" 
                                        name="priceMin"
                                        value={filters.priceMin}
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
                                        value={filters.priceMax}
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
                                            checked={filters.rating === rating.toString()}
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
                                            checked={filters.paymentMethod === method}
                                            onChange={handleFilterChange}
                                            className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-indigo-100"
                                        />
                                        <label htmlFor={`paymentMethod-${index}`} className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">{method}</label>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => setShowFiltered(true)}
                                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                    
                    <div className="col-span-12 md:col-span-9">
                        {showFiltered ? (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Filtered Products</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filterProductList.length > 0 ? (
                                        filterProductList.map((product, index) => (
                                            <div key={index} className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border shadow-md bg-white">
                                                    <a className="relative flex h-60 overflow-hidden" href="#">
                                                    <img className="object-cover w-full h-full" src={product.product_image} alt={`Image of ${product.name}`} />
                                                    </a>
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
                                        ))
                                    ) : (
                                        <p className="text-gray-600 text-center">{error}</p>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div>
                            <h2 className="text-xl font-semibold mb-4">Products</h2>
                            <div className="col-span-12 md:col-span-9">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                             {results.map((item, index) => (
                                 <div key={index} className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border shadow-md bg-white">
                                   <a className="relative flex h-60 overflow-hidden" href="#">
                                   <img className="object-cover w-full h-full" src={item.product_image} alt={`Image of ${item.name}`} />
                                   </a>
                                   <div className="mt-4 px-5 pb-5">
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
                                   </div>
                                  </div>
                                ))}
                            </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default QueryProduct;
