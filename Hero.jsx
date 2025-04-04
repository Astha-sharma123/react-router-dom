import React from "react";

function Hero() {
    return (
        <div class="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 px-6 sm:py-20 py-10">
            <div class="max-w-screen-xl mx-auto text-center text-white">
                <h1 class="text-5xl max-sm:text-3xl font-bold leading-tight mb-6">Welcome to Our Premium Service</h1>
                <p class="text-lg mb-12">Experience excellence like never before with our exclusive products and services.</p>
                <button type="button" class="bg-blue-600 text-white text-lg font-medium tracking-wide px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">Get Started</button>
            </div>
        </div>
    )
}
export default Hero;