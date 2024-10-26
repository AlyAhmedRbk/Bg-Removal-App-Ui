import React from 'react'
import {assets} from "../assets/assets";
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {

  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser()

  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
        <Link to="/">
            <img src={assets.logo} className='w-32 sm:w-44' />
        </Link>

        <div className='hidden md:block'>
          
          <ul className='flex items-center gap-5'>
            <Link className='hover:scale-105 transition-all duration-500' to={"/"}>Home</Link>
            <Link className='hover:scale-105 transition-all duration-500' to={"/result"}>Result</Link>
            <Link className='hover:scale-105 transition-all duration-500' to={"/buy"}>Buy Credits</Link>
          </ul>
        </div>

        {
          isSignedIn
          ?<div>
            <UserButton />
          </div>
          :<button className='flex items-center gap-4 bg-zinc-800 text-white px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full hover:scale-105 transition-all duration-300'
        onClick={()=>openSignIn({})}> 
            Get Started
            <img src={assets.arrow_icon} className='w-3 sm:w-4' />
        </button>}
    </div>
  )
}

export default Navbar