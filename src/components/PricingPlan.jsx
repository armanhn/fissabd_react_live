import PropTypes from 'prop-types';
import { BsBoxFill } from 'react-icons/bs';

const PricingPlan = ({ title, price, speed, fbSpeed, ytSpeed, bdixSpeed, extras, support, aosType }) => {
    return (
        <div data-aos={aosType} data-aos-duration="1500" className='w-full py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'>
            <BsBoxFill className='text-5xl mx-auto' />
            <h3 className='text-xl font-bold pt-7'>{title}</h3>
            <p className='text-3xl text-green'>{price}</p>
            {/* Consider creating a small component for these repeated speed elements */}
            <p className='text-sm'>{speed} Internet Speed</p>
            <p className='text-sm'>{fbSpeed} Facebook Speed</p>
            <p className='text-sm'>{ytSpeed} YouTube Speed</p>
            <p className='text-sm'>{bdixSpeed} BDIX Speed</p>
            <p className='text-sm'>{extras}</p>
            <p className='text-sm'>{support}</p>
            <button className='mt-5 bg-text-color text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>Get Started</button>
        </div >
    );
};

PricingPlan.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    speed: PropTypes.string.isRequired,
    fbSpeed: PropTypes.string.isRequired,
    ytSpeed: PropTypes.string.isRequired,
    bdixSpeed: PropTypes.string.isRequired,
    extras: PropTypes.string.isRequired,
    support: PropTypes.string.isRequired,
    aosType: PropTypes.string.isRequired
};

export default PricingPlan;
