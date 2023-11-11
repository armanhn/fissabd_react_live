import React from 'react'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'
import { FaWhatsappSquare } from 'react-icons/fa'
export default function Footer() {
    return (
        <div className='border-t-2 border-grey md:px-0 px-8'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-wrap md:flex-row flex-col md:justify-between py-8 gap-7'>
                    <div>
                        <h4 className='mb-2 text-lg font-bold'>Fissa Communication</h4>
                        <h4 className='text-sm'> House - 344, Sonargaon Road, Hatirpool, Dhaka-1205, Bangladesh</h4>
                    </div>

                    <div>
                        <h4 className='mb-2 text-lg font-bold'>Company</h4>
                        <ul>
                            <li className='text-sm leading-loose'><a href="">About Us</a></li>
                            <li className='text-sm leading-loose'><a href="">Our Team</a></li>
                            <li className='text-sm leading-loose'><a href="">Privacy Policy</a></li>
                            <li className='text-sm leading-loose'><a href="">Terms & conditions</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='mb-2 text-lg font-bold'>Resources</h4>
                        <ul>
                            <li className='text-sm leading-loose'><a href="">CCTV Cameras</a></li>
                            <li className='text-sm leading-loose'><a href="">Wireless Routers</a></li>
                            <li className='text-sm leading-loose'><a href="">Port Switches</a></li>
                            <li className='text-sm leading-loose'><a href="">Network Admin Tools</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='mb-2 text-lg font-bold'>Contact</h4>
                        <ul>
                            <li className='text-sm leading-loose'>24/7 Support</li>
                            <li className='text-sm leading-loose'><a href="">Email: info@fissa.com</a></li>
                            <li className='text-sm leading-loose'>Phone: +88 0173 248 0007</li>
                            <li className='text-sm leading-loose'>Phone: +88 0197 248 0001</li>

                        </ul>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col md:justify-between pb-8'>
                    <div className='flex gap-4'>
                        <a href="https://www.facebook.com/FiSSAbd"><FaSquareFacebook className='text-4xl' /></a>
                        <a href="https://www.linkedin.com/company/fissabd/about/"><FaLinkedin className='text-4xl' /></a>
                        {/* <a href="https://wa.me/8801732480007"></a> */}
                        {/* <FaWhatsapp className='text-4xl' /> */}
                        {/* <IoLogoWhatsapp /> */}
                        <a href="https://wa.me/8801732480007"><FaWhatsappSquare className='text-4xl' /></a>

                    </div>
                    <div>
                        <p className='text-sm'>Copyright by ©  Fissa Communication</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
