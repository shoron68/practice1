import React from 'react'
import bg from "../assets/bannerbg.png"
import Container from './Container'

const Banner = () => {
  return (
        <div className="bg-blue-700 opacity-90 ">
    <div style={{ backgroundImage: `url(${bg})` }} className=" bg-cover bg-no-repeat bg-center">
        <Container>
            <div className="text-center pt-[253px] ">
                <h2 className='text-[24px] text-[#fff] font-dm font-bold'>Startup 3</h2>
                <h1 className='text-[72px] text-[#fff] font-dm font-bold'>Forget About Code</h1>
                <p className='text-[16px] text-[#fff] font-dm font-normal'>Startup Framework gives you complete freedom over your creative <br/> process — you don’t have to think about any technical aspects. There <br/> are no limits and absolutely no coding. </p>
            </div>
            <div className=" text-center pb-[163px] pt-[117px]">
                <button className='text-[18px] text-[#fff] font-dm font-medium py-[20px] px-[40px] bg-[#482BE7] rounded-full '>Create An Account</button>
            </div>
        </Container>
        
    </div>
            
        </div>
  )
}

export default Banner