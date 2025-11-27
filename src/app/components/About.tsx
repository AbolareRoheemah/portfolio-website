import React from 'react'

export default function About() {
  return (
    <div className='about-ctn pt-2 px-4 md:px-20 pb-20'>
      <div className='z-10'>
        <div className="flex flex-col items-center justify-center mt-12">
            <div className="w-6 h-10 border-2 border-[#6bf6fb] rounded-full shadow-lg flex items-start justify-center cursor-pointer">
            <div className='w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] mt-2 rounded-full bg-[#6bf6fb]'></div>
            </div>
            <div className="w-px h-10 border-l-2 border-dashed border-white-400 mt-2"></div>
            <div className='w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] mt-2 rounded-full bg-white'></div>
        </div>
        <div className='flex flex-col items-center md:items-end md:flex-row justify-between gap-4 md:gap-20'>
            <div className='flex flex-col items-center md:items-start justify-between gap-4 mt-4'>
                <div className='rounded-tl-[50px] rounded-br-[50px] border-2 border-[#6bf6fb] w-[max-content] py-2 px-8 bg-[#0D1117]'>
                    <h3 className='text-[24px] md:text-[40px]'>About Me</h3>
                </div>
                <div className='bg-[#0D1117] py-6 px-4 md:px-8 mt-10 rounded-[40px]'>
                    <p data-aos="fade-up" className='text-sm text-[#6AECD9] mb-4'>&lt;p&gt;</p>
                    <h5 data-aos="fade-up" data-aos-delay="10" className='text-[#6bf6fb] text-xl font-bold mb-2 ml-4'>Hello!</h5>
                    <p data-aos="fade-up" data-aos-delay="20" className='mt-4 text-[#979A9D] text-md font-bold ml-4'>Hello, I&apos;m Roheemah, a frontend developer with over three years of experience in building dynamic and engaging web applications. My expertise spans <span className='text-[#6bf6fb]'>HTML, CSS, Javascript, Typescript</span>, and popular JavaScript frameworks like <span className='text-[#6bf6fb]'>React, Next, Vue and Nuxt</span></p>
                    <p data-aos="fade-up" data-aos-delay="30" className='mt-4 text-[#979A9D] text-md font-bold ml-4'>
                    In addition to frontend development, I am also a blockchain developer skilled in <span className='text-[#6bf6fb]'>Solidity and Rust</span>, creating secure and efficient <span className='text-[#6bf6fb]'>smart contracts</span> for various blockchain applications. I have competed in multiple hackathons, winning third place at AYA HQ, ICP Hub, and DappsOverDapps hackathons in 2024.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="35" className='mt-4 text-[#979A9D] text-md font-bold ml-4'>
                    My development philosophy centers on <span className='text-[#6bf6fb]'>building user-centric, scalable solutions</span> that solve real-world problems. I believe in writing clean, maintainable code and staying curious about emerging technologies, whether that&apos;s exploring new blockchain protocols or optimizing frontend performance.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="40" className='mt-4 text-[#979A9D] text-md font-bold ml-4'>
                    As a technical and content writer, I enjoy breaking down complex concepts and communicating them effectively, helping myself and my readers gain deeper insights into technology.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="50" className='mt-4 text-[#979A9D] text-md font-bold ml-4'>I am also passionate about public speaking and have had the privilege of speaking at several events, including a tech event hosted by the Google Developer Students Club (GDSC) at my university.</p>
                    <p data-aos="fade-up" data-aos-delay="60" className='mt-4 text-[#979A9D] text-md font-bold ml-4'>
                    Outside of work, I strive for excellence in all I do, with a strong aversion to mediocrity. I love traveling, reading self-help books, and connecting with people from diverse backgrounds.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="70" className='text-sm text-[#6AECD9] mt-4'>&lt;/p&gt;</p>
                </div>
            </div>
            <div className='about-me rounded-2xl hidden md:block hover:brightness-150 transition duration-300'>
                {/* Add your image here */}
            </div>
        </div>
      </div>
    </div>
  )
}
