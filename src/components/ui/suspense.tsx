import React from 'react';
import Image from 'next/image';
import { Logo } from '@/assets';

const SuspenseLoader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="flex flex-col items-center">
                <Image src={Logo} alt="Asian Health Tourism" className="mb-4 w-28" />
                <div className="loader"></div>
            </div>
        </div>
    );
};

export default SuspenseLoader;
