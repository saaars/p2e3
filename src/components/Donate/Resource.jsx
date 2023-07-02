import React from "react";
import './Donate.css'
import Tabs from "./Tabs";

export default function Resource() {
    return(
        <div className="col-span-6 info-form">
            <div className="mt-2">
                <h4 className='tracking-wider font-semibold center mb-4'>SUPPORT BY DONATIONS</h4>
                <p className='center'>Over 10,000 supporters like you helped raise $518,000 last year. <br/> That's enough to rescue 700 homesless dogs. Now it's your turn.</p>
            </div>
            <div className="mt-5">
                <Tabs/>
            </div>
        </div>
    )
}