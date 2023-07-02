import React, {useState} from "react";
import CurrencyInput from 'react-currency-input-field';

import {
    Tab,
    initTE,
  } from "tw-elements";

export default function Tabs() {
    initTE({ Tab });
    return (
       <div>
            <ul class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0" role="tablist" data-te-nav-ref>
                <li role="presentation">
                    <a href="#tabs-home" class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill" data-te-target="#tabs-home" data-te-nav-active role="tab" aria-controls="tabs-home" aria-selected="true">
                    Payment</a>
                </li>
                <li role="presentation">
                    <a href="#tabs-profile" class="focus:border-transparent my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill" data-te-target="#tabs-profile" role="tab" aria-controls="tabs-profile" aria-selected="false">
                    Resources</a>
                </li>
            </ul>

            <div class="mb-6">
                <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab" data-te-tab-active>
                    <div>
                        <h6 className="center tracking-wide">Choose an amount you'd like to donate.</h6>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-4 center mt-4 amount">
                                $25
                            </div>
                            <div className="col-span-4 center mt-4 amount">
                                $50
                            </div>
                            <div className="col-span-4 center mt-4 amount">
                                $100
                            </div>
                            <div className="col-span-4 center amount">
                                $500
                            </div>
                            <div className="col-span-7 center">
                                <CurrencyInput id="input-example" name="input-name" placeholder="Other amount" defaultValue={1000} decimalsLimit={2} onValueChange={(value, name) => console.log(value, name)}/>
                            </div>
                            <div className="col-span-1 center"></div>
                        </div>
                    </div>
                </div>
                <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                    <div>
                        <h6 className="center tracking-wide">Please select which resources you would like to donate.</h6>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-4 center mt-4 amount">
                                Food
                            </div>
                            <div className="col-span-4 center mt-4 amount">
                                Treats
                            </div>
                            <div className="col-span-4 center mt-4 amount">
                                Toys
                            </div>
                            <div className="col-span-4 center amount">
                                Leash
                            </div>
                            <div className="col-span-8 center amount">
                                Grooming Supplies
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}