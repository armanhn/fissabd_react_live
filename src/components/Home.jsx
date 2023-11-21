import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';
import { FaBuilding, FaEarthAmericas } from 'react-icons/fa6'
import { IoHome, IoWifi } from "react-icons/io5";
import { FcCheckmark } from 'react-icons/fc'
import { BsBoxFill } from 'react-icons/bs'
import Navbar from './Navbar';
import Footer from './Footer'
import Header from './Header';

export default function Home() {

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
    <>
      <Header />
      <Navbar />
      <div className="w-full">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='w-full h-560' src="/images/banner1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-560' src="/images/banner2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-560' src="/images/banner3.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='bg-gradient-to-r from-gOne to-gTwo w-full '>
        <div className='bg-cover bg-no-repeat h-auto' style={{ backgroundImage: "url('/images/cloud.png')", backgroundPosition: 'center 20px' }}>
          <div className='flex justify-center items-center xl:text-left text-center max-w-6xl mx-auto xl:px-0 px-8'>
            <div className='w-3/4 pb-40 -mt-12'>
              <span className=''>Starting at ৳800/month</span>
              <h1 className='sm:text-4xl text-2xl font-bold mt-8'>Lightning-Fast Connectivity & The Future of Reliable 24/7 Internet Performance</h1>
              <p className=''>Recognized as Dhaka city's most dependable local internet service provider, FISSA has been bridging digital divides since July 2001. Our mission? Delivering high-speed broadband at affordable rates, right to the doorsteps of our cherished local community.</p>
              <div className='mt-8'>
                <button className='bg-green text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>SEE OUR PLANS</button>
              </div>
            </div>
            <div className='md:flex hidden items-center justify-center w-1/4 h-2/5 py-8'>
              <img className="" src="/images/rocket.png" alt="FISSA BD" />
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div id="section-1" className='max-w-6xl mx-auto text-center py-20 xl:px-0 px-8'>
          <div data-aos="zoom-in" className='flex items-center flex-col gap-3 pt-4'>
            <h1 className='text-4xl font-bold leading-tight'> Our Services</h1>
            <div className="w-36 h-1.5 rounded-lg bg-green"></div>
          </div>

          <p data-aos="zoom-in" className='pt-12'>Whether you're a bustling corporation or a modern household, FISSA has the perfect package designed just for you. Dive into our diverse range of services, from corporate to home internet solutions. And the cherry on top? Every connection comes with a complimentary optical fibre upgrade, ensuring you experience the pinnacle of speed and reliability.</p>
          <div className='flex flex-wrap justify-center pt-12 gap-10'>

            <div data-aos="zoom-in" data-aos-duration="1500" className='w-80  h-80 p-7 bg-white border-2 rounded-xl border-grey hover:border-green shadow-lg hover:cursor-pointer' onClick={navigateCorporateInternet}>
              <FaBuilding className='text-6xl mx-auto' />
              <h3 className='text-xl font-bold pt-7 '>Corporate Internet</h3>
              <p className='pt-5'>In addition to broadband internet services, we help our clients build, connect, operate and maintain their own SOHO or office network.</p>
            </div>

            <div data-aos="zoom-in" data-aos-duration="1500" className='w-80 h-80 p-7 bg-white border-2 border-grey hover:border-green rounded-xl shadow-lg hover:cursor-pointer' onClick={navigateHomeInternet}>
              <IoHome className='text-6xl mx-auto' />
              <h3 className='text-xl font-bold pt-7'>Home Internet</h3>
              <p className='pt-4'>Experience seamless browsing and streaming with our tailored home packages. Fast, reliable, and supported by a dedicated customer care team.</p>
            </div>

            <div data-aos="zoom-in" data-aos-duration="1500" className='w-80 h-80 p-7 bg-white border-2 border-grey hover:border-green rounded-xl shadow-lg hover:cursor-pointer' onClick={navigateBandwidthReseller}>
              <IoWifi className='text-6xl mx-auto' />
              <h3 className='text-xl font-bold pt-7'>Bandwidth Reseller</h3>
              <p className='pt-4'>Expand your reach with our bandwidth reselling solutions. Reliable and high-speed options for ISPs, enhancing customer connectivity.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto text-center py-20 md:px-0 px-8' id="section-4">
        <div data-aos="fade-up" className='flex items-center flex-col gap-3 pt-4'>
          <h1 className='text-4xl font-bold leading-tight'> Our Packages</h1>
          <div className="w-40 h-1.5 rounded-lg"></div>
        </div>
        <p data-aos="zoom-in" className='pt-12'>Dive into a world of tailored internet solutions with FISSA. Our diverse range of packages is designed to cater to every need, from the casual browser to the data-intensive user. Whether you're a home user or a large enterprise, we've got a plan that's just right for you. Experience seamless connectivity, top-notch customer support, and the promise of a better digital tomorrow with our curated internet packages</p>

        <div className='flex flex-wrap justify-center pt-12 gap-10'>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div data-aos="zoom-in-right" data-aos-duration="1500" className='w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'>
                <BsBoxFill className='text-5xl mx-auto' />
                <h3 className='text-xl font-bold pt-7'>SILVER</h3>
                <p className=' text-3xl text-green'>৳3,000</p>
                <p >12 Mbps Internet Speed</p>
                <p > 35 Mbps Facebook Speed</p>
                <p > 35 Mbps YouTube Speed</p>
                <p >BDIX Speed Unlimited</p>
                <p >Movies, IPTV & Torrent Unlimited</p>
                <p >24/7 Support</p>
                <button className=' mt-5 bg-text-color text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>Get Started</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div data-aos="zoom-in-up" data-aos-duration="1500" className='w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'>
                <BsBoxFill className='text-5xl mx-auto' />
                <h3 className='text-xl font-bold pt-7'>GOLD</h3>
                <p className=' text-3xl text-green'>৳5,000</p>
                <p > 20 Mbps Internet Speed</p>
                <p > 35 Mbps Facebook Speed</p>
                <p > 35 Mbps YouTube Speed</p>
                <p >BDIX Speed Unlimited</p>
                <p >Movies, IPTV & Torrent Unlimited</p>
                <p >24/7 Support</p>
                <button className=' mt-5 bg-text-color text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>Get Started</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div data-aos="zoom-in-up" data-aos-duration="1500" className='w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'>
                <BsBoxFill className='text-5xl mx-auto' />
                <h3 className='text-xl font-bold pt-7'>GOLD</h3>
                <p className=' text-3xl text-green'>৳5,000</p>
                <p > 20 Mbps Internet Speed</p>
                <p > 35 Mbps Facebook Speed</p>
                <p > 35 Mbps YouTube Speed</p>
                <p >BDIX Speed Unlimited</p>
                <p >Movies, IPTV & Torrent Unlimited</p>
                <p >24/7 Support</p>
                <button className=' mt-5 bg-text-color text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>Get Started</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div data-aos="zoom-in-up" data-aos-duration="1500" className='w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'>
                <BsBoxFill className='text-5xl mx-auto' />
                <h3 className='text-xl font-bold pt-7'>GOLD</h3>
                <p className=' text-3xl text-green'>৳5,000</p>
                <p > 20 Mbps Internet Speed</p>
                <p > 35 Mbps Facebook Speed</p>
                <p > 35 Mbps YouTube Speed</p>
                <p >BDIX Speed Unlimited</p>
                <p >Movies, IPTV & Torrent Unlimited</p>
                <p >24/7 Support</p>
                <button className=' mt-5 bg-text-color text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>Get Started</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div data-aos="zoom-in-up" data-aos-duration="1500" className='w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'>
                <BsBoxFill className='text-5xl mx-auto' />
                <h3 className='text-xl font-bold pt-7'>GOLD</h3>
                <p className=' text-3xl text-green'>৳5,000</p>
                <p > 20 Mbps Internet Speed</p>
                <p > 35 Mbps Facebook Speed</p>
                <p > 35 Mbps YouTube Speed</p>
                <p >BDIX Speed Unlimited</p>
                <p >Movies, IPTV & Torrent Unlimited</p>
                <p >24/7 Support</p>
                <button className=' mt-5 bg-text-color text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>Get Started</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div data-aos="zoom-in-up" data-aos-duration="1500" className='w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'>
                <BsBoxFill className='text-5xl mx-auto' />
                <h3 className='text-xl font-bold pt-7'>GOLD</h3>
                <p className=' text-3xl text-green'>৳5,000</p>
                <p > 20 Mbps Internet Speed</p>
                <p > 35 Mbps Facebook Speed</p>
                <p > 35 Mbps YouTube Speed</p>
                <p >BDIX Speed Unlimited</p>
                <p >Movies, IPTV & Torrent Unlimited</p>
                <p >24/7 Support</p>
                <button className=' mt-5 bg-text-color text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>Get Started</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div data-aos="zoom-in-up" data-aos-duration="1500" className='w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'>
                <BsBoxFill className='text-5xl mx-auto' />
                <h3 className='text-xl font-bold pt-7'>GOLD</h3>
                <p className=' text-3xl text-green'>৳5,000</p>
                <p > 20 Mbps Internet Speed</p>
                <p > 35 Mbps Facebook Speed</p>
                <p > 35 Mbps YouTube Speed</p>
                <p >BDIX Speed Unlimited</p>
                <p >Movies, IPTV & Torrent Unlimited</p>
                <p >24/7 Support</p>
                <button className=' mt-5 bg-text-color text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>Get Started</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className='max-w-6xl mx-auto flex md:flex-row flex-col py-20 md:px-0 px-8'>
        <div className='md:w-2/4 pt-6'>
          <img src="/images/card_onev2.png" alt="IMAGE" />
        </div>
        <div className='md:w-2/4 pt-12 pr-4'>
          <h1 className='text-4xl font-bold leading-tight'>Benefits of Using Our Home and Corporate Internet Services</h1>
          <p className='pt-8'>Choose FISSA for unparalleled internet solutions tailored for both homes and businesses. Here's why you should trust us:</p>
          <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1' />100% Connection Uptime: We prioritize your connectivity. Experience zero downtime and consistent high-speed access.</p>
          {/* <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1' />Robust Security: Safeguard your data with our advanced security protocols, ensuring a safe browsing environment.</p>
          <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1' />24/7 Customer Support: Our dedicated team is always available, ensuring any issues are addressed promptly.</p> */}
          <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1' />Flexible Plans: From SOHO to large enterprises, we offer packages that cater to every need and budget.</p>
          <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1' />Seamless Integration: Easily integrate our services into your existing infrastructure, with minimal disruption.</p>
          <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1' />Future-Ready Technology: Stay ahead with our state-of-the-art technology, ensuring you're always connected to the future.</p>
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
              <FaEarthAmericas className="text-9xl mx-auto text-white" />
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

    </>
  )
}
