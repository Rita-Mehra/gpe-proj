import React from 'react';
import Image from "next/image";

const ComingSoon = () => {
    return (
        <div className="w-100 bg-lightblue">
            <div className="coming-soon-wrapper text-center h-100vh relative">
                <div className="absolute top-0 left-0 right-0 bottom-0">
                    <div className="text-center my-16">
                        <Image
                            src="/images/logo.png"
                            alt="GPE logo white"
                            width={300}
                            height={70}
                            className="object-cover m-auto"
                        />
                    </div>
                    <div className="text-black text-2xl mb-7">OUR WEBSITE IS UNDER CONSTRUCTION</div>
                    <h1 className="text-primary xl:text-8xl md:text-6xl text-4xl dark-shadow">COMING SOON!</h1>
                    <div className="max-w-[420px] text-black sm:text-xl text-lg m-auto mt-5">
                        We will launch our website soon.<br />
                        In the meantime, stay with a GLOBAL PEAK.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon