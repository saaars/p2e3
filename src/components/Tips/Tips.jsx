import React from "react";
import ReactDOM from 'react-dom';   
import train from '../../p2-images copy/train.jpeg'
import special from '../../p2-images copy/special.png'

export default function Tips(){
    const imageLeft = {
        width: '95%',
        height: '371px',
        borderRadius: '50px'
      };

      const imageRight = {
        width: '95%',
        height: 'auto',
        borderRadius: '50px',
        margin: '0em 0em 5em 5em',
      };

      const textAlign = {
        margin: '2em 5em 2em 0em'
      }

      const textRight = {
        margin: '2em 1em 2em 5em'
      } 

    return(
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
                <div className="mb-3 mt-5">
                    <h2 className="tracking-wider">Congratulations on meeting your best friend!</h2>
                    <h4 className="font-light">Let's help them get comfortable in their new home.</h4>
                </div>
                <div style={textAlign}>
                    <h5 className="tracking-wider font-semibold">How to train your pet</h5>
                    <p className="mr-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
                    <p className="mr-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
                    <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                        External Resources
                        <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                    </a>
                </div>
                <div className="mt-5 mb-3">
                    <img src={special} alt='' style={imageLeft}/>
                </div>
            </div>
            <div className="col-span-6 mt-5">
                <div className="mt-4 mb-5">
                    <img src={train} alt='' style={imageRight}/>
                </div>
                <div>
                    <div style={textRight}>
                        <h5 className="tracking-wider font-semibold">How to take care of your special needs pet</h5>
                        <p className="mr-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
                        <p className="mr-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
                        <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                            External Resources
                            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}