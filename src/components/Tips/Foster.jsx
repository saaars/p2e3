import React from "react";
import '../Tips/Tips.css'

export default function Foster(){
    const text = {
        width: '80%',
        margin: '2em 0em 0em 10em',
        fontSize: '14px'
    }

    const fosterBtn = {
        width: '55%', 
        margin: '2em 0em 0em 19em',
        fontSize: '16px'
    }
    
    return(
        <div className="foster">
            <h4 className="text-white center tracking-wider">FOSTER TO ADOPT</h4>
            <p className="text-white center" style={text}> Not sure if you’re ready to adopt? Try foster to adopt! All animals who have been at the shelter for 60 days or more are eligible to go home with you on a trial basis. Once you take the pet home, you’ll have 30 days to decide on adoption. We’ll even provide you with the initial supplies. 
            To participate, you’ll need to go through the regular adoption process.</p>
            <div>
                <button type="button" class="btn btn-secondary btn-lg btn-block" style={fosterBtn}>View Fosterable Pets</button>
            </div>
        </div>
    )
}