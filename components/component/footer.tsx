import Image from 'next/image'

export default function Footer(){
    return(<div className="w-11/12 border-t border-[#272727] my-16">
        <div className="border-b border-[#272727]">
            <div className='w-full grid grid-cols-12 md:gap-2 place-items-start gap-4 mt-16'>
                <div className='col-span-12 md:col-span-4 rubik text-lg font-semibold'>We Build Space Defense <div>Technology</div></div>
                <div className='flex flex-col justify-center items-start gap-1 col-span-6 md:col-span-2 text-sm text-white/50'>
                    <div className='text-white pb-2'>Toolbar</div>
                    <div className='hover:text-white cursor-pointer'>About us</div>
                    <div className='hover:text-white cursor-pointer'>Career</div>
                    <div className='hover:text-white cursor-pointer'>Team</div>
                    <div className='hover:text-white cursor-pointer'>Mission</div>
                    <div className='hover:text-white cursor-pointer'>News</div>
                    <div className='hover:text-white cursor-pointer'>Blog</div>
                </div>
                <div className='flex flex-col justify-center items-start gap-1 col-span-6 md:col-span-2 text-sm text-white/50'>
                    <div className='text-white pb-2'>Features</div>
                    <div className='hover:text-white cursor-pointer'>Security</div>
                    <div className='hover:text-white cursor-pointer'>Protection</div>
                    <div className='hover:text-white cursor-pointer'>Space Explore</div>
                    <div className='hover:text-white cursor-pointer'>Defence System</div>
                    <div className='hover:text-white cursor-pointer'>Experinment</div>
                </div>
                <div className='flex flex-col justify-center items-start col-span-6 md:col-span-2 text-sm text-white/50'>
                    <div className='text-white pb-2'>Usecases</div>
                    <div className='hover:text-white cursor-pointer'>School (soon)</div>
                    <div className='hover:text-white cursor-pointer'>Experinment Lab (soon)</div>
                    <div className='hover:text-white cursor-pointer'>Space Exploration (soon)</div>
                </div> 
                <div className='flex flex-col justify-center items-start gap-1 col-span-6 md:col-span-2 text-sm text-white/50'>
                    <div className='text-white pb-2'>Legal</div>
                    <div className='hover:text-white cursor-pointer'>Privacy Policy</div>
                    <div className='hover:text-white cursor-pointer'>Terms of Service</div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2 py-10">
                <div>Follow us</div>
                <div className='flex justify-start items-center gap-4'>
                    <a href="https://www.linkedin.com/company/wardstone/" target='_blank'><Image src={'/linkedin.svg'} alt="discord" height={20} width={20} /></a>
                    <a href="" target='_blank'><Image src={'/discord.svg'} alt="discord" height={20} width={20} /></a>
                    <a href="" target='_blank'><Image src={'/youtube.svg'} alt="discord" height={20} width={20} /></a>
                    <a href="" target='_blank'><Image src={'/twitter.svg'} alt="discord" height={20} width={20} /></a>
                    <a href="" target='_blank'><Image src={'/redit.svg'} alt="discord" height={20} width={20} /></a>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-between items-center pt-10 text-white/50 text-xs">
            <div>© 2025 Wardstone. All rights reserved.</div>
            <div>WARDSTONE</div>
        </div>
    </div>)
}