"use client"
import React, {useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useRouter } from 'next/navigation';

export default function Blogs() {
    const router = useRouter();
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

  return (
    <div className='flex flex-col items-center justify-start gap-2 pt-2 md:px-20 px-8 pb-20 min-h-screen relative'>
        {/* <div className='absolute inset-0 bg-[#0a0a0a] opacity-80'></div> */}
        {/* <div className="flex flex-col items-center justify-center my-12 relative z-10">
            <div className="w-6 h-10 border-2 border-[#6df2db] rounded-full shadow-lg flex items-start justify-center cursor-pointer">
            <div className='w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] mt-2 rounded-full bg-[#6df2db]'></div>
            </div>
            <div className="w-px h-10 border-l-2 border-dashed border-white-400 mt-2"></div>
            <div className='w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] mt-2 rounded-full bg-white'></div>
        </div> */}
        <div className='flex flex-col items-center justify-start gap-2 text-center relative z-10 w-full mt-14'>
            <div className="relative inline-block" data-aos="fade-up">
              <p className='text-[34px] md:text-[46px] font-medium text-[#6df2db]'>Articles</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6df2db] rounded-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
              </div>
            </div>
            <p className='text-[16px] text-[#a9acae]' data-aos="fade-up">Here are some of the articles I have written over the years.</p>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-y-2 border-[#696E71] py-10 mt-10'>
                <div>
                    <Image src="/ecfe_img.jpg" alt="EigenCloud for Anyone article cover" width={400} height={300} className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md object-cover' data-aos="flip-up" />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db] md:py-6' data-aos="fade-up">EigenCloud for Anyone</h3>
                    <p className='text-sm font-bold text-[#8b9093] mb-8' data-aos="fade-up" data-aos-delay="10">In this article, I will try to build explanations step-by-step, starting with the basics before moving to more complex aspects. I respect that everyone has different backgrounds and expertise levels; hence, the goal with this article is to meet people where they are and help them understand concepts in a way that makes sense to them. So whether you&apos;re a complete beginner or just approaching the topic from a different angle, this article is for you. 🚀</p>
                    <Link href="https://medium.com/@roheemahabo/eigencloud-for-anyone-6a84bada6f88" className='flex items-center justify-start cursor-pointer' data-aos="fade-up" data-aos-delay="20">
                        <p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p>
                        <Image src="/readmore.svg" alt="Arrow icon" width={20} height={16} />
                    </Link>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 mt-10'>
            <div>
                    <Image src="/tscgiwih_img.webp" alt="ERC-20 tokens article cover" width={400} height={300} className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md object-cover' data-aos="flip-up" />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db] md:py-6' data-aos="fade-up">The Smart Contract Integration Guide I Wish I Had</h3>
                    <p className='text-sm font-bold text-[#8b9093] mb-8' data-aos="fade-up" data-aos-delay="10">In this guide, I&apos;ll walk you through how to integrate your Solidity smart contract with a Next.js frontend using Wagmi, a React library designed for smart contract interactions. I&apos;ll keep the process as simple and straightforward as possible to make it easy to follow.</p>
                    <Link href="https://medium.com/@roheemahabo/the-smart-contract-integration-guide-i-wish-i-had-f099b0989132" className='flex items-center justify-start cursor-pointer' data-aos="fade-up" data-aos-delay="20">
                        <p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p>
                        <Image src="/readmore.svg" alt="Arrow icon" width={20} height={16} />
                    </Link>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 mt-10'>
            <div>
                    <Image src="/wecmfaa_img.webp" alt="Why EigenLayer matters for African Projects article cover" width={400} height={300} className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md object-cover' data-aos="flip-up" />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db] md:py-6' data-aos="fade-up">Why EigenLayer matters for African Projects</h3>
                    <p className='text-sm font-bold text-[#8b9093] mb-8' data-aos="fade-up" data-aos-delay="10">Eigenlayer is a pioneering Ethereum-based protocol introducing the concept of restaking. It enables Ethereum validators to “restake” their staked ETH, extending security services to additional protocols and applications. If you don&apos;t understand what restaking is, check out my article breaking it down in layman terms here.</p>
                    <Link href="https://medium.com/@roheemahabo/why-eigenlayer-matters-for-african-projects-688803e10845" className='flex items-center justify-start cursor-pointer' data-aos="fade-up" data-aos-delay="20">
                        <p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p>
                        <Image src="/readmore.svg" alt="Arrow icon" width={20} height={16} />
                    </Link>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 mt-10'>
            <div>
                    <div className="flex items-center justify-center min-w-[20vw] md:w-[20vw] md:h-[30vh] w-full h-full rounded-md object-cover bg-[#23272a] text-[#6df2db] text-3xl font-bold" style={{height:"300px"}} data-aos="fade-up">
                        Libra
                    </div>
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db] md:py-6' data-aos="fade-up">Notes on Libra: Succinct Zero-Knowledge Proofs with Optimal Prover Computation</h3>
                    <p className='text-sm font-bold text-[#8b9093] mb-8' data-aos="fade-up" data-aos-delay="10">Libra is the first zero-knowledge proof system that has both optimal (i.e., linear) prover time and succinct proof size/verification time. It is proposed as an optimal version of the GKR prover (makes it faster and efficient), and it also makes GKR zero-knowledge.</p>
                    <Link href="https://medium.com/@roheemahabo/notes-on-libra-succinct-zero-knowledge-proofs-with-optimal-prover-computation-687608d1c295" className='flex items-center justify-start cursor-pointer' data-aos="fade-up" data-aos-delay="20">
                        <p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p>
                        <Image src="/readmore.svg" alt="Arrow icon" width={20} height={16} />
                    </Link>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 mt-10'>
            <div>
                    <Image src="/eltfd_img.webp" alt="EigenLayer Terminologies for Dummies article cover" width={400} height={300} className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md object-cover' data-aos="flip-up" />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db] md:py-6' data-aos="fade-up">EigenLayer Terminologies for Dummies</h3>
                    <p className='text-sm font-bold text-[#8b9093] mb-8' data-aos="fade-up" data-aos-delay="10">Let&apos;s be honest, blockchain terms are actually confusing. Now throw EigenLayer into the mix, and suddenly you&apos;re hearing things like “restaking,” “AVS,” and “slashing,” and you&apos;re like, what does that even mean? To make it even worse, most documentations are not written with total beginners in mind, but not to worry. If you&apos;re curious about EigenLayer but the jargon keeps chasing you away, this guide is for you.</p>
                    <Link href="https://medium.com/@roheemahabo/eigenlayer-terminologies-for-dummies-3a908b1383d6" className='flex items-center justify-start cursor-pointer' data-aos="fade-up" data-aos-delay="20">
                        <p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p>
                        <Image src="/readmore.svg" alt="Arrow icon" width={20} height={16} />
                    </Link>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 mt-10'>
            <div>
                    <Image src="/erc20pic.jpg" alt="Unpacking ERC-20 Tokens article cover" width={400} height={300} data-aos="flip-up" className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md object-cover' />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db]' data-aos="fade-up">Unpacking ERC-20 Tokens: Understanding Their Functions and Their Uses.</h3>
                    <p className='text-base text-[#8b9093] mb-8' data-aos="fade-up" data-aos-delay="10">ERC-20 (Ethereum Request for Comments-20) is the name used in the Ethereum community to refer to a standard (set of rules and functions) that guides the creation of fungible tokens on the Ethereum blockchain. Fungible tokens are tokens that are identical and can be exchanged on a one-for-one basis. In this article, I will go through the different functions contained in an ERc20 token standard and how they are used...</p>
                    <div className='flex items-center justify-start cursor-pointer' data-aos="fade-up" data-aos-delay="20">
                        <Link href="https://rhorheeymarh.hashnode.dev/unpacking-erc-20-tokens-understanding-their-functions-and-their-uses"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p></Link>
                        <Image src="/readmore.svg" alt="Arrow icon" width={24} height={16} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 mt-10'>
                <div>
                    <Image src="/sendtrsfcall.jpg" alt="Navigating Ether Transfers in Solidity article cover" width={400} height={300} data-aos="flip-up" className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md object-cover' />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db]' data-aos="fade-up">Navigating Ether Transfers in Solidity: Send, Transfer, and Call Explained.</h3>
                    <p className='text-base text-[#8b9093] mb-8' data-aos="fade-up" data-aos-delay="10">The birth of the Ethereum blockchain saw a significant change in the way we see and interact with blockchain technology. Ethereum extended to a large extent the capabilities of the first blockchain (Bitcoin), which was primarily created to facilitate peer-to-peer transactions of digital currencies.</p>
                    <div className='flex items-center justify-start cursor-pointer' data-aos="fade-up" data-aos-delay="20">
                        <Link href="https://rhorheeymarh.hashnode.dev/navigating-ether-transfers-in-solidity-send-transfer-and-call-explained"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p></Link>
                        <Image src="/readmore.svg" alt="Arrow icon" width={24} height={16} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 mt-10'>
                <div>
                    <Image src="/merkleimg.avif" alt="Efficient Data Management with Merkle Trees article cover" width={400} height={300} data-aos="flip-up" className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md object-cover' />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db]' data-aos="fade-up">Efficient Data Management and Verification With Merkle Trees.</h3>
                    <p className='text-base text-[#8b9093] mb-8' data-aos="fade-up" data-aos-delay="10">A merkle tree, also known as a hash tree, is a kind of data structure used to store data more efficiently and securely. It was named after Ralph Merkle, a computer scientist known for his pioneering work in the field of cryptography.</p>
                    <div className='flex items-center justify-start cursor-pointer' data-aos="fade-up" data-aos-delay="20">
                        <Link href="https://rhorheeymarh.hashnode.dev/efficient-data-management-and-verification-with-merkle-trees"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p></Link>
                        <Image src="/readmore.svg" alt="Arrow icon" width={24} height={16} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 mt-10'>
                <div>
                    <Image src="/insideEVM.jpg" alt="Inside the Ethereum Virtual Machine article cover" width={400} height={300} data-aos="flip-up" className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md object-cover' />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db]' data-aos="fade-up">Inside the Ethereum Virtual Machine: How Solidity Data Structures Are Stored in the EVM</h3>
                    <p className='text-base text-[#8b9093] mb-8' data-aos="fade-up" data-aos-delay="10">In this article, I examined how arrays, structs and mappings are stored on the EVM, but before we dive into this, lets talk about what storage looks like in the EVM. Understanding how EVM storage works is crucial for efficient smart contract development.</p>
                    <div className='flex items-center justify-start cursor-pointer' data-aos="fade-up" data-aos-delay="20">
                        <Link href="https://rhorheeymarh.hashnode.dev/inside-the-ethereum-virtual-machine-how-solidity-data-structures-are-stored-in-the-evm"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p></Link>
                        <Image src="/readmore.svg" alt="Arrow icon" width={24} height={16} />
                    </div>
                </div>
            </div>
            {/* <Link href="https://rhorheeymarh.hashnode.dev/">
                <button className='flex items-center justify-between gap-4 bg-[#6ff6d7] py-4 px-8 text-[#000] rounded-full font-medium mt-14'>
                    <p>View all on Hashnode</p>
                    <img src="/view.svg" alt="" width={24} height={24} />
                </button>
            </Link> */}
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 mt-10'>
                <div>
                    <Image src="/nftimage.webp" alt="ERC-721 and the NFT Revolution article cover" width={400} height={300} data-aos="flip-up" className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md object-cover' />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db]' data-aos="fade-up">ERC-721 and the NFT Revolution: A Deep Dive into the Standard Powering Non-Fungible Tokens</h3>
                    <p className='text-base text-[#8b9093] mb-8' data-aos="fade-up" data-aos-delay="10">NFTs (Non-Fungible Tokens) are one of the amazing innovations of the blockchain, and its applications has continued to expand into many industries like real estate, ticketing, music, art, decentralized identity, gaming, etc. The birth of NFTs came through the ERC-721 standard, which was inspired by the popular ERC-20 standard, a standard for fungible tokens widely used in the crypto world.</p>
                    <div className='flex items-center justify-start cursor-pointer' data-aos="fade-up" data-aos-delay="20">
                        <Link href="https://medium.com/@roheemahabo/erc-721-and-the-nft-revolution-a-deep-dive-into-the-standard-powering-non-fungible-tokens-3bf8a512143c"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p></Link>
                        <Image src="/readmore.svg" alt="Arrow icon" width={24} height={16} />
                    </div>
                </div>
            </div>
            <div className='flex sm:flex-row justify-center items-center gap-4'>
            <Link href="https://rhorheeymarh.hashnode.dev/" target="_blank" rel="noopener noreferrer">
                <button
                    className='flex items-center justify-between gap-4 bg-[#6ff6d7] py-4 px-8 text-[#000] rounded-full font-medium mt-14 transition-transform transform hover:scale-105'
                    type="button"
                    data-aos="fade-up"
                    data-aos-delay="40"
                >
                    <p>View on Hashnode</p>
                </button>
            </Link>
            <Link href="https://rhorheeymarh.hashnode.dev/" target="_blank" rel="noopener noreferrer">
                <button
                    className='flex items-center justify-between gap-4 border border-[#6ff6d7] py-4 px-8 text-[#6ff6d7] rounded-full font-medium mt-14 transition-transform transform hover:scale-105'
                    type="button"
                    data-aos="fade-up"
                    data-aos-delay="40"
                >
                    <p>View on Medium</p>
                </button>
            </Link>
            </div>
        </div>

    </div>
  )
}
