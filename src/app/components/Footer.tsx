import React from 'react'
import { GitHub } from '@mui/icons-material';
import Image from "next/image";
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-between px-4 py-6 border-t border-t-[#a9acae] md:flex-row md:px-20 bg-[#0D1117]'>
      
        <div className='text-center md:text-left'>
            <p className='text-[16px] text-[#a9acae]'>&copy; 2024 AbolareRoheemah. All Rights Reserved</p>
        </div>
        <div className='flex items-center justify-center gap-4 cursor-pointer mt-4 md:mt-0'>
            <Link href="https://x.com/Rhorheeymarh"><Image src="/x.svg" alt="Twitter logo" width={20} height={20} /></Link>
            <Link href="https://www.linkedin.com/in/abolareroheemah/"><Image src="/linkedin.svg" alt="LinkedIn logo" width={20} height={20} /></Link>
            <Link href="https://github.com/AbolareRoheemah"><GitHub className='text-[#6AECD9] w-8' /></Link>
        </div>
        <div className='text-center md:text-right mt-4 md:mt-0'>
            <p className='text-[16px] text-[#a9acae]'>Developed by <a href='https://github.com/AbolareRoheemah' className='text-[#2f7267]'>AbolareRoheemah</a></p>
        </div>
    </footer>
  )
}
