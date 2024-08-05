import React from 'react'
import header from "../assets/lovepik-25d-online-e-commerce-online-shopping-vector-png-image_401266582_wh1200-removebg-preview-removebg-preview.png"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch ("https://shoppers-community-server.onrender.com")
     .then(response => response.json())
     .then(product => setProducts(product))
  },[]);
  return (
    <div>

  
    <div class="relative w-full">
    <div class="relative bg-gradient-to-t from-blue-100  to-blue-400">
        <div class="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
            <div class="flex items-center flex-wrap px-2 md:px-0">
                <div class="relative lg:w-6/12 lg:py-24 xl:py-32">
                    <h1 class="font-bold text-4xl text-blue-500  md:text-5xl lg:w-10/12"> Find The Best Price </h1>
                    <form action="" class="w-full mt-5">
                    <label class="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-full gap-2 shadow-2xl focus-within:border-gray-300"
                        for="search-bar">
                        <input id="search-bar" placeholder="your keyword here"
                            class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"/>
                        <button
                            class="w-full md:w-auto px-6 py-3 bg-[#f7444e] border-[#f7444e] text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-full transition-all disabled:opacity-70">
                            
                            <div class="relative">

                                <div class="flex  items-center transition-all opacity-1 valid:">
                                  <span class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                        Search
                                    </span>
                                </div>

                            </div>
                            
                        </button>
                    </label>
                    </form>
                </div>
                <div class="ml-auto bg">
                    <img src={header} class="relative" alt="food illustration" loading="lazy" width="450" height="450"/>
                </div>
            </div>
        </div>
    </div>
    </div>


<div class="flex justify-center items-center">
    <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div class="flex flex-col jusitfy-center items-center space-y-10">
            <div class="flex flex-col justify-center items-center ">
                <h1 class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">Shop By Category</h1>
            </div>
            <div class="flex justify-center items-center">
    <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div class="flex flex-col jusitfy-center items-center space-y-10">
            <div class="flex flex-col justify-center items-center ">
                <h1 class="text-lg xl:text-2xl font-semibold leading-7 xl:leading-9 text-gray-800">Shop By Category</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 w-full">
                   <div class="relative group flex justify-center items-center h-72 w-72">
                        <img class="object-center object-cover h-full w-full" src="https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt7074f7f53ea9dc54/60dc11cc22d24e38a38c2ebe/seffren_motus-22515-42mm.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840" alt="shoe-image" />
                        <button class="dark:bg-[#f7444e] dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Electronics</button>
                    </div>
                    <div class="relative group flex justify-center items-center h-72 w-72">
                        <img class="object-center object-cover h-full w-full" src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="shoe-image" />
                        <button class="dark:bg-[#f7444e] dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Sports & Outdoors</button>
                    </div>
                    <div class="relative group flex justify-center items-center h-72 w-72">
                        <img class="object-center object-cover h-full w-full" src="https://images-cdn.ubuy.co.in/65dd65e786e3566b73598061-formal-suits-for-men-wedding-slim-fit-3.jpg" alt="shoe-image" />
                        <button class="dark:bg-[#f7444e] dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Clothing</button>
                    </div>
                    <div class="relative group flex justify-center items-center h-72 w-72">
                        <img class="object-center object-cover h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbiRTRL_vgplKIwOyurZVfnSEklQ-qm5vxOA&s" alt="shoe-image" />
                        <button class="dark:bg-[#f7444e] dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Furniture</button>
                    </div>
                    <div class="relative group flex justify-center items-center h-72 w-72">
                        <img class="object-center object-cover h-full w-full" src="https://5.imimg.com/data5/AK/BS/MI/ANDROID-64079611/product-jpeg-500x500.jpg" alt="shoe-image" />
                        <button class="dark:bg-[#f7444e] dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Others</button>
                    </div>
            </div>
        </div>
    </div>
</div>

            <Link to='/Category'>
                <p className='font-bold text-black text-lg'>See More Categories</p>
            </Link>
        </div>
    </div>
</div>

<div class="mt-20">
    <div
        class="relative isolate overflow-hidden bg-blue-400 px-6 py-24  sm:px-24 xl:py-32">
       
        <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold  text-black sm:text-4xl">Keep Updated
        </h2>

        <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-black">
            Keep pace with SecureCloud 
            advancements! Join our mailing list for selective, noteworthy updates.
        </p>

        <form class="mx-auto mt-10 flex max-w-md gap-x-4">

            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" placeholder="Enter your email"/>

            <button type="submit" class="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-black hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Notify me</button>
        </form>


    </div>
</div>



</div>
  )
}

export default Home