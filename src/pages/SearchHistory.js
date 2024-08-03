import React from 'react'

function SearchHistory() {
  return (
    <section className="py-24 bg-white">
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="main-data   rounded-3xl">
            <h2 className="text-center font-manrope font-semibold text-4xl text-black mb-10">Search History</h2>
            <div className="grid grid-cols-8 pb-9">
                <div className="col-span-8 lg:col-span-4">
                    <p className="font-medium text-lg leading-8 text-indigo-600">Product </p>
                </div>
                <div className="col-span-1 max-lg:hidden">
                    <p className="font-medium text-lg leading-8 text-indigo-600 text-center">price </p>
                </div>
                <div className="col-span-2 max-lg:hidden">
                    <p className="font-medium text-lg leading-8 text-indigo-600">Search Date</p>
                </div>
            </div>
            <div className="box px-8 py-2 border rounded-lg grid grid-cols-8 mb-7 cursor-pointer transition-all duration-500 hover:bg-blue-50 max-lg:max-w-xl max-lg:mx-auto">

                <div className="col-span-8 sm:col-span-4 lg:col-span-1 sm:row-span-4 lg:row-span-1">
                    <img src="https://pagedone.io/asset/uploads/1705474950.png" alt="earbuds" className="max-lg:w-auto max-sm:mx-auto rounded-xl"/>
                </div>
                <div
                    className="col-span-8 sm:col-span-4 lg:col-span-3 flex h-full justify-center pl-4 flex-col max-lg:items-center">
                    <h5 className="font-manrope text-md leading-9 text-black mb-1 whitespace-nowrap"><span className='font-bold lg:hidden'>Name: </span> Apple Airpods Pro</h5>
                </div>

                <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-center">
                    <p className="text-md leading-8 text-black"><span className='font-bold lg:hidden'>Price: </span><span>$249.99</span></p>
                </div>
                <div className="col-span-8 sm:col-span-4 lg:col-span-2 flex items-center justify-center ">
                    <p className="text-md leading-8 text-black"><span className='font-bold lg:hidden'>Date: </span> 23rd March 2021</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default SearchHistory