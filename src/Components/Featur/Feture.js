import React from 'react';
import {CheckCircleIcon}from '@heroicons/react/24/solid'
const Feture = ({feature}) => {
    return (
        <div>
              <div className='flex justify-items-center'>
              <CheckCircleIcon className='h-6 w-6 text-green-500'/>
              <p className='ml-2'>{feature}</p>
            </div>
        </div>
    );
};

export default Feture;