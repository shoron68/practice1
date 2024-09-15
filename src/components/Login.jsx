import React from 'react'
import img from "../assets/bg4.png"
import laptop from "../assets/Mockup.png"
import { GoCommentDiscussion } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import Container from './Container';

const Login = () => {
  return (
    <div className="bg-[#2F1893] ">
            <div style={{ backgroundImage: `url(${img})` }} className=" bg-cover bg-no-repeat bg-center">
                <Container>


                <div className="flex justify-between py-[216px]">
                    <div className=" w-[30%] mt-[100px]">
                    <h2 className='text-[42px] text-[#fff] font-dm font-bold'>We solve digital problems with an outstanding creative flare</h2>
                    <p className='text-[16px] text-[#fff] font-dm font-normal'>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily. </p>
                    </div>
                    <div className=" w-[45%]">
                        <div className="bg-[#fff] rounded-[10px] w-[400px]">
                           <div className="flex text-center py-[15px]">
                            <div className="w-1/2">
                            <button className='text-[14px] font-dm font-normal py-[10px] ' >Log In</button>
                            </div>
                            <div className="w-1/2">
                            <button className='text-[14px] font-dm font-normal py-[10px] ' >Sign up</button>
                            </div>
                           </div>
                           <div className="pt-[30px]">
                            <div className="flex justify-center">
                                <input type="text" placeholder='Your Email' className='text-[16px] outline-none py-[10px] pr-[40px] pl-[10px] rounded-full border-[1px]' />
                            </div>
                            <div className="flex justify-center pt-[20px]">
                                <input type="text" placeholder='Your Password' className='text-[16px] outline-none py-[10px] pr-[40px] pl-[10px] rounded-full border-[1px]' />
                            </div>
                           </div>
                           <div className="">
                            <div className="text-center pt-[40px]">
                                <button className='text-[18px] text-[#fff] font-dm font-normal bg-[#25DAC5] py-[10px] px-[40px] rounded-full '>Create an Account</button>
                                <div className="border-b-[1px] w-[220px]  border-[rgba(20,20,20,0.14)] mx-auto pt-[30px] "></div>
                            </div>
                            <div className="text-center pt-[30px] pb-[79px]">
                                <button className='text-[18px] text-[#fff] font-dm font-normal bg-[#1DA1F2] py-[10px] px-[40px] rounded-full '>Login via Twitter</button>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
                </Container>
             

                
            </div>
        </div>
  )
}

export default Login