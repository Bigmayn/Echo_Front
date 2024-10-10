import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';

export default function Component() {
  return (
    <div className="bg-white text-black font-sans">
      <Head>
        <style>{`
          @font-face {
            font-family: 'Clash Grotesk';
            src: url('/Fonts/ClashGrotesk-Regular.woff2') format('woff2'),
                 url('/Fonts/ClashGrotesk-Regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Clash Grotesk';
            src: url('/Fonts/ClashGrotesk-Bold.woff2') format('woff2'),
                 url('/Fonts/ClashGrotesk-Bold.woff') format('woff');
            font-weight: 700;
            font-style: normal;
          }
        `}</style>
      </Head>
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-[#158C8C]">
          <Image src="/Images/Logo_full.png" alt="Echo Logo" width={120} height={40} />
        </div>
        <div className="flex items-center space-x-8">
          <div className="space-x-4">
            <a href="#features" className="text-black hover:text-[#158C8C] transition-colors">Features</a>
            <a href="#pricing" className="text-black hover:text-[#158C8C] transition-colors">Pricing</a>
          </div>
          <div className="space-x-4">
            <button className="text-black hover:text-[#158C8C] transition-colors">Log in</button>
            <button className="bg-[#158C8C] text-white px-4 py-2 rounded hover:bg-[#0F6E6E] transition-colors font-bold">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex justify-between items-center py-20 px-6 max-w-7xl mx-auto">
        <div className="w-1/2 pr-12">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            The only <span className="text-[#158C8C]">affordable</span> solution for waiting list referral campaigns
          </h1>
          <p className="mb-8 text-lg">Echo provides you with the tools you need to effectively manage referral campaigns for waiting lists. Create campaigns, track referrals, and boost your customer acquistion.</p>
          <button className="bg-[#158C8C] text-white px-8 py-4 rounded text-lg font-bold hover:bg-[#0F6E6E] transition-colors">Get Started</button>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image src="/Images/Hero_Image.png" alt="Hero Image" width={500} height={300} />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#F6F6F6] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">A pricing structure made for <span className="text-[#158C8C]">SMEs</span></h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="bg-[#158C8C1A] p-6 rounded-lg shadow-lg w-1/4 transform -translate-y-4">
              <h3 className="text-xl font-bold mb-4">1 Month</h3>
              <p className="text-2xl font-bold mb-6">$10/mth</p>
              <p className="mb-8 text-sm">Try out the platform for a month and discover the power of referral marketing.</p>
              <button className="bg-[#158C8C] text-white px-4 py-2 rounded w-full hover:bg-[#0F6E6E] transition-colors font-bold">
                Get Started
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 transform scale-105 z-10">
              <h3 className="text-2xl font-bold mb-4">3 Months</h3>
              <p className="text-3xl font-bold mb-6">$5/mth</p>
              <p className="mb-8 text-sm">A full quarter of referral marketing software at a fraction of the price of alternatives.</p>
              <button className="bg-[#158C8C] text-white px-6 py-3 rounded w-full hover:bg-[#0F6E6E] transition-colors font-bold">
                Get Started
              </button>
            </div>
            <div className="bg-[#158C8C1A] p-6 rounded-lg shadow-lg w-1/4 transform -translate-y-4">
              <h3 className="text-xl font-bold mb-4">1 Year</h3>
              <p className="text-2xl font-bold mb-6">$1/mth</p>
              <p className="mb-8 text-sm">Join Echo for a year and save over 90% compared with competing platforms</p>
              <button className="bg-[#158C8C] text-white px-4 py-2 rounded w-full hover:bg-[#0F6E6E] transition-colors font-bold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Section */}
      <section className="flex justify-between items-center py-20 px-6 max-w-7xl mx-auto">
        <div className="w-1/2 pr-12">
          <h2 className="text-4xl font-bold mb-6">Word of mouth is trusted up to 10x more than paid advertising</h2>
          <p className="mb-8 text-lg">Your customers&apos; voices are invaluable, and referral campaigns are the key to unlocking them. We help you Echo your brand efficiently, saving you time and money to focus on growth.</p>
          <button className="bg-[#158C8C] text-white px-8 py-4 rounded text-lg font-bold hover:bg-[#0F6E6E] transition-colors">Boost your acquisition</button>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image src="/Images/WoM_Image.png" alt="Word of Mouth Image" width={500} height={300} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto bg-[#F6F6F6]">
        <h2 className="text-4xl font-bold mb-24 text-center">
          Create referral campaigns for waiting lists<br />
          <span className="text-[#158C8C]">within minutes</span>
        </h2>
        <div className="space-y-32">
          {[
            {
              title: "1. Create an account and choose your plan",
              steps: [
                "Create an account within seconds.",
                "Choose a plan that suits your needs.",
                "Pay quickly, easily, and securely through Stripe.",
                "Get started right away."
              ],
              video: "/Images/Echo_video_1.mp4"
            },
            {
              title: "2. Create your campaign and form fields",
              steps: [
                "Create a new campaign and choose a name.",
                "Select the form fields you have included in the form on your website's referral page.",
                "Enter the tags used for each of the fields on your website.",
                "Now you can launch your campaign!"
              ],
              video: "/Images/Echo_video_2.mp4"
            },
            {
              title: "3. Set up the campaign tracker",
              steps: [
                "In your campaign overview, click edit to set up your campaign's tracker.",
                "Enter the URL of your website's page containing the sign-up form for your referral campaign.",
                "Copy your tracking code, and paste it anywhere between the <head> and </head> parts of your code, as shown in the video.",
                "If you don't wish to make use of the available integrations, you can save your campaign and start generating Echoes!"
              ],
              video: "/Images/Echo_video_3.mp4"
            },
            {
              title: "4. Integrate the platform of your choice",
              steps: [
                "To install and optimally make use of the integrations, please check-out the individual guides through the links below.",
                <a key="hubspot" href="#" className="text-[#158C8C] hover:underline">Hubspot</a>,
                <a key="mailchimp" href="#" className="text-[#158C8C] hover:underline">Mailchimp</a>,
                <a key="klaviyo" href="#" className="text-[#158C8C] hover:underline">Klaviyo</a>,
                <a key="activecampaign" href="#" className="text-[#158C8C] hover:underline">ActiveCampaign</a>
              ],
              image: "/Images/Logos_Integrations.png"
            },
            {
              title: "5. Check and export your results",
              steps: [
                "Open up your campaign in the campaign dashboard.",
                "Check your total results, as well as the performance of your participants.",
                "Export your data to CSV, or synchronize your campaign data with any platform you've integrated."
              ],
              video: "/Images/Echo_video_4.mp4"
            }
          ].map((feature, index) => (
            <div key={index} className="grid grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                {index === 3 ? (
                  <Image 
                    src={feature.image}
                    alt="Integration Logos"
                    width={150}
                    height={150}
                    className="w-auto h-auto"
                  />
                ) : feature.video ? (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-auto rounded-lg shadow-lg"
                  >
                    <source src={feature.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-lg">
                    [Video Placeholder {index + 1}]
                  </div>
                )}
              </div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <ul className="list-disc space-y-2">
                  {feature.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="ml-5">{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
      <footer className="bg-white text-black py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <Image src="/Images/Logo_full.png" alt="Echo Logo" width={120} height={40} className="mb-4" />
          <p className="mb-4">
            <a href="mailto:Info@echo.com" className="hover:text-[#158C8C] transition-colors">Info@echo.com</a>
          </p>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-[#158C8C] transition-colors">Privacy Statement</a>
            <span className="text-[#158C8C]">•</span>
            <a href="#" className="hover:text-[#158C8C] transition-colors">Terms and Conditions</a>
          </div>
          <p className="text-sm text-gray-600">
            &copy; 2024 Echo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
