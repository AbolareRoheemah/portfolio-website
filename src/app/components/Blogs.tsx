"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
export default function Blogs() {
    const router = useRouter();

    const handleRoute = () => {
        router.push("/blogs");
    }

  return (
    <div className='flex flex-col items-center justify-start gap-2 pt-2 md:px-20 px-8 pb-20 min-h-screen relative'>
        <div className='absolute inset-0 bg-[#0a0a0a] opacity-80'></div>
        <div className="flex flex-col items-center justify-center my-12 relative z-10">
            <div className="w-6 h-10 border-2 border-[#6df2db] rounded-full shadow-lg flex items-start justify-center cursor-pointer">
            <div className='w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] mt-2 rounded-full bg-[#6df2db]'></div>
            </div>
            <div className="w-px h-10 border-l-2 border-dashed border-white-400 mt-2"></div>
            <div className='w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] mt-2 rounded-full bg-white'></div>
        </div>
        <div className='flex flex-col items-center justify-start gap-2 text-center relative z-10 w-full'>
            <div className="relative inline-block">
              <p className='text-[34px] md:text-[46px] font-medium text-[#6df2db]' data-aos="fade-up">Latest Articles</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6df2db] rounded-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
              </div>
            </div>
            <p className='text-[16px] text-[#a9acae]' data-aos="fade-up">Here are some of the recent articles I have written.</p>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-y-2 border-[#696E71] py-10 mt-10'>
                <div>
                    <Image src="/ecfe_img.jpg" alt="EigenCloud for Anyone article cover" width={400} height={300} className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md object-cover' data-aos="flip-up" />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db] md:py-6' data-aos="fade-up">EigenCloud for Anyone</h3>
                    <p className='text-sm font-bold text-[#8b9093] mb-8' data-aos="fade-up" data-aos-delay="10">In this article, I will try to build explanations step-by-step, starting with the basics before moving to more complex aspects. I respect that everyone has different backgrounds and expertise levels; hence, the goal with this article is to meet people where they are and help them understand concepts in a way that makes sense to them. So whether you’re a complete beginner or just approaching the topic from a different angle, this article is for you. 🚀</p>
                    <Link href="https://medium.com/@roheemahabo/eigencloud-for-anyone-6a84bada6f88" className='flex items-center justify-start cursor-pointer' data-aos="fade-up" data-aos-delay="20">
                        <p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p>
                        <Image src="/readmore.svg" alt="Arrow icon" width={20} height={16} />
                    </Link>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] py-10'>
                <div>
                    <Image src="/tscgiwih_img.webp" alt="ERC-20 tokens article cover" width={400} height={300} className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md object-cover' data-aos="flip-up" />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db] md:py-6' data-aos="fade-up">The Smart Contract Integration Guide I Wish I Had</h3>
                    <p className='text-sm font-bold text-[#8b9093] mb-8' data-aos="fade-up" data-aos-delay="10">In this guide, I’ll walk you through how to integrate your Solidity smart contract with a Next.js frontend using Wagmi, a React library designed for smart contract interactions. I’ll keep the process as simple and straightforward as possible to make it easy to follow.</p>
                    <Link href="https://medium.com/@roheemahabo/the-smart-contract-integration-guide-i-wish-i-had-f099b0989132" className='flex items-center justify-start cursor-pointer' data-aos="fade-up" data-aos-delay="20">
                        <p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p>
                        <Image src="/readmore.svg" alt="Arrow icon" width={20} height={16} />
                    </Link>
                </div>
            </div>
            <button className='flex items-center justify-between gap-4 bg-[#6ff6d7] py-4 px-8 text-[#000] rounded-full font-medium mt-14 transition-transform transform hover:scale-105' onClick={handleRoute} data-aos="fade-up" data-aos-delay="40">
                <p>View More</p>
                <Image src="/view.svg" alt="View more icon" width={24} height={24} />
            </button>
        </div>

    </div>
  )
}
