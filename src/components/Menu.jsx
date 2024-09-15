import React from 'react'
import Container from './Container'
import { CiBasketball } from "react-icons/ci";


const Menu = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50">
        <Container>
        <div className="">
            <ul className='flex  items-center py-[50px] justify-center'>
                <li className='text-[#fff] text-[16px] font-dm font-normal'>Home</li>
                <li className='text-[#fff] text-[16px] font-dm font-normal mx-[30px]'>Features</li>
                <li className='text-[#fff] text-[16px] font-dm font-normal'>Pricing</li>
                <li className='text-[#fff] text-[16px] font-dm font-normal mx-[30px]'>Blog</li>
                <li className='text-[#fff] text-[16px] font-dm font-normal'><CiBasketball/></li>
            </ul>
        </div>
    </Container>
    </div>
  )
}

export default Menu