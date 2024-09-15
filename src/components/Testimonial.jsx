import React from 'react'
import Container from './Container'
import img from "../assets/Userpic.png"

const Testimonial = () => {
  return (
    <div className="bg-[#2F1893] ">
            <Container>
                <div className="pt-[100px]">
                    <h2 className='text-[52px] font-dm text-[#fff] font-bold leading-[53px]'>Our Happy Clients</h2>
                </div>

                <div className="flex justify-between pt-[75px] ">
                    <div className="w-[45%]">
                        <div className="border-[2px] border-[rgba(255,255,255,0.47)] rounded-[10px]">
                            <div className="flex py-[35px]">
                                <div className="pl-[35px] pr-[30px]">
                                    <img src={img} alt="" />
                                </div>
                                <div className="">
                                    <p className='text-[18px] leading-[28px] font-dm font-medium text-[#fff]'>Get a fully retina ready site when <br/> you build with Startup Framework. <br/> Websites look sharper and more gorgeous <br/> on devices with retina display support</p>
                                    <h6 className='text-[14px] text-[rgba(255,255,255,0.43)] font-dm font-bold uppercase leading-[26px] pt-[20px]'>Rayhan Curran</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[45%]">
                        <div className="border-[2px] border-[rgba(255,255,255,0.47)] rounded-[10px]">
                            <div className="flex py-[35px]">
                                <div className="pl-[35px] pr-[30px]">
                                    <img src={img} alt="" />
                                </div>
                                <div className="">
                                    <p className='text-[18px] leading-[28px] font-dm font-medium text-[#fff]'>Get a fully retina ready site when <br/> you build with Startup Framework. <br/> Websites look sharper and more gorgeous <br/> on devices with retina display support</p>
                                    <h6 className='text-[14px] text-[rgba(255,255,255,0.43)] font-dm font-bold uppercase leading-[26px] pt-[20px]'>Rayhan Curran</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between pt-[75px] pb-[105px] ">
                    <div className="w-[45%]">
                        <div className="border-[2px] border-[rgba(255,255,255,0.47)] rounded-[10px]">
                            <div className="flex py-[35px]">
                                <div className="pl-[35px] pr-[30px]">
                                    <img src={img} alt="" />
                                </div>
                                <div className="">
                                    <p className='text-[18px] leading-[28px] font-dm font-medium text-[#fff]'>Get a fully retina ready site when <br/> you build with Startup Framework. <br/> Websites look sharper and more gorgeous <br/> on devices with retina display support</p>
                                    <h6 className='text-[14px] text-[rgba(255,255,255,0.43)] font-dm font-bold uppercase leading-[26px] pt-[20px]'>Rayhan Curran</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[45%]">
                        <div className="border-[2px] border-[rgba(255,255,255,0.47)] rounded-[10px]">
                            <div className="flex py-[35px]">
                                <div className="pl-[35px] pr-[30px]">
                                    <img src={img} alt="" />
                                </div>
                                <div className="">
                                    <p className='text-[18px] leading-[28px] font-dm font-medium text-[#fff]'>Get a fully retina ready site when <br/> you build with Startup Framework. <br/> Websites look sharper and more gorgeous <br/> on devices with retina display support</p>
                                    <h6 className='text-[14px] text-[rgba(255,255,255,0.43)] font-dm font-bold uppercase leading-[26px] pt-[20px]'>Rayhan Curran</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
  )
}

export default Testimonial