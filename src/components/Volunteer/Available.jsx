import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
import '../Donate/Donate.css'
import volun from '../../p2-images copy/volun.jpeg'


export default function Available() {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
    return (
        <div className="col-span-6 info-form">
            <div>
                <h4 className='tracking-wider font-semibold'>Availability</h4>
            </div>
            <div>
                <Datepicker primaryColor={"orange"} separator="to" value={value} onChange={handleValueChange}/>
                <img src={volun} className='mt-5'/>
            </div>
        </div>
    )
}