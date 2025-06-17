import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='bg-[#f2545b] h-cover w-full pt-[6rem] px-4 pb-[2rem]'>
  <div className='flex flex-col w-full items-center gap-6'>
    <h1 className='text-white font-bold text-3xl sm:text-4xl md:text-5xl text-center'>
      NEPAL's trusted Roommate finder
    </h1>
    <p className='text-white text-lg sm:text-xl md:text-2xl text-center'>
      Free to List, Search and Communicate
    </p>

    <div className='flex flex-col md:flex-row items-center justify-center gap-8 mt-8 w-full max-w-[1000px]'>
      {/* Card 1 */}
     <div className='w-[24rem] min-w-[24rem] bg-white h-[6rem] rounded-lg px-4'>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[1.2rem] font-bold'>Need a Roommate?</h2>
                         <Link to="/roomlisting"><button className='bg-[#1e95a6] px-4 py-[4px] rounded-lg text-white'>List Your Room →</button>
                       </Link>
                    </div>
                        <img src='girl.png' alt='girl' className='h-[11rem] my-[-2.6rem] object-contain'/>
                </div>
            </div>

              <div className='w-[24rem] min-w-[24rem] bg-white h-[6rem] rounded-lg px-4'>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[1.2rem] font-bold'>Looking for a place?</h2>
                       <Link to="/roomlook"> <button className='bg-[#ff9767] px-4 py-[4px] rounded-lg text-white'>Create Your Profile →</button></Link>
                    </div>
                        <img src='home.png' alt='house' className='h-[6rem] object-contain'/>
                </div>
            </div>
    </div>
  </div>
</div>

  )
}

export default Hero
