import React from 'react'
import { footerData } from '../../globalStore'
import { BasilPhoneInOutline, FaFacebookOfficial, FaInstagram, FaLinkedinSquare, IcOutlineEmail } from './FooterIcons'

const Footer = () => {
  return (
    <div className='flex flex-col text-center bg-main pb-2'>
        <div className=' text-text-light flex flex-col md:flex-row justify-evenly items-center md:h-[350px]'>
            {/* GET IN TOUCH section */}
            <div className='py-8 px-6 flex flex-col justify-center items-center gap-6'>
                <h2 className='text-3xl font-bold tracking-wide '>
                    {footerData.title}
                </h2>
                <p className='text-lg max-w-[300px]'>
                    {footerData.body}
                </p>
                <div className='fill-accent flex gap-5 justify-start'>
                    <a className='w-10 h-10 duration-500 hover:fill-text-light hover:scale-110 hover:cursor-pointer'>
                        <FaFacebookOfficial  />
                    </a>
                    <a href='https://www.instagram.com/bennett.humphrey/' target='_blank' className='w-10 h-10 duration-500 hover:fill-text-light hover:scale-110 hover:cursor-pointer'>
                        <FaInstagram  />
                    </a>
                    <a className='w-10 h-10 duration-500 hover:fill-text-light hover:scale-110 hover:cursor-pointer'>
                        <FaLinkedinSquare  />
                    </a>
                </div>
            </div>
            {/* Phone & Email section */}
            <div className='fill-accent flex gap-8 justify-evenly relative lg:h-[200px]'>
                <a href='https://bennetthumphrey.com/' target='_blank' className='group'>
                    <div className='bg-slate-700 relative w-[35vw] h-[35vw] flex flex-col items-center justify-center
                                    rounded-tl-[20px] rounded-br-[20px] z-10 max-w-[200px] max-h-[200px] md:w-[150px] md:h-[150px] md:top-[80px]
                                    group-hover:translate-x-[-10px] group-hover:translate-y-[-10px] duration-500
                                    lg:top-0 group-hover:fill-text-light'>
                        <div className='w-10 h-10'>
                            <BasilPhoneInOutline  />
                        </div>
                        <p>Link text</p>
                    </div>
                    <div className='bg-slate-800 relative -top-[45%] left-[10%] w-[35vw] h-[35vw] z-0
                                    rounded-tl-[20px] rounded-br-[20px] max-w-[200px] max-h-[200px] md:w-[150px] md:h-[150px] md:-top-[50px]
                                    lg:-top-[130px]'/>
                </a>
                <a href='https://bennetthumphrey.com/' target='_blank' className='group'>
                    <div className='bg-slate-700 relative w-[35vw] h-[35vw] flex flex-col items-center justify-center
                                    rounded-tl-[20px] rounded-br-[20px] z-10 max-w-[200px] max-h-[200px] md:w-[150px] md:h-[150px] md:top-[80px]
                                    group-hover:translate-x-[-10px] group-hover:translate-y-[-10px] duration-500
                                    lg:top-0 group-hover:fill-text-light'>
                        <div className='w-10 h-10'>
                            <IcOutlineEmail  />
                        </div>
                        <p>Link text</p>
                    </div>
                    <div className='bg-slate-800 relative -top-[45%] left-[10%] w-[35vw] h-[35vw] z-0
                                    rounded-tl-[20px] rounded-br-[20px] max-w-[200px] max-h-[200px] md:w-[150px] md:h-[150px] md:-top-[50px]
                                    lg:-top-[130px]'/>
                </a>
            </div>
        </div>
        <a 
            target='_blank'
            href='https://bennetthumphrey.com/#projectShowcase'
            className='h-10 w-4/5 m-auto md:text-xl text-menu hover:text-accent hover:scale-125 duration-300 hover:cursor-pointer'>
                Site by BennettHumphrey.com
        </a>
    </div>
  )
}

export default Footer