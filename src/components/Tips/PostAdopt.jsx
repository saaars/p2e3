import React from "react";
import paw2 from '../../p2-images copy/paw2.png'

export default function PostAdopt(){
    const postBox = {
        width: '70%',
        margin: '0em 0em 1em 7em',
    }

    const a ={
        textDecoration: 'underline',
        color: '#E27537',    
    }

    return (
        <div>
            <h2 className="mb-5 center"> Learn More</h2>
            <div className="grid grid-cols-12 gap-4 mb-5">
                <div className="col-span-4" style={postBox}>
                    <h5>Behaviour Helpline</h5>
                    <p><a href="/" style={a}>Make an appointment</a> with our behaviour helpline if you need any assistance with your pet</p>
                </div>
                <div className="col-span-4" style={postBox}>
                    <h5>Training Classes</h5>
                    <p><a href="/" style={a}>Sign up your new pet for a training class</a> or workshop to learn new skills</p>
                </div>
                <div className="col-span-4" style={postBox}>
                    <h5>Free Wellness exams</h5>
                    <p><a href="/" style={a}> Make a vet appointment </a> for your new pet. You’ll receive a voucher for a free wellness exam at a local VCA Animal Hospital.</p>
                </div>
                <div className="col-span-4" style={postBox}>
                    <h5>Rehome to Shelter</h5>
                    <p>We make a lifetime commitment to our pets and will accept them back at the shelter for any reason. Please <a href="/" style={a}>contact us. </a></p>
                </div>
                <div className="col-span-4" style={postBox}>
                    <h5>Share Your story</h5>
                    <p>Continue to use our post-adoption resources and <a href="/" style={a}>share your stories </a>to inspire more people to adopt and save more lives.</p>
                </div>
                <div className="col-span-4" style={postBox}>
                    <h5>Become a buddy</h5>
                    <p>Found your buddy helpful? Consider <a href="/" style={a}>becoming a buddy </a>yourself and help new pet owners find success! </p>
                </div>
            </div>
        </div>
    )
}