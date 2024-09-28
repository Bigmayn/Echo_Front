import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

export default function Component() {
  return (
    <div className="bg-white text-black">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-[#158C8C]">
          <Image src="/Images/Logo_full.png" alt="Echo Logo" width={120} height={40} />
        </div>
        <div className="space-x-4">
          <a href="#features" className="text-black hover:text-[#158C8C] transition-colors">Features</a>
          <a href="#pricing" className="text-black hover:text-[#158C8C] transition-colors">Pricing</a>
        </div>
        <div className="space-x-4">
          <button className="text-black hover:text-[#158C8C] transition-colors">Log in</button>
          <button className="bg-[#158C8C] text-white px-4 py-2 rounded hover:bg-[#0F6E6E] transition-colors">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex justify-between items-center py-20 px-6 max-w-7xl mx-auto">
        <div className="w-1/2 pr-12">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            The only <span className="text-[#158C8C]">affordable</span> solution for <span className="text-[#158C8C]">effortless</span> referral campaigns
          </h1>
          <p className="mb-8 text-lg">Your customers&apos; voices can be Echoes that amplify your brand. We&apos;re here to help you achieve that through affordable, hassle-free referral campaigns that boost your customer acquisition.</p>
          <button className="bg-[#158C8C] text-white px-8 py-4 rounded text-lg font-semibold hover:bg-[#0F6E6E] transition-colors">Get Started</button>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="bg-[#F6F6F6] w-full h-96 flex items-center justify-center rounded-lg shadow-lg">
            [Illustration Placeholder]
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#F6F6F6] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">A pricing structure <span className="text-[#158C8C]">made</span> for SMEs</h2>
          <div className="flex justify-center space-x-8">
            {[
              { name: '1 Month', price: '$30/mth', description: 'Try our platform for a month and test our various features and integrations.' },
              { name: '3 Months', price: '$20/mth', description: 'The package you need to consistently boost your customer acquisition for the next quarter.' },
              { name: '1 Year', price: '$15/mth', description: '15-20x as affordable as competing platforms. Made to minimize costs, and maximize your returns.' }
            ].map((plan, index) => (
              <div key={plan.name} className={`bg-white p-8 rounded-lg shadow-lg ${index === 1 ? 'transform scale-105' : ''}`}>
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <p className="mb-8 text-sm">{plan.description}</p>
                <button className="bg-[#158C8C] text-white px-6 py-3 rounded w-full hover:bg-[#0F6E6E] transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="flex justify-between items-center py-20 px-6 max-w-7xl mx-auto">
        <div className="w-1/2 pr-12">
          <h2 className="text-4xl font-bold mb-6">Word of mouth is trusted up to 10x more than paid advertising</h2>
          <p className="mb-8 text-lg">Your customers&apos; voices are invaluable, and referral campaigns are the key to unlocking them. We help you Echo your brand efficiently, saving you time and money to focus on growth.</p>
          <button className="bg-[#158C8C] text-white px-8 py-4 rounded text-lg font-semibold hover:bg-[#0F6E6E] transition-colors">Boost your acquisition</button>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="bg-[#F6F6F6] w-full h-96 flex items-center justify-center rounded-lg shadow-lg">
            [Image Placeholder]
          </div>
        </div>
      </section>

      {/* Campaign Section */}
      <section id="features" className="flex justify-between items-center py-20 px-6 max-w-7xl mx-auto bg-[#F6F6F6]">
        <div className="w-1/2 flex justify-center">
          <div className="bg-white w-full h-96 flex items-center justify-center rounded-lg shadow-lg">
            [Image Placeholder]
          </div>
        </div>
        <div className="w-1/2 pl-12">
          <h2 className="text-4xl font-bold mb-6">Create personalised referral campaigns within minutes</h2>
          <p className="mb-8 text-lg">We found that most referral campaign platforms are unreliable, complex, or too expensive. That&apos;s why we set out to create an easy-to-use platform that provides you with the tools you need to boost your word of mouth.</p>
          <button className="bg-[#158C8C] text-white px-8 py-4 rounded text-lg font-semibold hover:bg-[#0F6E6E] transition-colors">Get Started</button>
        </div>
      </section>

      {/* Insights Section */}
      <section className="flex justify-between items-center py-20 px-6 max-w-7xl mx-auto">
        <div className="w-1/2 pr-12">
          <h2 className="text-4xl font-bold mb-6">From insights to actions with the Echo Chamber</h2>
          <p className="mb-8 text-lg">Our Echo Chamber presents your campaign performance through a clean, interactive dashboard. Track your results, and act quickly through integrations with your platforms of choice.</p>
          <button className="bg-[#158C8C] text-white px-8 py-4 rounded text-lg font-semibold hover:bg-[#0F6E6E] transition-colors">Learn More</button>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="bg-[#F6F6F6] w-full h-96 flex items-center justify-center rounded-lg shadow-lg">
            [Dashboard Placeholder]
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#158C8C] text-white text-center py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Start generating Echoes and unlock new growth today.</h2>
          <p className="mb-10 text-xl italic">The most affordable platform for referral campaigns.</p>
          <button className="bg-white text-[#158C8C] px-10 py-4 rounded-lg text-xl font-bold hover:bg-[#F6F6F6] transition-colors">
            Boost your acquisition today <ArrowRightIcon className="inline ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F6F6F6] text-black py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center">
            <Image src="/Images/Logo_full.png" alt="Echo Logo" width={120} height={40} className="mb-4" />
            <p className="mb-4">info@echo.com</p>
            <div className="space-x-4 mb-4">
              <a href="#" className="hover:text-[#158C8C] transition-colors">Privacy Statement</a>
              <a href="#" className="hover:text-[#158C8C] transition-colors">Terms and Conditions</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 Echo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}