import React from 'react'

function ResetPassword() {
  return (
    <div class="min-h-screen py-20 bg-gradient-to-r from-blue-100  to-blue-400" >
    <div class="container flex-1 flexflex-col items-center max-w-lg mx-auto px-4 py-28">
     <div class="flex flex-col p-6 shadow-lg bg-white rounded-xl">
       <h2  class="text-2xl text-center capitalize mb-4 text-black font-semibold">Reset Password</h2>
       <form action="#">

       <div class="">
            <label for="password" class="mb-2 text-sm text-start font-semibold text-gray-400">Password</label>
            <input type="password" placeholder="Confirm Your Password" class="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"/>
            </div>
            <div class="">
            <label for="password" class="mb-2 text-sm text-start font-semibold text-gray-400">Confirm Password</label>
            <input type="password" placeholder="Confirm Your Password" class="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"/>
            </div>
         <div class="flex flex-row justify-end mb-8">
         </div>
         <div class="">
           <button class="w-full bg-[#4169E1] py-3 text-center text-white">Submit</button>
         </div>
       </form>
     </div>

   </div>

    </div>
  )
}

export default ResetPassword