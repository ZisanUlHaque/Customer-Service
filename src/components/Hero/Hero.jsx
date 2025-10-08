import React from 'react';
import heroImg from '../../assets/vector1.png';
import HeroImg from '../../assets/vector2.png';

const Hero = () => {
    return (
        <div className='mt-10 max-w-[1400px] mx-2 lg:mx-auto flex flex-col lg:flex-row  justify-between mb-10 items-center gap-5'>
            <div className='relative justify-center grid gap-y-3 text-center text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-10 py-16 rounded-xl w-full lg:w-[48%] h-60'>
                <img src={heroImg} alt="" className='absolute  bottom-0'/>
                <img src={HeroImg} alt="" className='absolute bottom-0 right-0' />
                <h1 className='text-xl'>In-Progress</h1>
                <h1 className='font-bold text-5xl'>0</h1>
            </div>
            <div className='relative justify-center grid gap-y-3 text-center text-white bg-gradient-to-r from-[#54CF68] to-[#00827A] px-10 py-16 rounded-xl w-full lg:w-[48%] h-60'>
                <img src={heroImg} alt="" className='absolute  bottom-0'/>
                <img src={HeroImg} alt="" className='absolute bottom-0 right-0' />
                <h1 className='text-xl'>Resolved</h1>
                <h1 className='font-bold text-5xl'>0</h1>
            </div>
        </div>
    );
};

export default Hero;