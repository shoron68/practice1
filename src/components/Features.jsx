import React from 'react'
import img from "../assets/bg3.png"
import laptop from "../assets/Mockup.png"
import { GoCommentDiscussion } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";



const Features = () => {
    return (
        <div className="bg-[#2F1893] ">
            <div style={{ backgroundImage: `url(${img})` }} className=" bg-cover bg-no-repeat bg-center">
             
                <div className="flex">
                    <div className=" py-[100px]">
                        <img src={laptop} alt="" />
                    </div>
                    <div className=" py-[158px]">
                        <div className="">
                            <h2 className='text-[42px] text-[#fff] font-dm font-bold'>We Create Something New</h2>
                            <p className='text-[22px] text-[#fff] font-dm font-normal'>We have created a new product that will help designers, <br /> developers and companies create websites for their <br /> startups quickly and easily. </p>
                        </div>
                        <div className="flex pt-[65px]">
                            <div className="">
                                <GoCommentDiscussion  className='text-[#fff] text-[24px]'/>
                                <h4 className='text-[14px] font-dm font-bold text-[#fff] uppercase pt-[10px]'>30 New feature pages</h4>
                                <p className='text-[16px] font-dm font-normal text-[#fff] leading-[26px] pt-[20px] pr-[20px] '>Startup Framework contains <br/> components and complex blocks <br/> which can easily. </p>
                            </div>
                            <div className="">
                                <IoDiamondOutline className='text-[#fff] text-[24px]'/>
                                <h4 className='text-[14px] font-dm font-bold text-[#fff] uppercase pt-[10px]'>Useful Symbol Components</h4>
                                <p className='text-[16px] font-dm font-normal text-[#fff] leading-[26px] pt-[20px]'>Startup Framework contains <br/> components and complex blocks <br/> which can easily. </p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Features