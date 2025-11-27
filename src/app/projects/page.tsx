"use client";
import React, { useState, useEffect } from "react";
import { WorkOutlineOutlined } from "@mui/icons-material";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Projects() {
  const [activeTab, setActiveTab] = useState("frontend");
  useEffect(() => {
    const aosConfig = {
      duration: 1000,
      once: false,
      offset: 100,
      useClassNames: true,
      easing: 'ease-out-cubic' as const
    }
    
    AOS.init(aosConfig)
  }, [])

  const frontendProjects = (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 flex-wrap md:gap-20 mt-10 mb-14">
      <Link data-aos="flip-left" href="https://vizientcoop.com/">
        <div className="relative group">
          <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
          <div className="leaf-shaped min-h-[60vh] pt-8 pb-12 px-4 md:px-6 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[360px]">
            <div className="flex flex-col items-center justify-start">
              <div
                className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] opacity-80 group-hover:opacity-100 bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                style={{
                  backgroundImage: "url('/vizientCoop.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="mt-6 text-[#9B9EA1]">
              <div className="flex items-start justify-start mb-4 gap-2">
                <p>
                  <WorkOutlineOutlined className="text-[#6AECD9]" />
                </p>
                <p className="text-left">
                  <span className="text-[#6df2db] text-[16px]">
                    Vizient Coop
                  </span>{" "}
                  - Assets management and investment platform
                </p>
              </div>
              <div className="flex items-start justify-start gap-4 mb-4">
                <img src="/link.svg" alt="" width={24} height={24} />
                https://vizientcoop.com
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link data-aos="flip-left" href="https://reablock.com/">
        <div className="relative group">
          <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
          <div className="leaf-shaped min-h-[60vh] pt-8 pb-12 px-4 md:px-6 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[360px]">
            <div className="flex flex-col items-center justify-start">
              <div
                className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] opacity-80 group-hover:opacity-100 bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                style={{
                  backgroundImage: "url('/reablock.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="mt-6 text-[#9B9EA1]">
              <div className="flex items-start justify-start mb-4 gap-2">
                <p>
                  <WorkOutlineOutlined className="text-[#6AECD9]" />
                </p>
                <p className="text-left">
                  <span className="text-[#6df2db] text-[16px]">Reablock</span> -
                  Real estate management website
                </p>
              </div>
              <div className="flex items-start justify-start gap-4 mb-4">
                <img src="/link.svg" alt="" width={24} height={24} />
                https://reablock.com
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link data-aos="flip-left" href="https://web3-learner.vercel.app/">
        <div className="relative group">
          <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
          <div className="leaf-shaped min-h-[60vh] pt-8 pb-12 px-4 md:px-6 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[360px]">
            <div className="flex flex-col items-center justify-start">
              <div
                className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] opacity-80 group-hover:opacity-100 bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                style={{
                  backgroundImage: "url('/web3L.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="mt-6 text-[#9B9EA1]">
              <div className="flex items-start justify-start mb-4 w-full gap-2">
                <p>
                  <WorkOutlineOutlined className="text-[#6AECD9]" />
                </p>
                <p className="text-left">
                  <span className="text-[#6df2db] text-[16px]">
                    Web3Learner
                  </span>{" "}
                  - The UI of a platform to learn web3 technologies and
                  languages
                </p>
              </div>
              <div className="flex items-start justify-start gap-4 mb-4">
                <img src="/link.svg" alt="" width={24} height={24} />
                https://web3-learner.vercel.app
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link data-aos="flip-left" href="https://smart-word-web.vercel.app/">
        <div className="relative group">
          <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
          <div className="leaf-shaped min-h-[60vh] pt-8 pb-12 px-4 md:px-6 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[360px]">
            <div className="flex flex-col items-center justify-start">
              <div
                className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] opacity-80 group-hover:opacity-100 bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                style={{
                  backgroundImage: "url('/smartword.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="mt-6 text-[#9B9EA1]">
              <div className="flex items-start justify-start mb-4 gap-2">
                <p>
                  <WorkOutlineOutlined className="text-[#6AECD9]" />
                </p>
                <p className="text-left">
                  <span className="text-[#6df2db] text-[16px]">Smart Word</span>{" "}
                  - A word management application
                </p>
              </div>
              <div className="flex items-start justify-start gap-4 mb-4">
                <img src="/link.svg" alt="" width={24} height={24} />
                https://smart-word-web.vercel.app
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link data-aos="flip-left" href="https://e-volt-drl8.vercel.app/">
        <div className="relative group">
          <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
          <div className="leaf-shaped min-h-[60vh] pt-8 pb-12 px-4 md:px-6 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[360px]">
            <div className="flex flex-col items-center justify-start">
              <div
                className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] opacity-80 group-hover:opacity-100 bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                style={{
                  backgroundImage: "url('/e-vot.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="mt-6 text-[#9B9EA1]">
              <div className="flex items-start justify-start mb-4 gap-2">
                <p>
                  <WorkOutlineOutlined className="text-[#6AECD9]" />
                </p>
                <p className="text-left">
                  <span className="text-[#6df2db] text-[16px]">E-Vot</span> - A
                  decentralized voting platform
                </p>
              </div>
              <div className="flex items-start justify-start gap-4 mb-4">
                <img src="/link.svg" alt="" width={24} height={24} />
                https://e-volt-drl8.vercel.app
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link data-aos="flip-left" href="https://github.com/AbolareRoheemah/NFT-Marketplace">
        <div className="relative group">
          <div
            className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform
                        -translate-x-[4px] -translate-y-[4px]"
          ></div>
          <div className="leaf-shaped min-h-[60vh] pt-8 pb-12 px-4 md:px-6 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[360px]">
            <div className="flex flex-col items-center justify-start">
              <div
                className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] opacity-80 group-hover:opacity-100
                                bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] hover:scale-105 transition-transform duration-300 ease-in-out
                                cursor-pointer"
                style={{
                  backgroundImage: "url('/nftimage.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="mt-6 text-[#9B9EA1]">
              <div className="flex items-start justify-start mb-4 gap-2">
                <p>
                  <WorkOutlineOutlined className="text-[#6AECD9]" />
                </p>
                <p className="text-left">
                  <span className="text-[#6df2db] text-[16px]">
                    NFT Marketplace
                  </span>{" "}
                  - Buy, sell, and trade NFTs on blockchain
                </p>
              </div>
              <div className="flex items-start justify-start gap-4 mb-4">
                <img src="/link.svg" alt="" width={24} height={24} />
                github.com/AbolareRoheemah
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link data-aos="flip-left" href="https://goshen.vercel.app/">
        <div className="relative group">
          <div
            className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-
                    [4px] -translate-y-[4px]"
          ></div>
          <div className="leaf-shaped min-h-[60vh] pt-8 pb-12 px-4 md:px-6 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[360px]">
            <div className="flex flex-col items-center justify-start">
              <div
                className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] opacity-80 group-hover:opacity-100 
                            bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] hover:scale-105 transition-transform duration-300 ease-in-out 
                            cursor-pointer"
                style={{
                  backgroundImage: "url('/goshen.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="mt-6 text-[#9B9EA1]">
              <div className="flex items-start justify-start mb-4 w-full  gap-2">
                <p>
                  <WorkOutlineOutlined className="text-[#6AECD9]" />
                </p>
                <p className="text-left">
                  <span className="text-[#6df2db] text-[16px]">Goshen</span> - A
                  platform to learn non-technical web3 technologies and skills
                </p>
              </div>
              <div className="flex items-start justify-start gap-4 mb-4">
                <img src="/link.svg" alt="" width={24} height={24} />
                https://goshen.vercel.app
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  const blockchainProjects = (
    <div className='flex flex-col items-center justify-start gap-2 text-center relative z-10 w-full'>
      <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-y-2 border-[#696E71] pb-10 pt-6 w-full mt-10'>
        <div className='text-left px-10'>
            <h3 className='text-[34px] text-[#6df2db]'>ERC-721 Token Contract</h3>
            <p className='text-base text-[#8b9093] mb-8'>In this contract, I wrote an ERC-721 contract from scratch. ERC-721 is a standard used in the Ethereum blockchain for creating non-fungible tokens (NFTs).</p>
            <div className='flex items-center justify-start cursor-pointer'>
                <Link href="https://gist.github.com/AbolareRoheemah/b7ddcdae28aa0510b7b18e10b397cc64"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>View on GitHub</p></Link>
                <img src="/readmore.svg" alt="" className='w-6 h-4' />
            </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 pt-6 w-full'>
        <div className='text-left px-10'>
            <h3 className='text-[34px] text-[#6df2db]'>Constant Product Automatic Market Maker (CPAMM) Contract</h3>
            <p className='text-base text-[#8b9093] mb-8'>This contract is an implementation of a CPAMM with features like swapping, adding and removing liquidity etc.</p>
            <div className='flex items-center justify-start cursor-pointer'>
                <Link href="https://gist.github.com/AbolareRoheemah/93aff48d65b24be2a155e99109bc1b2b"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>View on GitHub</p></Link>
                <img src="/readmore.svg" alt="" className='w-6 h-4' />
            </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 pt-6 w-full'>
        <div className='text-left px-10'>
            <h3 className='text-[34px] text-[#6df2db]'>Staking Contract</h3>
            <p className='text-base text-[#8b9093] mb-8'>This contract is an implementation of a staking mechanism that allows users to stake their tokens in a smart contract to earn rewards over time.</p>
            <div className='flex items-center justify-start cursor-pointer'>
                <Link href="https://gist.github.com/AbolareRoheemah/93aff48d65b24be2a155e99109bc1b2b"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>View on GitHub</p></Link>
                <img src="/readmore.svg" alt="" className='w-6 h-4' />
            </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 pt-6 w-full'>
        <div className='text-left px-10'>
            <h3 className='text-[34px] text-[#6df2db]'>Discrete Staking Contract</h3>
            <p className='text-base text-[#8b9093] mb-8'>This contract implements a unique staking mechanism that enables users to lock their tokens within a smart contract, thereby earning rewards based on their staking duration and amount.</p>
            <div className='flex items-center justify-start cursor-pointer'>
                <Link href="https://gist.github.com/AbolareRoheemah/dd6f0d6607fa37a86c7d82d5bf5036a5"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>View on GitHub</p></Link>
                <img src="/readmore.svg" alt="" className='w-6 h-4' />
            </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 pt-6 w-full'>
        <div className='text-left px-10'>
            <h3 className='text-[34px] text-[#6df2db]'>A Vault Contract</h3>
            <p className='text-base text-[#8b9093] mb-8'>This contract serves as a secure vault for users to deposit their tokens, enabling them to earn interest over time while maintaining control over their assets.</p>
            <div className='flex items-center justify-start cursor-pointer'>
                <Link href="https://gist.github.com/AbolareRoheemah/50556fb6eda0595f478219609c28d066#file-contracts-vault-sol"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>View on GitHub</p></Link>
                <img src="/readmore.svg" alt="" className='w-6 h-4' />
            </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 pt-6 w-full'>
        <div className='text-left px-10'>
            <h3 className='text-[34px] text-[#6df2db]'>An NFT Marketplace Contract</h3>
            <p className='text-base text-[#8b9093] mb-8'>This contract facilitates the buying, selling, and trading of non-fungible tokens (NFTs) on the blockchain. It allows users to create, list, and manage their digital assets, ensuring ownership and provenance through smart contract technology.</p>
            <div className='flex items-center justify-start cursor-pointer'>
                <Link href="https://github.com/AbolareRoheemah/NFT-Marketplace"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>View on GitHub</p></Link>
                <img src="/readmore.svg" alt="" className='w-6 h-4' />
            </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 pt-6 w-full'>
        <div className='text-left px-10'>
            <h3 className='text-[34px] text-[#6df2db]'>NFT-Based Airdrop Distribution Contract</h3>
            <p className='text-base text-[#8b9093] mb-8'>This contract enables airdrop distributions that require participants to hold specific non-fungible tokens (NFTs). It ensures that only eligible NFT holders can claim rewards, thereby enhancing the value and utility of the NFTs while promoting community engagement and loyalty.</p>
            <div className='flex items-center justify-start cursor-pointer'>
                <Link href="https://github.com/AbolareRoheemah/NFT-Gated_Airdrop"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>View on GitHub</p></Link>
                <img src="/readmore.svg" alt="" className='w-6 h-4' />
            </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 pt-6 w-full'>
        <div className='text-left px-10'>
            <h3 className='text-[34px] text-[#6df2db]'>NFT-Gated Event Management Contract</h3>
            <p className='text-base text-[#8b9093] mb-8'>This contract facilitates the organization and management of events that are exclusively accessible to holders of specific non-fungible tokens (NFTs). By requiring NFT ownership for entry, it not only enhances the exclusivity and desirability of the NFTs but also fosters a sense of community among participants, ensuring that rewards and experiences are reserved for dedicated supporters.</p>
            <div className='flex items-center justify-start cursor-pointer'>
                <Link href="https://github.com/AbolareRoheemah/NFT-gated-event-mgmt"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>View on GitHub</p></Link>
                <img src="/readmore.svg" alt="" className='w-6 h-4' />
            </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 pt-6 w-full'>
        <div className='text-left px-10'>
            <h3 className='text-[34px] text-[#6df2db]'>Multisig Contract</h3>
            <p className='text-base text-[#8b9093] mb-8'>This contract implements a multisignature mechanism that enhances security by requiring multiple approvals for transactions. It is designed to protect assets by ensuring that no single individual has complete control, thereby reducing the risk of unauthorized access and promoting collaborative decision-making among stakeholders.</p>
            <div className='flex items-center justify-start cursor-pointer'>
                <Link href="https://github.com/AbolareRoheemah/multisig-contract"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>View on GitHub</p></Link>
                <img src="/readmore.svg" alt="" className='w-6 h-4' />
            </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-start gap-2 pt-2 px-4 md:px-20 pb-20 min-h-screen relative">
      <div className="" data-aos="flip-up">
        <h1 className="text-center text-[60px] md:text-[98px] font-medium text-[#6df2db]">
          &lt;/&gt;
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 text-center relative z-10">
        <div className="relative inline-block" data-aos="flip-up">
          <p className="text-[34px] md:text-[46px] font-medium text-[#6df2db]">
            Projects
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6df2db] rounded-full">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
          </div>
        </div>
        <p className="text-[20px] text-[#a9acae]" data-aos="flip-up">
          Here are some of the projects I have worked on over the years.
        </p>

        <div className="flex space-x-4 mt-10" data-aos="flip-up">
          <button
            onClick={() => setActiveTab("frontend")}
            className="relative group pb-1"
          >
            <span
              className={`text-xl ${
                activeTab === "frontend"
                  ? "text-[#6AECD9]"
                  : "text-[#a9acae] hover:text-[#6AECD9]"
              }`}
            >
              Frontend
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#6AECD9] ${
                activeTab === "frontend"
                  ? "w-full"
                  : "w-0 transition-all duration-300 group-hover:w-full"
              }`}
            ></span>
          </button>
          <button
            onClick={() => setActiveTab("blockchain")}
            className="relative group pb-1"
          >
            <span
              className={`text-xl ${
                activeTab === "blockchain"
                  ? "text-[#6AECD9]"
                  : "text-[#a9acae] hover:text-[#6AECD9]"
              }`}
            >
              Blockchain
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#6AECD9] ${
                activeTab === "blockchain"
                  ? "w-full"
                  : "w-0 transition-all duration-300 group-hover:w-full"
              }`}
            ></span>
          </button>
        </div>

        {activeTab === "frontend" ? frontendProjects : blockchainProjects}
      </div>
    </div>
  );
}
