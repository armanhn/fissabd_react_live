// import React from 'react'

// import Footer from './Footer'
// import Navbar from './Navbar'

// export default function CorporateInternet() {
//   return (
//     <div>
//       <Navbar />
//       <div className='flex items-center flex-col gap-2 pt-4'>
//         <h1 className='text-4xl font-bold leading-tight'> Corporate Internet</h1>
//       </div>
// <div className='max-w-6xl mx-auto flex gap-4 md:flex-row flex-col xl:px-0 px-8 items-center justify-center' id='about-us'>
//   <div className='md:w-2/4 pt-6'>
//     <img className='h-3/4' src="/images/card_two.png" alt="IMAGE" />
//   </div>
//   <div className='md:w-2/4 pt-12 pl-4'>
//     <p className='pt-8'>Sylnet has been one of the leading internet service providers in Sylhet, Bangladesh. At Sylnet we are committed to providing the highest quality services to you. we provide faster internet connection for home and corporate users according to the need of customer’s aspiration.We have 17 years experienced and expert team to provide any solutions about broadband internet connectivity within a short time. we are currently serving more than 155 Corporate and more than 7,000 Home users.</p>
//     <p className='pt-8'>John Doe</p>
//     <p className=''>CEO</p>
//   </div>
// </div>


//       <Footer />
//     </div>
//   )
// }

import React from 'react';
import { FaRocket, FaNetworkWired, FaLock } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const Feature = ({ Icon, title, description }) => {
  return (
    <div className="md:flex md:items-center gap-4">
      <div className="flex justify-center items-center p-6 bg-white rounded-full shadow-lg w-12 h-12 md:w-24 md:h-24">
        {/* Apply the custom CSS class here */}
        <Icon className="w-full h-full icon-color-custom" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};



export default function CorporateInternet() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className='flex items-center flex-col gap-2 pt-4'>
          <h1 className='text-4xl font-bold leading-tight'>Corporate Internet</h1>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-4 p-4'>
          {/* Adjust the size of the image container and image itself */}
          <div className='md:w-1/3 flex justify-center'>
            <img className='w-3/4 md:w-full h-auto' src="/images/card_two.png" alt="Corporate Internet Image" />
          </div>
          <div className='md:w-2/3 flex flex-col gap-4 items-center'>
            <Feature
              Icon={FaRocket}
              title="Ultra-Fast Internet"
              description="Experience blazing fast speeds with our dedicated fiber-optic connections, ensuring uninterrupted and efficient business operations."
            />
            <Feature
              Icon={FaNetworkWired}
              title="Reliable Network Infrastructure"
              description="Our robust network infrastructure guarantees high reliability and minimal downtime, keeping your business connected at all times."
            />
            <Feature
              Icon={FaLock}
              title="Advanced Security Solutions"
              description="Safeguard your corporate data with our state-of-the-art security measures, including firewalls, encryption, and 24/7 monitoring."
            />
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}
