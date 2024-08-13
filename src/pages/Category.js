import React, { useEffect, useState } from 'react';
import {SERVER_URL} from '../constant'
import { Link } from 'react-router-dom';

function Category() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/categories`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }finally{
        setIsLoading(false);
      }
    };
  
    fetchCategories();
  }, []);
  




  return (
    <div className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div className="flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-lg xl:text-2xl font-semibold leading-7 xl:leading-9 text-gray-800">
              Shop By Category
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (

            <div className="flex justify-center items-center h-64">
            <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            </div>
       ) : (
             <>
              {categories.map(category => (
                 <Link to={`/filter/${category.id}`}>
                <div key={category.id} className="relative group flex justify-center items-center h-72 w-72">
                  <img className="object-center object-cover h-full w-full" src={category.category_image} alt={category.name} />
                  <button className="dark:bg-[#f7444e] dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    {category.name}
                  </button>
                </div>
                </Link>
              ))}
              </>
                 )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
