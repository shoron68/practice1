import React from 'react'
import Container from './Container';
import img from "../assets/bg5.png"
import { IoMdPlay } from "react-icons/io";


const CalltToAction = () => {
  return (
    <div className="bg-[#2F1893] ">
            <div style={{ backgroundImage: `url(${img})` }} className=" bg-cover bg-no-repeat bg-center">
                <Container>
                    <div className="py-[100px] text-center">
                        <h2 className='text-[58px] leading-[70px] text-[#fff] font-dm font-bold'>Easy to setup.<br/>
                        Easy to maintain</h2>
                        <p className='text-[22px] text-[#fff] leading-[32px] font-dm font-medium pt-[20px]'>Bootstrap is a widely-used, sleek, intuitive and <br/> powerful front-end framework for faster and <br/> easier web development.</p>
                        <div className="flex items-center justify-center pt-[50px]" >
                            <div className="h-[65px] w-[65px] bg-[#EA3223] flex justify-center rounded-full">
                                <IoMdPlay className='text-[#fff] translate-y-[150%] '/>
                            </div>
                            <div className="mx-[20px]">
                                <button className='py-[22px] px-[50px] bg-[#25DAC5] rounded-full text-[#fff] text-[22px] font-dm font-medium'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
  )
}

export default CalltToAction