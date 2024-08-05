import React from 'react'

function Category() {
  return (
   
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

  )
}

export default Category