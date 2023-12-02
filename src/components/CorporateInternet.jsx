import { FaRocket, FaNetworkWired, FaLock } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import PricingPlan from './PricingPlan';
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';
import { FaMobileAlt } from "react-icons/fa";




const Feature = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 md:flex-row md:items-start md:text-left">
      <div className='box-border w-20 h-20 p-4 md:w-48 md:h-48'>
        <Icon className="w-full h-auto text-green" />
      </div>
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};






export default function CorporateInternet() {
  const navigate = useNavigate();

  const navigateHomeInternet = () => {
    navigate('/home-internet');
  };
  const navigateCorporateInternet = () => {
    navigate('/corporate-internet');
  };
  const navigateBandwidthReseller = () => {
    navigate('/bandwidth-reseller');
  };
  const navigateBkash = () => {
    navigate('/bkash');
  };
  const navigateRocket = () => {
    navigate('/rocket');
  };
  const navigateNagad = () => {
    navigate('/nagad');
  };
  const navigateUpay = () => {
    navigate('/upay');
  };


  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className='text-center py-6'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Corporate Internet</h1>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8 p-4'>
          <div className='w-full md:w-1/2 lg:w-1/2 flex justify-center'>
            <img className='w-full h-auto md:w-full h-auto' src="/images/img4.png" alt="Corporate Internet Image" />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4 items-center lg:pl-16'>
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
        <div className='flex flex-col justify-center mx-auto text-center p-6 gap-4 md:flex-row'>
          <PricingPlan
            title="SILVER"
            price="৳3,000"
            speed="12 Mbps"
            fbSpeed="35 Mbps"
            ytSpeed="35 Mbps"
            bdixSpeed="BDIX Speed Unlimited"
            extras="Movies, IPTV & Torrent Unlimited"
            support="24/7 Support"
            aosType="none"
          />
          <PricingPlan
            title="SILVER"
            price="৳3,000"
            speed="12 Mbps"
            fbSpeed="35 Mbps"
            ytSpeed="35 Mbps"
            bdixSpeed="BDIX Speed Unlimited"
            extras="Movies, IPTV & Torrent Unlimited"
            support="24/7 Support"
            aosType="none"
          />
          <PricingPlan
            title="SILVER"
            price="৳3,000"
            speed="12 Mbps"
            fbSpeed="35 Mbps"
            ytSpeed="35 Mbps"
            bdixSpeed="BDIX Speed Unlimited"
            extras="Movies, IPTV & Torrent Unlimited"
            support="24/7 Support"
            aosType="none"
          />

        </div>
      </div>

      <div className='bg-text-color' id='bill-payments'>
        <div className='max-w-6xl mx-auto text-center pt-20 pb-12 xl:px-0 px-8'>
          <div className='flex items-center flex-col gap-3' data-aos="zoom-in">
            <h1 className='text-4xl font-bold leading-tight text-white'> Pay your bills through Mobile banking</h1>
            <div className="w-40 h-1.5 rounded-lg bg-green"></div>
          </div>

          <div className='block sm:hidden py-12'>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='w-70 h-70 p-7 bg-white border-2 rounded-xl border-grey hover:border-green mx-auto hover:cursor-pointer' onClick={navigateBkash}>
                  <img src="/images/bkash2.png" alt="FISSA BD" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='w-70 h-70 p-7 bg-white border-2 border-grey hover:border-green rounded-xl mx-auto hover:cursor-pointer' onClick={navigateRocket}>
                  <img src="/images/rocketpay.png" alt="FISSA BD" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='w-70 h-70 p-7 bg-white border-2 border-grey hover:border-green rounded-xl mx-auto hover:cursor-pointer' onClick={navigateBkash}>
                  <img src="/images/nagad.png" alt="FISSA BD" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='w-70 h-70 p-7 bg-white border-2 border-grey hover:border-green rounded-xl mx-auto hover:cursor-pointer' onClick={navigateUpay}>
                  <img className="mx-auto" src="/images/upay.png" alt="FISSA BD" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* PAYMENT WEB */}

      <div className='bg-text-color sm:block hidden pb-20'>
        <div className='py-12 grid grid-cols-5 grid-rows-2 max-w-5xl mx-auto xl:px-0 px-8' id='payment'>
          <div data-aos="zoom-in-right" data-aos-duration="1500" className='flex justify-center items-center'>
            <div className='rounded-full w-36 h-36 overflow-hidden bg-white hover:border-green hover:border-4 hover:cursor-pointer flex items-center' onClick={navigateBkash}>
              <img src="/images/bkash2.png" alt="FISSA BD" />
            </div>
          </div>
          <div className=''>
            <div className=''>
            </div>
          </div>
          <div data-aos="zoom-in" className='flex justify-center items-center'>
            <div className=''>
              <FaMobileAlt className="text-9xl mx-auto text-white" />
            </div>
          </div>
          <div></div>
          <div data-aos="zoom-in-left" data-aos-duration="1500" className='flex justify-center items-center'>
            <div className='rounded-full w-36 h-36 overflow-hidden hover:border-green hover:border-4 hover:cursor-pointer bg-white flex items-center' onClick={navigateRocket}>
              <img src="/images/rocketpay.png" alt="FISSA BD" />
            </div>
          </div>
          <div></div>
          <div data-aos="fade-up" data-aos-duration="1500" className='flex justify-center items-center'>
            <div className='rounded-full w-36 h-36 overflow-hidden bg-white hover:border-green hover:border-4 hover:cursor-pointer flex items-center' onClick={navigateNagad}>
              <img src="/images/nagad.png" alt="FISSA BD" />
            </div>
          </div>
          <div className=''>
            <div className=''>

            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className='flex justify-center items-center'>
            <div className='rounded-full w-36 h-36 overflow-hidden bg-white hover:border-green hover:border-4 hover:cursor-pointer flex items-center' onClick={navigateUpay}>
              <img src="/images/upay.png" alt="FISSA BD" />
            </div>
          </div>
          <div className=''>
            <div className=''>

            </div>
          </div>

        </div>
      </div>


      <Footer />
    </div>
  );
}
