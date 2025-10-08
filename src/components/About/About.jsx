import React from 'react';
import twiter from './assets/Group.png'
import linkedin from './assets/fi_145807.png'
import fb from './assets/Vector.png'
import jnina from'./assets/Group (1).png'

const About = () => {
    return (
        <div className='bg-black '>
                    <div className='mt-10 max-w-[1400px] mx-2 lg:mx-auto pb-10 pt-6 grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-20'>
            <div className='grid gap-y-2'>
                <h1 className='text-2xl text-white font-semibold'>CS — Ticket System</h1>
                <p className='text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='grid gap-y-2'>
                <h1 className='text-xl text-white font-medium'>Company</h1>
                <p className='text-[#A1A1AA]'>Contact Saled</p>
                <p className='text-[#A1A1AA]'>Our Mission</p>
                <p className='text-[#A1A1AA]'>About us</p>
            </div>
            <div className='grid gap-y-2'>
                <h1 className='text-xl text-white font-medium'>Services</h1>
                <p className='text-[#A1A1AA]'>Products & Services</p>
                <p className='text-[#A1A1AA]'>Customer Stories</p>
                <p className='text-[#A1A1AA]'>Download Apps</p>
            </div>
            <div className='grid gap-y-2'>
                <h1 className='text-xl text-white font-medium'>Information</h1>
                <p className='text-[#A1A1AA]'>Privacy Policy</p>
                <p className='text-[#A1A1AA]'>Terms & Conditions</p>
                <p className='text-[#A1A1AA]'>Join Us</p>
            </div>
            <div className='grid gap-y-2'>
                <h1 className='text-xl text-white font-medium'>Social Links</h1>
                <div className='flex items-center gap-2'>
                    <img src={twiter} alt="" className='h-[20px] w-[20px]'/>
                    <p className='text-[#A1A1AA]'>@CS — Ticket System</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={linkedin} alt="" className='h-[20px] w-[20px]'/>
                    <p className='text-[#A1A1AA]'>@CS — Ticket System</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={fb} alt="" className='h-[20px] w-[20px]'/>
                    <p className='text-[#A1A1AA]'>@CS — Ticket System</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={jnina} alt="" className='h-[20px] w-[20px]'/>
                    <p className='text-[#A1A1AA]'>@CS — Ticket System</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;