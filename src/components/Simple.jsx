import React from 'react'
import img from "../assets/bg2.png"
import Container from './Container'
const Simple = () => {
  return (
    <div className="bg-[#2F1893] ">
        <div style={{ backgroundImage: `url(${img})` }} className=" bg-cover bg-no-repeat bg-center">
            <Container>
                <div className="pt-[107px] pb-[126px] text-center">
                <h2 className='text-[14px] text-[#fff] font-dm font-bold'>Free Sample</h2>
                <h1 className='text-[58px] text-[#fff] font-dm font-bold'>Powerful Generator and Free <br/> Figma Sources </h1>
                <p className='text-[22px] text-[#fff] font-dm font-normal'>Startup Framework contains components and complex blocks which can easily be <br/> integrated into almost any design. All of the components are made in the same style, and <br/> can easily be integrated into projects, allowing you to create hundreds of solutions.</p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Simple