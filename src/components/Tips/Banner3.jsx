import React from "react";
import postAdopt from "../../p2-images copy/boneDog.png"

export default function Banner3() {
    return(
        <div>
            <div className="bg-orange-500 mb-8 grid grid-cols-12">
                <div className='col-span-8 center'>
                    <h1 className='hdr-title tracking-wider font-semibold'>Post-adoption Tips</h1>
                </div>
                <div className='col-span-4 mt-4'>
                    <img src={postAdopt} className='max-h-[300px]'/>
                </div>
            </div>
        </div>
    )
}