import React from "react";

export default function Home() {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology')" }}>
                <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
                    <h1 className="text-white text-5xl md:text-6xl font-bold text-center">
                        Welcome to the Future of Tech
                    </h1>
                    <p className="text-gray-300 mt-4 text-xl md:text-2xl text-center max-w-2xl">
                        Discover cutting-edge solutions and explore our comprehensive services to take your business to the next level.
                    </p>
                    <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition duration-300 ease-in-out">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Our Features</h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Unlock the full potential of your business with our innovative solutions.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Real-Time Analytics</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Track your metrics instantly and make informed decisions with our real-time data analytics.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Customizable Solutions</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Tailor our solutions to meet your business needs and scale effortlessly.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-500 text-white mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Fast Deployment</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Get up and running quickly with our fast and easy deployment process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-500 py-16">
                <div className="max-w-7xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold">Ready to Dive In?</h2>
                    <p className="mt-4 text-lg leading-6">
                        Get started with our free trial and experience the benefits for yourself.
                    </p>
                    <button className="mt-8 bg-white text-blue-500 font-bold py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
                        Start Free Trial
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
                    <p>&copy; 2024 Tech Solutions. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
