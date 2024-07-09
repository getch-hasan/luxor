import React from 'react';
import { FaFacebookSquare ,FaInstagram,FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (


        <footer class="bg-red-600 mt-10 dark:bg-gray-900">
            <div class="mx-auto w-full max-w-screen-xl">
                <div class="grid grid-cols-2 gap-8 px-4  lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 class="mb-6 text-xl font-semibold text-white  dark:text-white">Products</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">

                            <li class="mb-2">  <a href="#" class="text-white">Pens</a></li>
                            <li class="mb-2">  <a href="#" class="text-white">Highlighters</a></li>
                            <li class="mb-2">  <a href="#" class="text-white">Display Pack</a></li>
                            <li class="mb-2">  <a href="#" class="text-white">Notebooks & Stationery</a></li>
                            <li class="mb-2">  <a href="#" class="text-white">Markers</a></li>
                            <li class="mb-2">  <a href="#" class="text-white">Art & Hobby</a></li>
                            <li class="mb-2">  <a href="#" class="text-white">Sustainable</a></li>
                            <li class="mb-2">  <a href="#" class="text-white">Value Packs</a></li>
                            <li class="mb-4">  <a href="#" class="text-white">Career</a> </li>
                            

                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-xl font-semibold text-white  dark:text-white">Explore</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">

                            <li class="mb-2">  <a href="#" class="text-white">Overview</a></li>
                            <li class="mb-2">  <a href="#" class="text-white">Career</a> </li>
                            <li class="mb-2">  <a href="#" class="text-white">News & media</a> </li>
                            <li class="mb-2">  <a href="#" class="text-white">Partners/Resellers</a> </li>

                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-xl font-semibold text-white  dark:text-white">Information & Policies</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">

                            <li class="mb-2">  <a href="#" class="text-white">Privacy Policy</a></li>
                            <li class="mb-2">  <a href="#" class="text-white">Cookie Policy</a> </li>
                            <li class="mb-2">  <a href="#" class="text-white">Awards & Certification</a> </li>
                            <li class="mb-2">  <a href="#" class="text-white">Terms & Conditions</a> </li>
                            <li class="mb-2">  <a href="#" class="text-white">Contact Us</a> </li>

                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-xl font-semibold text-white  dark:text-white">Corporate Information</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">

                            <li class="mb-2">  <a href="#" class="text-white flex items-center gap-2"> <IoMail  className='text-white' />export.enquiry@luxoroffice.com</a></li>
                            <li class="mb-2">  <a href="#" class="text-white flex items-center gap-2"><FaPhone />0120-4899000</a> </li>
                            <p className='text-white flex items-start gap-2'><FaLocationDot />C-42, Phase-II, Noida, District - Gautam <br />Budh Nagar,<br />
                                Uttar Pradesh - 201305 <br />Uttar Pradesh - 201305
                                Phone: +91-120-4197000-03 <br />
                                Email: export.enquiry@luxoroffice.com
                            </p>
                            <p className='flex gap-2 my-2'><FaFacebookSquare  className='text-white w-6 h-6' /><FaInstagram  className='text-white w-6 h-6' /> <FaLinkedin  className='text-white w-6 h-6' /></p>

                        </ul>
                    </div>
                </div>
                <div class="px-4 py-2 ">
                    <p class="text-sm  text-white dark:text-gray-300 text-center">Copyright Luxor 2024 | All Rights Reserved
                    </p>

                </div>
            </div>
        </footer>

    );
};

export default Footer;