import React from 'react';
import '../About/About.css'
import pitbul from '../../p2-images copy/pitbul.png'

export default function Banner2(){
    return(
        <div className="bg-orange-500 mb-8 grid grid-cols-12">
            <div className='col-span-8 center'>
                <h1 className='hdr-title tracking-wider font-semibold'>The Best Friends Story</h1>
            </div>
            <div className='col-span-4 mt-4'>
                <img src={pitbul} className='max-h-[300px]'/>
            </div>
        </div>
    )
}