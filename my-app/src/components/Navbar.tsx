import logo from '../assets/logo.png';
import lens from '../assets/lens.png';
import arrow from '../assets/arrow.png';
import search from "../assets/search.png"
import Login from './Login';
import { useState } from 'react';
const Navbar = (props) => {


       const [loginPop,setLoginPop]=useState(false)



  return (


    <>    <div className='flex p-4 justify-center bg-slate-100 shadow-md'>
      <img src={logo} alt='logo' className='w-11 h-9 mt-1 ' />

      <div className='flex border-2 border-spacing-1  w-72 p-2 border-black ml-5 bg-white'>
        <img src={lens} alt='lens' className='w-6 h-5 mt-1 bg-slate-100' />
        <input placeholder='Location'  className='ml-3 outline-none' />
        <img src={arrow} alt='arrow' className='w-8 h-7  ml-3 ' />
      </div>
<div className='flex h-12 ml-4 border-2 border-black bg-white'>
    <input onChange={(e)=>props.setSearch(e.target.value)} placeholder='Find Cars, Mobile phones and more...'  className='ml-3 w-96 outline-none ' />
    <img src={search} alt="search" className='w-10 h-11.5 ' />
</div>

 <div className='flex h-12 p-3 ml-10 cursor-pointer'>
    <h1 className='font-semibold'>ENGLISH</h1>
    <img src={arrow} alt="arrow" className='w-8 h-6 ml-2' />
 </div>
 <div onClick={()=> setLoginPop(!loginPop)} className='flex h-12 p-3 ml-5 cursor-pointer underline hover:no-underline'>
    <h1 className='font-bold text-lg'>Login</h1>
   
 </div>
 <div className='w-28 flex h-12 p-2 ml-5 cursor-pointer rounded-full border border-yellow-500 '>
    <h1 className='font-bold text-lg ml-3'>+ SELL</h1>
   
 </div>

    </div>
    {loginPop && <Login setLoginPop={setLoginPop}/>}
    </>
  );
};

export default Navbar;
