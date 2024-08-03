import React, {useReducer} from 'react'


function Register() {
  const initialState ={
    firstName :"",
    lastName:"",
    password:"",
    confirmPassword:"",
    email:"",
    error:"",
    loading:false,
    success:false
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_FIELD':
        return {
          ...state,
          [action.field]: action.value,
        };
      case 'SUBMIT':
        return {
          ...state,
          loading: true,
          error: '',
        };
      case 'SUCCESS':
        return {
          ...state,
          loading: false,
          success: true,
        };
      case 'ERROR':
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleChange= (e)=>{
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefaut();
    dispatch({type:"SUBMIT"})
    const token = localStorage.getItem("access_token")
    try{
      const response = await fetch("https://shoppers-community-server.onrender.com/register",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          firstName: state.firstName,
          lastName:state.lastName,
          email: state.email,
          password: state.password,
          confirmPassword: state.confirmPassword,
        }),
      })
      if (response.ok){
        const data = await response.json();
        dispatch({type: "SUCCESS"});
      }
      else{
        const errorData = await response.json();
        dispatch({type: 'ERROR', error: errorData.message})
      }
    }
    catch(error){
      dispatch({type: "ERROR", error: "Network error"})
    }
  }
  return (
    <div className="min-h-screen py-20 bg-gradient-to-r from-blue-100  to-blue-400" >
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center lg:bg-[url('https://lilacinfotech.com/lilac_assets/images/blog/What-Is-E-commerce-and-what-are-its-Applications.jpg')]">
         
         </div>
        <div className="w-full lg:w-1/2 py-16 px-12">
          <h2  className="text-2xl text-center capitalize mb-4 text-black font-semibold">Register With Us</h2>
          <form action="#" onSubmit = {handleSubmit}>
            <div className="grid grid-cols-2 gap-5">
              <div>
              <label for="name" className="mb-2 text-sm text-start font-semibold text-gray-400">First Name</label>
                <input 
                type="text"
                placeholder="First Name"
                className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"
                name = "firstName"
                value = {state.firstName}
                onChange = {handleChange}
                />
              </div>
              <div>
              <label for="name" className="mb-2 text-sm text-start font-semibold text-gray-400">Last Name</label>
               <input
               type="text"
               placeholder="Last Name"
               className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"
               name = "lastName"
               value= {state.lastName}
               onChange={handleChange}/>
              </div>
             
            </div>
            <div className="">
            <label for="email" className="mb-2 text-sm text-start font-semibold text-gray-400">Email</label>
            <input
            type="email"
            placeholder="Enter Your Email"
            className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"
            name="email"
            value = {state.email}
            onChange= {handleChange}/>
            </div>
            <div className="">
            <label for="password"className="mb-2 text-sm text-start font-semibold text-gray-400">Password</label>
            <input
            type="password"
            placeholder="Confirm Your Password"
            className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"
            name = "password"
            value = {state.password}
            onChange={handleChange}/>
            </div>
            <div className="">
            <label for="password" className="mb-2 text-sm text-start font-semibold text-gray-400">Confirm Password</label>
            <input
            type="password"
            placeholder="Confirm Your Password"
            className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"
            name= "confirmPassword"
            value ={state.confirmPassword}
            onChange={handleChange}/>
            </div>
            {state.error &&<p>{state.error}</p>}
            <div className="">
              <button type= "submit" disabled={state.loading} className="w-full bg-[#4169E1] py-3 text-center text-white">{state.loading ? "Registering ...":  "Register Now"} </button>
              
            </div>
            {state.success && <p>Registration successfull</p>}
            <p className="text-sm text-center pt-5   capitalize leading-relaxed text-gray-900">already have an account <a href="/login" className="font-bold text-[#4169E1] text-grey-700">Login</a></p>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register