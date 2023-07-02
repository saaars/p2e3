import React from 'react';
import dog from '../p2-images copy/dog.png'
import bunny from '../p2-images copy/bunny.png'
import { Link } from 'react-router-dom';
import '../pages/style.css'

const Banner = () => {
  return (
    <section className='h-full max-h-[600px] mb-8 x1:mb-24 '>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6 text-center tracking-wide text-align'>
            save <span className='text-orange-500'>your</span>  <br/>next <span>best friend,</span>
          </h1>
          <p className='max-w-[480px] mb-8 text-center tracking-wide'>
            Hundreds of pets are waiting for your <b>help</b>. Make your impact!
          </p>
          
          <div>
            <Link to={'/adopt'}><button type="button" class="btn btn-light btn-lg align-btn">Adopt</button></Link>
            <Link to={'/donate'}><button type="button" class="btn btn-light btn-lg align-btn">Donate</button></Link>
            <Link to={'/volunteer'}><button type="button" class="btn btn-light btn-lg">Volunteer</button></Link>
          </div>

        </div>

        {/* image */}
        <div className=' flex-1 lg:flex justify-center items-end max-h-[500px]'>
          <img className='max-w-[350px]' src={bunny} alt="" />
          <img className='max-h-[500px]' src={dog} alt="" />
        </div>
      </div>

      <div className='sect-2'>
        <div className='center-top'>
          <div className='border-stat mr-5 mt-4'>
            <span className='font-extrabold text-3xl'>170K</span>
            <p className='text-black font-semibold text-xl'>Animals Saved</p>
          </div>
          <div className='border-stat mr-5 mt-4'>
            <span className='font-extrabold text-3xl'>20</span>
            <p className='text-black font-semibold text-xl'>Years of Operation</p>
          </div>
          <div className='border-stat mt-4'>
            <span className='font-extrabold text-3xl'>30K</span>
            <p className='text-black font-semibold text-xl'>New Best friends</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Banner;
