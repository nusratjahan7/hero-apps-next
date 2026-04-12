import React from 'react';

const Stats = () => {
    return (
        <div className="bg-linear-to-r from-blue-600 to-purple-400 py-6 px-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold text-white mb-8">Trusted By Millions, Built For You</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   
                    <div className="text-white">
                        <p className="text-3xl md:text-5xl font-bold">29.6M</p>
                        <p className="md:text-lg mt-2">Total Downloads</p>
                        <p className="text-sm mt-2 text-gray-300">21% More Than Last Month</p>
                    </div>

                   
                    <div className="text-white">
                        <p className="text-3xl md:text-5xl font-bold">906K</p>
                        <p className="md:text-lg mt-2">Total Reviews</p>
                        <p className="text-sm mt-2 text-gray-300">46% More Than Last Month</p>
                    </div>

                  
                    <div className="text-white">
                        <p className="text-3xl md:text-5xl font-bold">132+</p>
                        <p className="md:text-lg mt-2">Active Apps</p>
                        <p className="text-sm mt-2 text-gray-300">31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;