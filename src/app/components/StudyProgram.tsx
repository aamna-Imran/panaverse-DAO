import React from 'react'
import { client } from '../sanity/client'
import { Button } from '@/components/ui/button';

async function getData(){
    const query = `*[_type == 'programPage'][0]{
        q1,
          q2,
          q3,
          heading1,
          heading2,
          para,
          buttonText
      }`
      const data = await client.fetch(query)
      return data;
}

async function StudyProgram() {

    const data = await getData()
   

  return (
    <section className='relative max-container padding-container py-10 '>
        <div className='absolute lg:-left-10 -left-28  -z-50 h-96 w-96 rounded-full blue-blur-bg'/>
        <div className='absolute  lg:top-28 right-0 top-96 -z-50 h-80 w-80 rounded-full bg-teal-50'/>
        <div className='-z-50'>
            <h3 className='text-teal-700 font-semibold mb-2'>Program Of Studies</h3>
            <h1 className='lg:bold-52 bold-32 '>{data.heading1}</h1>
            <h1 className='lg:bold-52 bold-32'>{data.heading2}</h1>
            <p className='font-medium my-2 lg:text-[1rem] text-[0.8rem]'>{data.para}</p>
            <Button className='bg-teal-700 active:bg-teal-800 text-sm md:text-lg rounded-full px-10 lg:py-8 py-4 mt-2'>
                {data.buttonText}
            </Button>
        </div>
        <div className='w-full mt-10'>
          <div className='w-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-4 gap-y-6'>

          <div className='relative blur-bg p-4 border border-gray-200 w-full rounded-lg h-44 lg:h-64 flex items-center '>
              <div className='bold-90 text-blue-50 absolute right-8 -z-30'>1</div>
              <div className=' flex flex-col lg:h-44 h-32 gap-2 w-[90%]'>
                <h1 className='lg:bold-20 bold-16 '>Quater 1</h1>
                <p className='text-gray-800 text-[0.9rem] '>{data.q1}</p>
              </div>
          </div>
          <div className='relative blur-bg p-4 border border-gray-200 w-full rounded-lg h-44 lg:h-64 flex items-center'>
              <div className='bold-90 text-blue-50 absolute right-8 -z-30'>2</div>
              <div className=' flex flex-col lg:h-44 h-32 gap-2 w-[90%]'>
                <h1 className='lg:bold-20 bold-16 '>Quater 2</h1>
                <p className='text-gray-800 text-[0.9rem] '>{data.q2}</p>
              </div>
          </div>
          <div className='relative blur-bg p-4 border border-gray-200 w-full rounded-lg h-44 lg:h-64 flex items-center'>
              <div className=' bold-90 text-blue-50 absolute right-8  -z-30  text-end w-[90%] h-[70%]'>
                3
                </div>
              <div className=' flex flex-col lg:h-44 h-32 gap-2 w-[90%]'>
                <h1 className='lg:bold-20 bold-16 '>Quater 3</h1>
                <p className='text-gray-800 text-[0.9rem] '>{data.q3}</p>
              </div>
          </div>
          </div>
        </div>
    </section>
  )
}

export default StudyProgram