import React, { useEffect, useState } from 'react';
import header from "../assets/lovepik-25d-online-e-commerce-online-shopping-vector-png-image_401266582_wh1200-removebg-preview-removebg-preview.png";
import { Link } from 'react-router-dom';
import {SERVER_URL} from '../constant'
import { useNavigate } from 'react-router-dom';

function Home() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${SERVER_URL}/categories`)
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') {
      alert('Please enter a search term.');
      return;
    }
    navigate(`/QueryProduct?search=${encodeURIComponent(searchTerm)}`);
  };

   useEffect(() => {
  const timeout = setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return () => clearTimeout(timeout);
}, []);


  return (
    <div>
      <div className="relative w-full">
        <div className="relative bg-gradient-to-t from-blue-100 to-blue-400">
          <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
            <div className="flex items-center flex-wrap px-2 md:px-0">
              <div className="relative  w-full lg:w-6/12 lg:py-24 xl:py-32">
                <h1 className="font-bold text-4xl text-blue-500 md:text-5xl lg:w-10/12">
                  Find The Best Price
                </h1>
                <form onSubmit={handleSearch} className="w-full mt-5">
                  <label className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-3xl gap-2 shadow-2xl focus-within:border-gray-300"
                         htmlFor="search-bar">
                    <input id="search-bar"  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="your keyword here" className="px-6 py-2 w-full rounded-full md:rounded-md flex-1 outline-none bg-white"/>
                    <button
                      className="w-full md:w-auto px-6 py-3 bg-[#f7444e] border-[#f7444e] text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-full transition-all disabled:opacity-70">
                      <div className="relative">
                        <div className="flex items-center transition-all opacity-1 valid:">
                          <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                            Search
                          </span>
                        </div>
                      </div>
                    </button>
                  </label>
                </form>
              </div>
              <div className="ml-auto bg">
                <img src={header} className="relative" alt="food illustration" loading="lazy" width="450" height="450"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col justify-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">Shop By Category</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (

            <>
              {categories.map(category => (
                 <Link to={`/filter/${category.id}`}>
                <div key={category.id} className="relative group flex justify-center items-center h-72 w-72">
                  <img className="object-center object-cover h-full w-full bg-gray-50 animate-pulse"  />
                  <button className="bg-gray-200 animate-pulse dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36">
                  {''}
                  </button>
                </div>
                </Link>
              ))}
              </>
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

      <div className="mt-20">
        <div className="relative isolate overflow-hidden bg-blue-400 px-6 py-24 sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold text-black sm:text-4xl">Keep Updated</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-black">
            Keep pace with SecureCloud advancements! Join our mailing list for selective, noteworthy updates.
          </p>
          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autoComplete="email" required="" className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" placeholder="Enter your email"/>
            <button type="submit" className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-black hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Notify me</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
