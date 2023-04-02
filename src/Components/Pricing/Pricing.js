import React from 'react';
import PricingOptions from '../Price/PricingOptions';


const Pricing = () => {
    const pricingOptions=[
        {id:1, name: 'Free', price:0, features:[
           'Extra Free',
            'Awesome Feature',
             'Extra Feature',
              'Unnecessary Features',
              'Will never use Features',
              'Large Feature'
        ]},
        {id:2, name: 'Medium', price:9.99,features:[
            'Everything Medium',
            'Awesome Feature',
            'Extra Feature',
             'Unnecessary Features',
             'Will never use Features',
             'Large Feature'  
        ]},
        {id:3, name: 'Premium', price:999, features:[
            'Everything Premium',
            'Awesome Feature',
            'Extra Feature',
             'Unnecessary Features',
             'Will never use Features',
             'Large Feature'
        ]},
        
    ]
    return (
        <div>
             <h2 className='text-5xl font-bold bg-indigo-300 py-12 text-white rounded-md m-4'> Best deal of Price</h2>
         <div className='grid md:grid-cols-3 mt-4 gap-4'>
         {
            pricingOptions.map(option=><PricingOptions
            key={option.id}
            option={option}
            
            ></PricingOptions>
             )
          }
         </div>
        </div>
    );
};

export default Pricing;