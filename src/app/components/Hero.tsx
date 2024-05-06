import React from 'react'
import { client } from '../sanity/client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


const getData = async () => {
    const query = `*[_type == 'heroPage'][0]{
    
          buttonText,
          para1,
          para2,
          mainHeading,
          "imageUrl": heroImage.asset->url
      }`;
  
    const data = await client.fetch(query);
    return data;
  };

async function Hero() {
    const data = await getData();
 
  return (
    <section className='max-container padding-container py-10 flex gap-5 flex-col lg:flex-row w-full'>
         <div className='flex flex-col items-start justify-center flex-1 w-full'>
        <h2 className='lg:bold-20 text-teal-800 bold-16'>
          Presidential Initiative for Artificial Intelligence and Computing
          (PIAIC)
        </h2>
        <h1 className='lg:bold-52 bold-32 text-gray-900 mb-5 mt-1'>{data.mainHeading}</h1>
        <p className='text-muted-foreground mb-4 text-[0.9rem] lg:text-[1rem]'>{data.para1}</p>
        <p className='text-muted-foreground mb-4 text-[0.9rem] lg:text-[1rem]'>{data.para2}</p>
        <Button  className='bg-teal-700 active:bg-teal-800  text-sm md:text-lg rounded-full px-10 lg:py-8 py-4 mt-2'>{data.buttonText}</Button>
      </div>
      <div className="flex flex-1 max-w-[600px] mx-auto">
        <Image src={data.imageUrl} alt="Hero image" width={800} height={800} className='w-full' />
      </div>
    </section>
  )
}

export default Hero