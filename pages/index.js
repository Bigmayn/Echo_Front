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
      
      {/* Navigation section - unchanged */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        {/* ... navigation content remains the same ... */}
      </nav>

      {/* Hero Section - unchanged */}
      <section className="flex justify-between items-center py-20 px-6 max-w-7xl mx-auto">
        {/* ... hero content remains the same ... */}
      </section>

      {/* Pricing Section - unchanged */}
      <section id="pricing" className="bg-[#F6F6F6] py-20">
        {/* ... pricing content remains the same ... */}
      </section>

      {/* Trust Section - unchanged */}
      <section className="flex justify-between items-center py-20 px-6 max-w-7xl mx-auto">
        {/* ... trust content remains the same ... */}
      </section>

      {/* Updated Features Section */}
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
              image: "/placeholder-image-1.png"
            },
            {
              title: "2. Create your campaign and form fields",
              steps: [
                "Create a new campaign and choose a name.",
                "Select the form fields you have included in the form on your website's referral page.",
                "Enter the tags used for each of the fields on your website.",
                "Now you can launch your campaign!"
              ],
              image: "/placeholder-image-2.png"
            },
            {
              title: "3. Set up the campaign tracker",
              steps: [
                "In your campaign overview, click edit to set up your campaign's tracker.",
                "Enter the URL of your website's page containing the sign-up form for your referral campaign.",
                "Copy your tracking code, and paste it anywhere between the <head> and </head> parts of your code, as shown in the video.",
                "If you don't wish to make use of the available integrations, you can save your campaign and start generating Echoes!"
              ],
              image: "/placeholder-image-3.png"
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
              image: "/placeholder-image-5.png"
            }
          ].map((feature, index) => (
            <div key={index} className="grid grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                {index === 3 ? (
                  <Image 
                    src="/Images/Logos_Integrations.png" 
                    alt={`Step ${index + 1} illustration`} 
                    width={300} 
                    height={300} 
                    className="w-auto h-auto"
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center">
                    [Video Placeholder {index + 1}]
                  </div>
                )}
              </div>
              <div className="pl-8 border-l border-gray-200">
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

      {/* Final CTA - unchanged */}
      <section className="bg-[#158C8C] text-white text-center py-20">
        {/* ... CTA content remains the same ... */}
      </section>

      {/* Footer - unchanged */}
      <footer className="bg-white text-black py-12">
        {/* ... footer content remains the same ... */}
      </footer>
    </div>
  );
}