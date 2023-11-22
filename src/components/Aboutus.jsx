import React from 'react'

import Footer from './Footer'
import Navbar from './Navbar'

export default function Aboutus() {
  return (
    <div>

      <Navbar />

      <div className='max-w-6xl mx-auto flex gap-4 py-20 md:flex-row flex-col md:px-0 px-8'>
        <div className='md:w-2/4 pt-12 pl-4'>
          <h1 className='text-4xl font-bold leading-tight'>Mr. Fuad Muhammad Shorfuddin - A Visionary Leader in Digital Connectivity</h1>
          <p className='pt-8'>As the founder and CEO of FISSA since its inception in 2000, Mr. Fuad Muhammad Shorfuddin has been at the forefront of revolutionizing internet connectivity in Dhaka and beyond. His leadership has been instrumental in ensuring that the company consistently delivers high-quality services to its clientele.
          </p>
          <p>But his contributions to the world of internet services don't stop there. Mr. Shorfuddin holds the esteemed position of Director at the Internet Service Provider Association of Bangladesh (ISPAB), a testament to his expertise and influence in the industry.</p>
          <p>Furthermore, as the President of the Local Broadband Network Owner Association (LBNOA), he champions the cause of local broadband providers, ensuring they have a voice and platform to thrive in an ever-evolving digital landscape.</p>
          <p>Under his guidance, both FISSA and the broader internet community in Bangladesh have seen unprecedented growth and success. His vision, dedication, and commitment to excellence make him a true luminary in the field.</p>
          <p>Mr. Fuad Muhammad Shorfuddin</p>
          <p className=''>Owner & CEO, Fissa Communication</p>
        </div>
        <div className='md:w-2/4 pt-20 justify-center'>
          <img className='h-3/4 mt-6 ml-10' src="/images/Fuad.jpg" alt="IMAGE" />
        </div>
      </div>

      <Footer />
    </div>
  )
}