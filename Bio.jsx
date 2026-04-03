import React from 'react'
import { BiEnvelope } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import PortfolioStore from './useStore';

const Bio = () => {
    const theme = PortfolioStore((state) => state.theme);
    return (
        <section className='px-6'>
            <div className='flex flex-col gap-1 mt-9'>
                <div className={`flex gap-3 font-semibold ${theme ? 'text-gray-700' : 'text-white'} items-center select-none text-sm`}>
                    <span className='p-1.5 border rounded-lg border-gray-700'><FaCode /></span>
                    Front-End Developer
                </div>
                <div className={`flex gap-3 font-semibold ${theme ? 'text-gray-700' : 'text-white'} items-center select-none text-sm`}>
                    <span className='p-1.5 border rounded-lg border-gray-700 '><IoLocationOutline /></span>
                    Maharashtra, India
                </div>
                <div className={`flex gap-3 font-semibold ${theme ? 'text-gray-700' : 'text-white'} items-center select-none text-sm`}>
                    <span className='p-1.5 border rounded-lg border-gray-700 '><BiEnvelope /></span>
                    adinathgaware23072003@gmail.com
                </div>
                <p className={`font-semibold ${theme ? 'text-gray-700' : 'text-gray-500'} leading-8 mt-10.5 block`}>
                    Front-end developer specializing in <span className='items-center gap-2 inline-flex py-0.5 px-1.5 border-dashed text-cyan-500 bg-cyan-500/10! border-cyan-500 border rounded-md font-semibold'>React</span>, <span className='items-center gap-2 inline-flex py-0.5 px-2 border-dashed text-gray-200 border-gray-600 bg-gray-500/10! border rounded-xl font-semibold'>JavaScript</span>, and <span className='items-center gap-2 inline-flex py-0.5 px-2 border-dashed text-blue-500 border-blue-500 bg-blue-500/10! border rounded-xl font-semibold'>Tailwind CSS</span>, <span className='items-center gap-2 inline-flex py-0.5 px-2 border-dashed text-emerald-500 bg-emerald-500/10! font-semibold border-emerald-500 border rounded-xl'>GSAP</span>, building responsive and user-focused web applications with clean and scalable code.
                </p>
            </div>
        </section>
    )
}

export default Bio;