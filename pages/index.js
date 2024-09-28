import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-[#030082] min-h-screen text-[#BFFFFB]">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">LOGO</div>
        <div className="space-x-4">
          <a href="#features" className="text-[#BFFFFB]">Features</a>
          <a href="#pricing" className="text-[#BFFFFB]">Pricing</a>
          <a href="#mission" className="text-[#BFFFFB]">Our mission</a>
        </div>
        <div className="space-x-4">
          <button className="text-[#BFFFFB]">Log in</button>
          <button className="bg-[#BFFFFB] text-[#030082] px-4 py-2 rounded">Get started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex justify-between items-center p-8 bg-[#030082]">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Turn <span className="text-[#00FFF0]">voices</span> into <span className="text-[#00FFF0]">echoes</span> with proven referral campaigns
          </h1>
          <p className="mb-4">Each customer's voice can become an echo that amplifies your brand. We're here to help you create and manage referral campaigns effortlessly, and increase customer acquisition.</p>
          <button className="bg-[#BFFFFB] text-[#030082] px-6 py-3 rounded text-lg font-semibold">Start for free</button>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="bg-gray-300 w-80 h-64 flex items-center justify-center">
            [Illustration Placeholder]
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#3300FF] text-[#BFFFFB] py-16">
        <h2 className="text-3xl font-bold text-center mb-8">A pricing structure designed for SMEs</h2>
        <div className="flex justify-center space-x-8">
          {['Free', 'Unlimited', 'Patronage'].map((plan, index) => (
            <div key={plan} className={`bg-[#030082] p-6 rounded-lg shadow-lg ${index === 1 ? 'transform scale-110' : ''}`}>
              <h3 className="text-2xl font-bold mb-2">{plan}</h3>
              <p className="mb-4">{index === 0 ? '€0/mth' : index === 1 ? '€50/mth' : 'Custom'}</p>
              <ul className="mb-4">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <button className="bg-[#BFFFFB] text-[#030082] px-4 py-2 rounded w-full">
                {index === 2 ? 'Contact us' : 'Start for free'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="flex justify-between items-center p-8 bg-[#030082]">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Word of mouth is trusted up to 10x more than paid advertising</h2>
          <p className="mb-4">Your customers' voices are invaluable, and referral campaigns are the key to unlocking them. We help you echo your brand efficiently, saving you time and money to focus on growth.</p>
          <button className="bg-[#BFFFFB] text-[#030082] px-6 py-3 rounded text-lg font-semibold">Let's grow your reach</button>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="bg-gray-300 w-80 h-64 flex items-center justify-center">
            [Image Placeholder]
          </div>
        </div>
      </section>

      {/* Campaign Section */}
      <section className="flex justify-between items-center p-8 bg-[#3300FF]">
        <div className="w-1/2 flex justify-center">
          <div className="bg-gray-300 w-80 h-64 flex items-center justify-center">
            [Image Placeholder]
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Create personalised referral campaigns within minutes</h2>
          <p className="mb-4">We found that most referral campaign platforms are unreliable, complex, or too expensive. That's why we set out to create an easy-to-use platform that provides you with the tools you need to boost your word of mouth.</p>
          <button className="bg-[#BFFFFB] text-[#030082] px-6 py-3 rounded text-lg font-semibold">Start for free</button>
        </div>
      </section>

      {/* Insights Section */}
      <section className="flex justify-between items-center p-8 bg-[#030082]">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">From insights to actions with the Echo Chamber</h2>
          <p className="mb-4">Our Echo Chamber presents your campaign performance through a clean, interactive dashboard. From results to reward management, we help you gain valuable insights effortlessly.</p>
          <button className="bg-[#BFFFFB] text-[#030082] px-6 py-3 rounded text-lg font-semibold">Learn more about our Echo Chamber</button>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="bg-gray-300 w-80 h-64 flex items-center justify-center">
            [Dashboard Placeholder]
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#BFFFFB] text-[#030082] text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Start generating Echoes and unlock new growth today.</h2>
        <p className="mb-8">Try it out for free. Zero-risk, limitless potential.</p>
        <button className="bg-[#030082] text-[#BFFFFB] px-8 py-4 rounded text-xl font-bold">
          Create your free account <ArrowRightIcon className="inline ml-2" />
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#030082] text-[#BFFFFB] p-8">
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4">LOGO</h3>
          </div>
          {['Product', 'Company', 'Resources'].map((column) => (
            <div key={column}>
              <h3 className="text-xl font-bold mb-4">{column}</h3>
              <ul>
                <li className="mb-2"><a href="#">Link 1</a></li>
                <li className="mb-2"><a href="#">Link 2</a></li>
                <li className="mb-2"><a href="#">Link 3</a></li>
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
