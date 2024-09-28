import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white text-black">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-[#158C8C]">LOGO</div>
        <div className="space-x-6">
          <a href="#features" className="text-black hover:text-[#158C8C] transition-colors">Features</a>
          <a href="#pricing" className="text-black hover:text-[#158C8C] transition-colors">Pricing</a>
          <a href="#mission" className="text-black hover:text-[#158C8C] transition-colors">Our mission</a>
        </div>
        <div className="space-x-4">
          <button className="text-black hover:text-[#158C8C] transition-colors">Log in</button>
          <button className="bg-[#158C8C] text-white px-4 py-2 rounded hover:bg-[#0F6E6E] transition-colors">Get started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex justify-between items-center py-20 px-6 max-w-7xl mx-auto">
        <div className="w-1/2 pr-12">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Turn <span className="text-[#158C8C]">voices</span> into <span className="text-[#158C8C]">Echoes</span> with proven referral campaigns
          </h1>
          <p className="mb-8 text-lg">Each customer&apos;s voice can become an Echo that amplifies your brand. We&apos;re here to help you create and manage referral campaigns effortlessly, and increase customer acquisition.</p>
          <button className="bg-[#158C8C] text-white px-8 py-4 rounded text-lg font-semibold hover:bg-[#0F6E6E] transition-colors">Start for free</button>
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
          <h2 className="text-4xl font-bold text-center mb-12">A pricing structure designed for SMEs</h2>
          <div className="flex justify-center space-x-8">
            {['Free', 'Unlimited', 'Patronage'].map((plan, index) => (
              <div key={plan} className={`bg-white p-8 rounded-lg shadow-lg ${index === 1 ? 'transform scale-105' : ''}`}>
                <h3 className="text-2xl font-bold mb-4">{plan}</h3>
                <p className="text-3xl font-bold mb-6">{index === 0 ? '€0/mth' : index === 1 ? '€50/mth' : 'Custom'}</p>
                <ul className="mb-8 space-y-2">
                  <li>✓ Feature 1</li>
                  <li>✓ Feature 2</li>
                  <li>✓ Feature 3</li>
                </ul>
                <button className="bg-[#158C8C] text-white px-6 py-3 rounded w-full hover:bg-[#0F6E6E] transition-colors">
                  {index === 2 ? 'Contact us' : 'Start for free'}
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
          <button className="bg-[#158C8C] text-white px-8 py-4 rounded text-lg font-semibold hover:bg-[#0F6E6E] transition-colors">Let&apos;s grow your reach</button>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="bg-[#F6F6F6] w-full h-96 flex items-center justify-center rounded-lg shadow-lg">
            [Image Placeholder]
          </div>
        </div>
      </section>

      {/* Campaign Section */}
      <section className="flex justify-between items-center py-20 px-6 max-w-7xl mx-auto bg-[#F6F6F6]">
        <div className="w-1/2 flex justify-center">
          <div className="bg-white w-full h-96 flex items-center justify-center rounded-lg shadow-lg">
            [Image Placeholder]
          </div>
        </div>
        <div className="w-1/2 pl-12">
          <h2 className="text-4xl font-bold mb-6">Create personalised referral campaigns within minutes</h2>
          <p className="mb-8 text-lg">We found that most referral campaign platforms are unreliable, complex, or too expensive. That&apos;s why we set out to create an easy-to-use platform that provides you with the tools you need to boost your word of mouth.</p>
          <button className="bg-[#158C8C] text-white px-8 py-4 rounded text-lg font-semibold hover:bg-[#0F6E6E] transition-colors">Start for free</button>
        </div>
      </section>

      {/* Insights Section */}
      <section className="flex justify-between items-center py-20 px-6 max-w-7xl mx-auto">
        <div className="w-1/2 pr-12">
          <h2 className="text-4xl font-bold mb-6">From insights to actions with the Echo Chamber</h2>
          <p className="mb-8 text-lg">Our Echo Chamber presents your campaign performance through a clean, interactive dashboard. From results to reward management, we help you gain valuable insights effortlessly.</p>
          <button className="bg-[#158C8C] text-white px-8 py-4 rounded text-lg font-semibold hover:bg-[#0F6E6E] transition-colors">Learn more about our Echo Chamber</button>
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
          <p className="mb-10 text-xl">Try it out for free. Zero-risk, limitless potential.</p>
          <button className="bg-white text-[#158C8C] px-10 py-4 rounded-lg text-xl font-bold hover:bg-[#F6F6F6] transition-colors">
            Create your free account <ArrowRightIcon className="inline ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F6F6F6] text-black py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#158C8C]">LOGO</h3>
            </div>
            {['Product', 'Company', 'Resources'].map((column) => (
              <div key={column}>
                <h3 className="text-xl font-bold mb-4">{column}</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-[#158C8C] transition-colors">Link 1</a></li>
                  <li><a href="#" className="hover:text-[#158C8C] transition-colors">Link 2</a></li>
                  <li><a href="#" className="hover:text-[#158C8C] transition-colors">Link 3</a></li>
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-sm text-gray-600">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;