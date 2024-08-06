import React, { useEffect, useState } from 'react';
import {SERVER_URL} from '../constant'
import { Link } from 'react-router-dom';

function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${SERVER_URL}/categories`)
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the data:', error);
        setError('Failed to load categories');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div className="flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-lg xl:text-2xl font-semibold leading-7 xl:leading-9 text-gray-800">
              Shop By Category
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
