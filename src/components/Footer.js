import React from 'react';

const Footer = () => {

    return (
        <div className ="bg-primary mt-8 bg-gray-800">
            <footer className="container mx-w-6xl  mx-auto py-6   w-full ">
                <span className="block text-sm text-white sm:text-center dark:text-white font-sans">
                   Copyright © 2016.{" "} PT Company
                </span>
                <div className='flex justify-center pt-3 pb-2'>
                    <a href="#" className="px-4 w-16">
                        <img src={require('../img/fb.png')} />
                    </a>
                    <a href="#" className="px-4 w-16" >
                        <img src={require('../img/twitter.png')} />
                    </a>
                </div>
            </footer>
        </div>

        


    )
}

export default Footer;