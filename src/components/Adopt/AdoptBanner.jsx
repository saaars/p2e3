import React from 'react';
import './Adopt.css'
import four from '../../p2-images copy/group.png'

export default function AdoptBanner(){
    const pic = {
        height: '330px',
        width:'100%',
    }

    return(
        <div className="bg-orange-500 mb-8 grid grid-cols-12">
            <div className='col-span-6 center'>
                <h1 className='hdr-title tracking-wider font-semibold ml-8'>Will you <br/>give us a new home?</h1>
            </div>
            <div className='col-span-6'>
                <img src={four} style={pic}/>
            </div>
        </div>
    )
}