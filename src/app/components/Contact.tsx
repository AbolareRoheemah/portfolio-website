'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        message?: string;
    }>({});
    const [status, setStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({
        type: null,
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors: typeof errors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error for this field when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors({
                ...errors,
                [name]: undefined
            });
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    message: formData.message,
                    to_name: 'Roheemah',
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (result.text === 'OK') {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully.'
                });
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });

                // Clear the success message after 5 seconds
                setTimeout(() => {
                    setStatus({ type: null, message: '' });
                }, 3000);
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: `Oops! ${error}. Please try again later.`
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className='flex flex-col items-center justify-start gap-2 pt-2 px-8 md:px-20 pb-20 min-h-screen relative bg-[#0D1117]'>
            <div className="flex flex-col items-center justify-center my-12 relative z-10">
                <div className="w-6 h-10 border-2 border-[#6df2db] rounded-full shadow-lg flex items-start justify-center cursor-pointer">
                    <div className='w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] mt-2 rounded-full bg-[#6df2db]'></div>
                </div>
                <div className="w-px h-10 border-l-2 border-dashed border-white-400 mt-2"></div>
                <div className='w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] mt-2 rounded-full bg-white'></div>
            </div>
            <div className='flex flex-col items-center justify-start gap-2 text-center w-full relative z-10'>
                <div className="relative inline-block">
                    <p className='text-[34px] md:text-[46px] font-medium text-[#6df2db]' data-aos="fade-up">Contact</p>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6df2db] rounded-full">
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
                    </div>
                </div>
                <p className='text-[16px] text-[#a9acae]' data-aos="fade-up">Have an amazing project? Reach out, let&apos;s talk!</p>

                {/* Social DM Alternatives */}
                <div className='flex items-center justify-center gap-6 mt-6' data-aos="fade-up">
                    <Link
                        href="https://www.linkedin.com/in/abolareroheemah/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center gap-2 px-4 py-2 bg-[#0077B5] rounded-full hover:bg-[#006399] transition-colors'
                    >
                        <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                        <span className='text-sm'>Message on LinkedIn</span>
                    </Link>
                    <Link
                        href="https://x.com/Rhorheeymarh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] rounded-full hover:bg-[#1a8cd8] transition-colors'
                    >
                        <Image src="/x.svg" alt="Twitter/X" width={20} height={20} />
                        <span className='text-sm'>DM on X</span>
                    </Link>
                </div>

                <div className='flex flex-col items-center w-full'>
                    <div className='rounded-tl-[50px] rounded-br-[50px] border-2 border-[#6df2db] w-[max-content] py-2 px-8 mt-10 mb-8' data-aos="flip-up">
                        <h3 className='text-[24px] md:text-[40px] text-[#6df2db]'>Send Me A Message</h3>
                    </div>
                    
                    {/* Status Message */}
                    {status.message && (
                        <div className={`w-full md:w-[70%] p-4 mb-4 rounded-lg ${
                            status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                            {status.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className='w-full md:w-[70%] mt-10'>
                        <div className='flex flex-col md:flex-row items-center justify-between md:gap-24 gap-8 w-full'>
                            <div className='flex flex-col w-full' data-aos="fade-up">
                                <label htmlFor="name" className='text-left mb-4 text-[#2f7267]'>Your name*</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Enter your name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={`border-b ${errors.name ? 'border-red-500' : 'border-[#6df2db]'} bg-transparent focus:outline-none text-[#a9acae] pb-2`}
                                />
                                {errors.name && <span className='text-red-500 text-sm mt-2'>{errors.name}</span>}
                            </div>
                            <div className='flex flex-col w-full' data-aos="fade-up">
                                <label htmlFor="email" className='text-left mb-4 text-[#2f7267]'>Your email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Enter your email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={`border-b ${errors.email ? 'border-red-500' : 'border-[#6df2db]'} bg-transparent focus:outline-none text-[#a9acae] pb-2`}
                                />
                                {errors.email && <span className='text-red-500 text-sm mt-2'>{errors.email}</span>}
                            </div>
                        </div>
                        <div className='flex flex-col w-full mt-10' data-aos="fade-up" data-aos-delay="20">
                            <label htmlFor="message" className='text-left mb-4 text-[#2f7267]'>Your message*</label>
                            <textarea
                                name="message"
                                placeholder='Enter your message'
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className={`border-b ${errors.message ? 'border-red-500' : 'border-[#6df2db]'} bg-transparent focus:outline-none text-[#a9acae] pb-2 resize-none`}
                            />
                            {errors.message && <span className='text-red-500 text-sm mt-2'>{errors.message}</span>}
                        </div>

                        <div className='flex justify-center mt-14' data-aos="fade-up" data-aos-delay="40">
                            <button 
                                type='submit' 
                                disabled={isSubmitting}
                                className='flex items-center justify-between gap-4 bg-[#6ff6d7] py-4 px-8 text-[#000] rounded-full font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                <p>{isSubmitting ? 'Sending...' : 'Send Message'}</p>
                                <img src="/view.svg" alt="" width={24} height={24} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}