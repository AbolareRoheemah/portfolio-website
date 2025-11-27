import React from 'react';
import { PersonalVideo } from '@mui/icons-material';

const Skills = () => {
  return (
    <div className='skill-bg flex flex-col items-center justify-start gap-2 pt-2 px-4 md:px-20 pb-20 h-screen'>
        <div className=''>
            <h1 className='text-center text-[60px] md:text-[98px] font-medium text-[#6df2db]' data-aos="flip-up">&lt;/&gt;</h1>
        </div>
        <div className='flex flex-col items-center justify-start gap-2 text-center'>
            <div className="relative inline-block">
              <p className='text-[34px] md:text-[46px] font-medium text-[#6df2db]' data-aos="fade-up">Skills</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6df2db] rounded-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
              </div>
            </div>
            <p className='text-[16px] text-[#a9acae]' data-aos="fade-up">Here are some of the skills I have acquired over the years.</p>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-20 mt-10 mb-14'>
                <div className='flex flex-col items-center justify-center gap-2 bg-[#6df2db] border-l-4 border-l-[#00DC82] rounded-lg p-4 w-[300px]' data-aos="flip-left">
                    <p className='cursor-pointer'><PersonalVideo className='text-[#000]' /></p>
                    <h3 className='text-[#000]'>Frontend Development</h3>
                    <p className='text-[#6DA8A2]'>JavaScript, TypeScript, React, Next, Vue, Nuxt, Tailwind, Git</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 bg-[#6df2db] border-l-4 border-l-[#00DC82] rounded-lg p-4 w-[300px]' data-aos="flip-right">
                    <p className='cursor-pointer'><PersonalVideo className='text-[#000]' /></p>
                    <h3 className='text-[#000]'>Blockchain Development</h3>
                    <p className='text-[#6DA8A2]'>Solidity, Rust, Web3, Ethereum, ethers.js</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4 flex-wrap mb-20'>
                {[
                    { name: 'Rust', color: '#CE422B', icon: './rust.svg' },
                    { name: 'Solidity', color: '#363636', icon: './solidity.svg' },
                    { name: 'HTML', color: '#e54f2d', icon: './html5.svg' },
                    { name: 'CSS', color: '#1e72b8', icon: './css3.svg' },
                    { name: 'JS', color: '#e8a02e', icon: './nodedotjs.svg' },
                    { name: 'React', color: '#3eaae1', icon: './preact.svg' },
                    { name: 'Next', color: '#ffffff', icon: './nextdotjs.svg' },
                    { name: 'Vue', color: '#4FC08D', icon: './vuedotjs.svg' },
                    { name: 'Nuxt', color: '#00DC82', icon: './nuxtdotjs.svg' },
                    { name: 'Tailwind', color: '#06B6D4', icon: './tailwindcss.svg' },
                ].map((skill, index) => (
                    <div 
                        key={skill.name}
                        className='flex flex-col items-center justify-center animate-wave'
                        style={{
                            animationDelay: `${index * 0.2}s`
                        }}
                    >
                        <div 
                            className='flex items-center justify-center rounded-full mx-4 p-4 w-[60px] h-[60px] md:w-[80px] md:h-[80px]'
                            style={{ backgroundColor: skill.color }}
                        >
                            <img src={skill.icon} alt={skill.name} />
                        </div>
                        <p className='mt-2' style={{ color: skill.color }}>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Skills;