import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="hidden md:flex bg-red-200 py-2 border-b border-red-300">
            <div className="max-w-6xl mx-auto w-full flex justify-between items-center px-4 md:px-8">
                <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-red" />
                    <span className="text-sm text-red-700">House - 344, Sonargaon Road, Hatirpool, Dhaka-1205, Bangladesh</span>
                </div>
                <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-red" />
                    <span className="text-sm text-red-700">info@fisasbd.com</span>
                    <FaPhoneAlt className="text-red" />
                    <span className="text-sm text-red-700">+88 0173 248 0007</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
