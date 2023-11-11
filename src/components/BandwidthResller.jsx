import React from 'react'

import Footer from './Footer'
import Navbar from './Navbar'

export default function BandwidthReseller() {
  return (
    <div>
        <Navbar/>
        
        <div className='max-w-6xl mx-auto flex gap-4 py-20 md:flex-row flex-col xl:px-0 px-8 items-center justify-center' id='about-us'>
            <div className='md:w-2/4 pt-12 pl-4'>
                <h1 className='text-4xl font-bold leading-tight'>BANDWIDTH RESELLER</h1>
                <p className='pt-8'>Sylnet has been one of the leading internet service providers in Sylhet, Bangladesh. At Sylnet we are committed to providing the highest quality services to you. we provide faster internet connection for home and corporate users according to the need of customer’s aspiration.We have 17 years experienced and expert team to provide any solutions about broadband internet connectivity within a short time. we are currently serving more than 155 Corporate and more than 7,000 Home users.</p>
                <p className='pt-8'>John Doe</p>
                <p className=''>CEO</p>
            </div>
            <div className='md:w-2/4 pt-6'>
                <img className='h-3/4'src="/images/card_two.png" alt="IMAGE" />
            </div>
        </div>

        <Footer/>
    </div>
  )
}
