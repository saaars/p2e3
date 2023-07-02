import { Link } from 'react-router-dom';
import './Donate.css'
import {useForm} from "react-hook-form"

export default function Donation(){
    const {register, formState: {errors}, handleSubmit,} = useForm();
    const onSubmit = (data) => console.log(data)

    return(
        <div className="col-span-6 info-form">
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h4 className='tracking-wider font-semibold'>Basic information</h4>
                    </div>
                    <div>
                        <label>
                            Full Name:
                        </label>
                        <input placeholder='Enter your full name'
                        {...register("name", {required: true})}/>
                        <error>
                            {errors.name?.type === "required" && "Name is required "}
                        </error>
                    </div>
                    <div>
                        <label>
                            Email Address:
                        </label>
                        <input placeholder='Enter your email address' 
                        {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}
                        />
                        <error>
                            {errors.email?.type === "required" && "Email is required"}
                            {errors.email?.type === "pattern" &&
                            "Entered email is in wrong format"}
                        </error>
                    </div>
                    <div>
                        <label>
                            Phone Number:
                        </label>
                        <input type='number' 
                        {...register("number", {
                            minLength: 6,
                            maxLength: 12,
                            })}/>
                        <error>
                            {errors.number?.type === "minLength" &&
                            "Invalid, entered number is less than 6 digits"}
                            {errors.number?.type === "maxLength" &&
                            "Invalid, entered number is more than 12 digits"}
                        </error>
                    </div>
                    <div>
                        <Link to={'/thanks'}><input className='button' type='submit'/></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}