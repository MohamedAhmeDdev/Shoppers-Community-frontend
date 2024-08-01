import React from 'react'

function Register() {
  return (
    <div class="min-h-screen py-20 bg-gradient-to-r from-blue-100  to-blue-400" >
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
        <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center lg:bg-[url('https://lilacinfotech.com/lilac_assets/images/blog/What-Is-E-commerce-and-what-are-its-Applications.jpg')]">
         
         </div>
        <div class="w-full lg:w-1/2 py-16 px-12">
          <h2  class="text-2xl text-center capitalize mb-4 text-black font-semibold">Register With Us</h2>
          <form action="#">
            <div class="grid grid-cols-2 gap-5">
              <div>
              <label for="name" class="mb-2 text-sm text-start font-semibold text-gray-400">First Name</label>
                <input type="text" placeholder="First Name" class="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"/>
              </div>
              <div>
              <label for="name" class="mb-2 text-sm text-start font-semibold text-gray-400">Last Name</label>
               <input type="text" placeholder="Last Name" class="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"/>
              </div>
             
            </div>
            <div class="">
            <label for="email" class="mb-2 text-sm text-start font-semibold text-gray-400">Email</label>
            <input type="email" placeholder="Enter Your Email" class="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"/>
            </div>
            <div class="">
            <label for="password" class="mb-2 text-sm text-start font-semibold text-gray-400">Password</label>
            <input type="password" placeholder="Confirm Your Password" class="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"/>
            </div>
            <div class="">
            <label for="password" class="mb-2 text-sm text-start font-semibold text-gray-400">Confirm Password</label>
            <input type="password" placeholder="Confirm Your Password" class="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"/>
            </div>
            <div class="">
              <button class="w-full bg-[#4169E1] py-3 text-center text-white">Register Now</button>
            </div>

            <p class="text-sm text-center pt-5   capitalize leading-relaxed text-gray-900">already have an account <a href="/login" class="font-bold text-[#4169E1] text-grey-700">Login</a></p>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register