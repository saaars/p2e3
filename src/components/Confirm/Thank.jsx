import React from "react";
import './confirm.css'
import highfive from '../../p2-images copy/highfive.png'

export default function Thank() {
    return(
        <div>
            <div className="mb-5">
                <h1 className="title">High Five.</h1>
                <div className="center">
                    <img src={highfive} className='max-h-[350px]'/>
                </div>
            </div>
            <div className="msg-div">
                <div className="txt-center">
                    <h4 className="tracking-wider">THANK YOU FOR SUBMITTING YOUR APPLICATION.</h4>
                    <div className="container-thank mt-4">
                        <p>Once we've reviewed your application, we'll send you an email to let you know whether you and the pet are a good fit. If you're a match, we'll invite you to the shelter during the time slot you selected. If you haven't heard from us after two weeks, please 
                        contact us at: <br/> <span className="font-bold tracking-wide">support@labestfriends.org.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}