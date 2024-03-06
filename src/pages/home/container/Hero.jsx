import React from 'react'
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
        <div className='mt-10 lg:w-1/2'>
            <h1 className='font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-left lg:max-w-[540px]'>Read the most interesting articles</h1>
            <p className='text-dark-light mt-4 text-center md:text-xl lg:text-left'>
                Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                eiudsomd tempor incidetunt ut labore et dolore magna aliqua
            </p>
        
        <div className='flex flex-col gap-y-2.5 mt-10 relative'>
            <div className='relative'>
            <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]' />
                <input className='placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4' 
                type="text"
                placeholder='Search article'
                />
            
            
            <button className='w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md-right-2 md:top-1/2 md:translate-y-1/2 md:w-fit md:py-2'>Search </button>
            </div>
        </div>
        
        <div className='flex mt-4 flex-col lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
            <span className='text-dark-light font-semibold italic'>Popular Tags:</span>
            <ul>
                <li>Design</li>
                <li>User Exprience</li>
                <li>User interfaces</li>
            </ul>
        </div>
        <div className='hidden'>
          <img src={"images.HeroImage"} alt="users are reading articles" />  
        </div>
        </div>
    </section>
  )
}

export default Hero