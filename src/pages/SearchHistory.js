import React, { useEffect, useState } from "react";
import { apiCall } from "../utils/apiCall";
import DateFormat  from "../utils/dateFormate";

function SearchHistory() {
  const [history, setHistory] = useState([]);


  useEffect(() => {
    const fetchSearchHistory = async () => {
      try {
        const response = await apiCall('/searchhistory', 'GET');
        setHistory(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.log('Error fetching search history:', error);
      }
    };

    fetchSearchHistory();
  }, []);
  return (
    <section className="py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="main-data rounded-3xl">
          <h2 className="text-center font-manrope font-semibold text-4xl text-black mb-10">Search History</h2>
          <div className="grid grid-cols-8 pb-9">
            <div className="col-span-8 lg:col-span-4">
              <p className="font-medium text-lg leading-8 text-indigo-600">Product</p>
            </div>
            <div className="col-span-1 max-lg:hidden">
              <p className="font-medium text-lg leading-8 text-indigo-600 text-center">Price</p>
            </div>
            <div className="col-span-2 max-lg:hidden">
              <p className="font-medium text-lg leading-8 text-indigo-600">Search Date</p>
            </div>
          </div>
          {history.map((item, index) => (
            <div key={index} className="box px-8 py-2 border rounded-lg grid grid-cols-8 mb-7 cursor-pointer transition-all duration-500 hover:bg-blue-50 max-lg:max-w-xl max-lg:mx-auto">
              <div className="col-span-8 sm:col-span-4 lg:col-span-1 sm:row-span-4 lg:row-span-1">
                <img src={item.productImage} alt={item.productName} className="max-lg:w-auto max-sm:mx-auto rounded-xl"/>
              </div>
              <div className="col-span-8 sm:col-span-4 lg:col-span-3 flex h-full justify-center pl-4 flex-col max-lg:items-center">
                <h5 className="font-manrope text-md leading-9 text-black mb-1 whitespace-nowrap"><span className='font-bold lg:hidden'>Name: </span>{item.productName}</h5>
              </div>
              <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-center">
                <p className="text-md leading-8 text-black"><span className='font-bold lg:hidden'>Price: </span><span>{item.productPrice}</span></p>
              </div>
              <div className="col-span-8 sm:col-span-4 lg:col-span-2 flex items-center justify-center ">
                <p className="text-md leading-8 text-black"><span className='font-bold lg:hidden'>Date: </span>{DateFormat(item.searchDate)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchHistory;
