import React from 'react';

const Footer = () => {
    return (
      <div>
          <footer className='bg-[#FFFFFF] '>
             <div className='text-center  pt-10'>
                <h2 className='text-2xl font-bold'>Gadget Heaven</h2>
                <p className='text-gray-400 text-[14px]'>our services and others term and condtiton</p>
             </div>
             <hr  className='mt-5'/>

            <div className="footer  md:flex justify-evenly items-center  text-gray-500 p-10">
                <nav className=''>
                    <h6 className=" font-bold text-xl text-center text-black ">Services</h6>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-xl text-black">Company</h6>
                    <a className="link link-hover">Company</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover"> Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-xl text-black">Legal</h6>
                    <a className="link link-hover">Legal</a>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </div>
        </footer>
      </div>
    );




};




export default Footer;