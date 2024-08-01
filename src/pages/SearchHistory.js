import React from 'react'

function SearchHistory() {
  return (
    <section class="py-24 bg-white">
    <div class="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div class="main-data   rounded-3xl">
            <h2 class="text-center font-manrope font-semibold text-4xl text-black mb-10">Search History</h2>
            <div class="grid grid-cols-8 pb-9">
                <div class="col-span-8 lg:col-span-4">
                    <p class="font-medium text-lg leading-8 text-indigo-600">Product </p>
                </div>
                <div class="col-span-1 max-lg:hidden">
                    <p class="font-medium text-lg leading-8 text-indigo-600 text-center">price </p>
                </div>
                <div class="col-span-2 max-lg:hidden">
                    <p class="font-medium text-lg leading-8 text-indigo-600">Search Date</p>
                </div>
            </div>
            <div class="box px-8 py-2 border rounded-lg grid grid-cols-8 mb-7 cursor-pointer transition-all duration-500 hover:bg-blue-50 max-lg:max-w-xl max-lg:mx-auto">

                <div class="col-span-8 sm:col-span-4 lg:col-span-1 sm:row-span-4 lg:row-span-1">
                    <img src="https://pagedone.io/asset/uploads/1705474950.png" alt="earbuds image" class="max-lg:w-auto max-sm:mx-auto rounded-xl"/>
                </div>
                <div
                    class="col-span-8 sm:col-span-4 lg:col-span-3 flex h-full justify-center pl-4 flex-col max-lg:items-center">
                    <h5 class="font-manrope text-md leading-9 text-black mb-1 whitespace-nowrap"><span className='font-bold lg:hidden'>Name: </span> Apple Airpods Pro</h5>
                </div>

                <div class="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-center">
                    <p class="text-md leading-8 text-black"><span className='font-bold lg:hidden'>Price: </span><span>$249.99</span></p>
                </div>
                <div class="col-span-8 sm:col-span-4 lg:col-span-2 flex items-center justify-center ">
                    <p class="text-md leading-8 text-black"><span className='font-bold lg:hidden'>Date: </span> 23rd March 2021</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default SearchHistory