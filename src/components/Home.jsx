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
import { FaMobileAlt } from "react-icons/fa"
import Navbar from './Navbar';
import Footer from './Footer'
import Header from './Header';
import PricingPlan from './PricingPlan';
import { useScrollToTop } from './hooks/scroll';
export default function Home() {
  useScrollToTop();
  const navigate = useNavigate();

  const navigateHomeInternet = () => navigate('/home-internet');
  const navigateCorporateInternet = () => navigate('/corporate-internet');
  const navigateBandwidthReseller = () => navigate('/bandwidth-reseller');
  const navigateBkash = () => navigate('/bkash');
  const navigateRocket = () => navigate('/rocket');
  const navigateNagad = () => navigate('/nagad');
  const navigateUpay = () => navigate('/upay');

  const [activeTab, setActiveTab] = useState('corporate');

  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Script loading for voiceflow
    const script = document.createElement('script');
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '656ba5395061e600072a1c15' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };

    // Append the script to the document head
    document.head.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const TabButtons = () => (
    <div className="tabs-header py-4">
      <ul className="flex flex-col md:flex-row gap-4">
        {/* Buttons for each tab */}
        <button
          className={`tab-button ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${activeTab === 'corporate' ? 'bg-red text-white hover:text-gray-300' : 'text-black bg-white hover:text-red'}`}
          onClick={() => setActiveTab('corporate')}
        >
          Corporate Internet
        </button>
        <button
          className={`tab-button ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${activeTab === 'home' ? 'bg-red text-white hover:text-gray-300' : 'text-black bg-white hover:text-red'}`}
          onClick={() => setActiveTab('home')}
        >
          Home Internet
        </button>
        <button
          className={`tab-button ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${activeTab === 'reseller' ? 'bg-red text-white hover:text-gray-300' : 'text-black bg-white hover:text-red'}`}
          onClick={() => setActiveTab('reseller')}
        >
          Bandwidth Reseller
        </button>
      </ul>
    </div>
  );



  // Data for Corporate category
  const corporateData = [
    {
      title: "Corporate Gold",
      price: "৳15,000",
      speed: "80 Mbps",
      fbSpeed: "150 Mbps",
      ytSpeed: "150 Mbps",
      bdixSpeed: "Unlimited BDIX Speed",
      extras: "Priority Support, Dedicated IP",
      support: "24/7 Support",
      aosType: "fade-down"
    },
    {
      title: "Corporate Silver",
      price: "৳10,000",
      speed: "50 Mbps",
      fbSpeed: "100 Mbps",
      ytSpeed: "100 Mbps",
      bdixSpeed: "Unlimited BDIX Speed",
      extras: "Basic Support, 99% Uptime",
      support: "Regular Support",
      aosType: "fade-up"
    },

    {
      title: "Corporate Bronze",
      price: "৳8,000",
      speed: "30 Mbps",
      fbSpeed: "60 Mbps",
      ytSpeed: "60 Mbps",
      bdixSpeed: "Unlimited BDIX Speed",
      extras: "Basic Support, 95% Uptime",
      support: "Business Hours Support",
      aosType: "fade-right"
    },
    {
      title: "Corporate Iron",
      price: "৳5,000",
      speed: "30 Mbps",
      fbSpeed: "60 Mbps",
      ytSpeed: "60 Mbps",
      bdixSpeed: "Unlimited BDIX Speed",
      extras: "Basic Support, 95% Uptime",
      support: "Business Hours Support",
      aosType: "fade-right"
    }
  ];

  // Data for Home category
  const homeData = [

    {
      title: "Home Gold",
      price: "৳5,000",
      speed: "25 Mbps",
      fbSpeed: "50 Mbps",
      ytSpeed: "50 Mbps",
      bdixSpeed: "Unlimited BDIX Speed",
      extras: "IPTV, Unlimited Torrent",
      support: "24/7 Support",
      aosType: "fade-down"
    },
    {
      title: "Home Silver",
      price: "৳3,000",
      speed: "15 Mbps",
      fbSpeed: "30 Mbps",
      ytSpeed: "30 Mbps",
      bdixSpeed: "Unlimited BDIX Speed",
      extras: "Unlimited Downloads",
      support: "Regular Support",
      aosType: "fade-up"
    },
    {
      title: "Home Bronze",
      price: "৳2,500",
      speed: "10 Mbps",
      fbSpeed: "20 Mbps",
      ytSpeed: "20 Mbps",
      bdixSpeed: "Unlimited BDIX Speed",
      extras: "Basic Usage, Limited Downloads",
      support: "Business Hours Support",
      aosType: "fade-right"
    }
  ];

  // Data for Reseller category
  const resellerData = [

    {
      title: "Reseller Gold",
      price: "৳30,000",
      speed: "150 Mbps",
      fbSpeed: "300 Mbps",
      ytSpeed: "300 Mbps",
      bdixSpeed: "Unlimited BDIX Speed",
      extras: "Custom Packages, White Labeling",
      support: "24/7 Dedicated Support",
      aosType: "fade-down"
    },
    {
      title: "Reseller Silver",
      price: "৳20,000",
      speed: "100 Mbps",
      fbSpeed: "200 Mbps",
      ytSpeed: "200 Mbps",
      bdixSpeed: "Unlimited BDIX Speed",
      extras: "Bulk Bandwidth, Resale Options",
      support: "Priority Support",
      aosType: "fade-up"
    },
    {
      title: "Reseller Bronze",
      price: "৳15,000",
      speed: "75 Mbps",
      fbSpeed: "150 Mbps",
      ytSpeed: "150 Mbps",
      bdixSpeed: "Unlimited BDIX Speed",
      extras: "Standard Reseller Options",
      support: "Regular Support",
      aosType: "fade-right"
    }
  ];

  const CarouselComponent = ({ data }) => (
    <Swiper
      // slidesPerView={1}
      // centeredSlides={true}
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
          slidesPerView: 3,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <PricingPlan {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );



  return (
    <>
      <Header />
      <Navbar />
      <div className="w-full">
        <Swiper
          // slidesPerView={'auto'}
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='hidden md:block w-full h-560' src="/images/img1.png" />
            <img className='block md:hidden w-full h-560' src="/images/img-mobile-2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='hidden md:block w-full h-560' src="/images/img2.png" />
            <img className='block md:hidden w-full h-560' src="/images/img-mobile-1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='hidden md:block w-full h-560' src="/images/img3-bengali.png" />
            <img className='block md:hidden w-full h-560' src="/images/img-mobile-1.png" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='bg-gradient-to-r from-gOne to-gTwo w-full '>
        <div className='bg-cover bg-no-repeat h-auto' style={{ backgroundImage: "url('/images/cloud.png')", backgroundPosition: 'center 20px' }}>
          <div className='flex justify-center items-center xl:text-left text-center max-w-6xl mx-auto xl:px-0 px-8'>
            <div className='w-3/4 pb-40 -mt-12'>
              <span className='text-sm'>Starting at ৳800/month</span>
              <h1 className='sm:text-4xl text-2xl font-bold mt-8 text-red'>Lightning-Fast Connectivity & The Future of Reliable 24/7 Internet Performance</h1>
              <p className='text-sm'>Recognized as Dhaka city's most dependable local internet service provider, FISSA has been bridging digital divides since July 2001. Our mission? Delivering high-speed broadband at affordable rates, right to the doorsteps of our cherished local community.</p>
              <div className='mt-8'>
                <button className='bg-red text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>SEE OUR PLANS</button>
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
            <div className="w-36 h-1.5 rounded-lg bg-red"></div>
          </div>

          <p data-aos="zoom-in" className='pt-12'>Whether you're a bustling corporation or a modern household, FISSA has the perfect package designed just for you. Dive into our diverse range of services, from corporate to home internet solutions. And the cherry on top? Every connection comes with a complimentary optical fibre upgrade, ensuring you experience the pinnacle of speed and reliability.</p>
          <div className='flex flex-wrap justify-center pt-12 gap-10'>

            <div data-aos="zoom-in" data-aos-duration="1500" className='w-80  h-80 p-7 bg-white border-2 rounded-xl border-grey hover:border-red shadow-lg hover:cursor-pointer' onClick={navigateCorporateInternet}>
              <FaBuilding className='text-6xl mx-auto' />
              <h3 className='text-xl font-bold pt-7 '>Corporate Internet</h3>
              <p className='pt-5 text-sm'>In addition to broadband internet services, we help our clients build, connect, operate and maintain their own SOHO or office network.</p>
            </div>

            <div data-aos="zoom-in" data-aos-duration="1500" className='w-80 h-80 p-7 bg-white border-2 border-grey hover:border-red rounded-xl shadow-lg hover:cursor-pointer' onClick={navigateHomeInternet}>
              <IoHome className='text-6xl mx-auto' />
              <h3 className='text-xl font-bold pt-7'>Home Internet</h3>
              <p className='pt-4 text-sm'>Experience seamless browsing and streaming with our tailored home packages. Fast, reliable, and supported by a dedicated customer care team.</p>
            </div>

            <div data-aos="zoom-in" data-aos-duration="1500" className='w-80 h-80 p-7 bg-white border-2 border-grey hover:border-red rounded-xl shadow-lg hover:cursor-pointer' onClick={navigateBandwidthReseller}>
              <IoWifi className='text-6xl mx-auto' />
              <h3 className='text-xl font-bold pt-7'>Bandwidth Reseller</h3>
              <p className='pt-4 text-sm'>Expand your reach with our bandwidth reselling solutions. Reliable and high-speed options for ISPs, enhancing customer connectivity.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 text-center py-20 md:px-8' id="section-4">
        <div data-aos="fade-up" className='flex items-center flex-col gap-3 pt-4'>
          <h1 className='text-4xl font-bold leading-tight'> Our Packages</h1>
          <div className="w-36 h-1.5 rounded-lg bg-red"></div>
        </div>
        <p data-aos="zoom-in" className='pt-12'>Dive into a world of tailored internet solutions with FISSA. Our diverse range of packages is designed to cater to every need, from the casual browser to the data-intensive user. Whether you're a home user or a large enterprise, we've got a plan that's just right for you. Experience seamless connectivity, top-notch customer support, and the promise of a better digital tomorrow with our curated internet packages</p>

        <div className='tab-component'>
          <TabButtons />
          {activeTab === 'corporate' && <CarouselComponent data={corporateData} />}
          {activeTab === 'home' && <CarouselComponent data={homeData} />}
          {activeTab === 'reseller' && <CarouselComponent data={resellerData} />}
        </div>

      </div>

      <div className='max-w-6xl mx-auto px-4 flex md:flex-row flex-col py-20 md:px-8'>
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
            <div className="w-40 h-1.5 rounded-lg bg-red"></div>
          </div>

          <div className='block sm:hidden py-12'>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              {[
                { src: "/images/bkash2.png", alt: "bKash", onClick: navigateBkash },
                { src: "/images/rocketpay.png", alt: "Rocket", onClick: navigateRocket },
                { src: "/images/nagad.png", alt: "Nagad", onClick: navigateNagad },
                { src: "/images/upay.png", alt: "Upay", onClick: navigateUpay },
              ].map((paymentOption, index) => (
                <SwiperSlide key={index}>
                  <div className='w-90 h-90 p-7 flex justify-center items-center bg-white border-2 border-grey rounded-xl hover:border-red rounded-xl mx-auto hover:cursor-pointer' onClick={paymentOption.onClick}>
                    <img className="max-w-full max-h-full object-contain" src={paymentOption.src} alt={paymentOption.alt} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>


          </div>
        </div>
      </div>

      {/* PAYMENT WEB */}

      <div className='bg-text-color sm:block hidden pb-20'>
        <div className='py-12 grid grid-cols-5 grid-rows-2 max-w-5xl mx-auto xl:px-0 px-8' id='payment'>
          <div data-aos="zoom-in-right" data-aos-duration="1500" className='flex justify-center items-center'>
            <div className='rounded-full w-36 h-36 overflow-hidden bg-white hover:border-red hover:border-4 hover:cursor-pointer flex items-center' onClick={navigateBkash}>
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
            <div className='rounded-full w-36 h-36 overflow-hidden hover:border-red hover:border-4 hover:cursor-pointer bg-white flex items-center' onClick={navigateRocket}>
              <img src="/images/rocketpay.png" alt="FISSA BD" />
            </div>
          </div>
          <div></div>
          <div data-aos="fade-up" data-aos-duration="1500" className='flex justify-center items-center'>
            <div className='rounded-full w-36 h-36 overflow-hidden bg-white hover:border-red hover:border-4 hover:cursor-pointer flex items-center' onClick={navigateNagad}>
              <img src="/images/nagad.png" alt="FISSA BD" />
            </div>
          </div>
          <div className=''>
            <div className=''>

            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className='flex justify-center items-center'>
            <div className='rounded-full w-36 h-36 overflow-hidden bg-white hover:border-red hover:border-4 hover:cursor-pointer flex items-center' onClick={navigateUpay}>
              <img src="/images/upay.png" alt="FISSA BD" />
            </div>
          </div>
          <div className=''>
            <div className=''>

            </div>
          </div>

        </div>
      </div>


      <div id='footer'></div>
      <Footer />

    </>
  )
}
