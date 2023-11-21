import React from 'react'

export default function PaymentUpay() {
  return (
    <div className='text-center max-w-6xl mx-auto xl:px-0 px-8 my-40'>
        <div className='flex justify-center items-center border-2 border-text-color rounded-xl shadow-xl p-8 sm:flex-row flex-col'>
            <div className='sm:w-2/4 sm:border-r-2 sm:p-5 p-2'>
                <h1>Scan QR Code</h1>
                <img className="mx-auto" src="/images/QRcode.png" alt="" />
                <p>Merchant Number: 0174293696</p>
            </div>
            <div className='sm:w-2/4 text-left sm:px-8 px-2 py-8 sm:border-t-0 border-t-2'>
                <div className='sm:w-36 w-full h-auto bg-white border-2 rounded-xl border-grey hover:border-green sm:mx-0 mx-auto'> 
                    <img src="/images/upay.png" alt="FISSA BD" />
                </div>
                <h1 className='bold text-2xl pt-8'>Payment Guideline </h1>
                <p>Step 1: Lorem ipsum dolor sit amet.</p>
                <p>Step 2: Lorem ipsum dolor sit amet consectetur.</p>
                <p>Step 3: Lorem ipsum dolor sit amet consectetur.</p>
                <p>Step 4: Lorem ipsum dolor sit amet consectetur.</p>
                <p>Step 5: Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>  
    </div>
  )
}
