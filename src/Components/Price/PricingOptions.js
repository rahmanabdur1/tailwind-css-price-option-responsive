import React from 'react';
import Feture from '../Featur/Feture';
const PricingOptions = ({option}) => {
    const {features}=option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
              <div>
                   <h3><span className='text-6xl font-bold text-white'>{option.price}</span>
                   <span className='text-2xl text-gray-200'>/mon</span>
                   </h3>
                   <p className='text-3xl my-4'>{option.name}</p>
            </div>
               {
                features.map((feature, inx) => <Feture
                key={inx}
                feature={feature}
                ></Feture>)
               }
               <button className='bg-green-500 w-full rounded-lg py-2 font-bold mt-4 text-white'>Buy Now</button>
        </div>
    );
};

export default PricingOptions;