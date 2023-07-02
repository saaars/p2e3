import React from "react";
import '../About/About.css'
import paw from '../../p2-images copy/paw.png'
import donate from '../../p2-images copy/donate.png'
import volunteer from '../../p2-images copy/volunteer.png'
import { Link } from 'react-router-dom';


export default function Change(){
    return(
        <div className="mt-4">
            <div>
                <h3 className='font-semibold center pt-4 tracking-wide'>Make A Change!</h3>
                <p className="center"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 card-opt ml-4">
                    <a href="#!"><img class="rounded-t-sm option" src={paw} alt="" /></a>
                    <div class="p-6">
                        <h5 class="mb-2 text-xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 center"> Adopt </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="center"><Link to={'/adopt'}><button type="button" class="btn btn-light btn-lg">Continue</button></Link></div>
                    </div>
                </div>
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 card-opt ml-4">
                    <a href="#!"><img class="rounded-t-sm option" src={donate} alt="" /></a>
                    <div class="p-6">
                        <h5 class="mb-2 text-xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 center"> Donate </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="center"><Link to={'/donate'}><button type="button" class="btn btn-light btn-lg">Continue</button></Link></div>
                    </div>
                </div>
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 card-opt ml-4">
                    <a href="#!"><img class="rounded-t-sm option-3" src={volunteer} alt="" /></a>
                    <div class="p-6">
                        <h5 class="mb-2 text-xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 center tracking-wider"> Volunteer </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="center"><Link to={'/volunteer'}><button type="button" class="btn btn-light btn-lg">Continue</button></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}