import * as React from 'react';
import easy from '/src/assets/icon-like.png';
import Shortened from '/src/assets/icon-url.png';
import Secure from '/src/assets/icon-secure.png';
import Statistics from '/src/assets/icon-statistics.png';
import Reliable from '/src/assets/icon-unique.png';
import Devices from '/src/assets/icon-responsive.png'


interface IFeaturesProps {}

const Features: React.FunctionComponent<IFeaturesProps> = () => {
  return (
    <>
        <div className="flex flex-wrap justify-center gap-8 p-4">
            <div id="row" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
                
                <div id="column" className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
                    <div className="icon mb-2">
                        <img src={easy} alt="Easy icon" className="w-12 h-12" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Easy</h3>
                    <p className="text-gray-600">ShortURL is easy and fast, enter the long link to get your shortened link</p>
                </div>

                <div id="column" className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
                    <div className="icon mb-2">
                        <img src={Shortened} alt="Shortened icon" className="w-12 h-12" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Shortened</h3>
                    <p className="text-gray-600">Use any link, no matter what size, ShortURL always shortens</p>
                </div>

                <div id="column" className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
                    <div className="icon mb-2">
                        <img src={Secure} alt="Secure icon" className="w-12 h-12" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Secure</h3>
                    <p className="text-gray-600">It is fast and secure, our service has HTTPS protocol and data encryption</p>
                </div>

                <div id="column" className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
                    <div className="icon mb-2">
                        <img src={Statistics} alt="Statistics icon" className="w-12 h-12" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Statistics</h3>
                    <p className="text-gray-600">Check the number of clicks that your shortened URL received</p>
                </div>

                <div id="column" className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
                    <div className="icon mb-2">
                        <img src={Reliable} alt="Reliable icon" className="w-12 h-12" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Reliable</h3>
                    <p className="text-gray-600">All links that try to disseminate spam, viruses and malware are deleted</p>
                </div>

                <div id="column" className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
                    <div className="icon mb-2">
                        <img src={Devices} alt="Devices icon" className="w-12 h-12" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Devices</h3>
                    <p className="text-gray-600">Compatible with smartphones, tablets and desktop</p>
                </div>

            </div>
        </div>
    </>
  );
};

export default Features;
