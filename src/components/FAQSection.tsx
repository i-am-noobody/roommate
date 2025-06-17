
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Import ChevronDown for the expand/collapse icon

// CollapsibleFAQItem Component
// Represents a single FAQ item that can be expanded and collapsed
const CollapsibleFAQItem = ({ title, content, actions }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the open/close state of the item

  // Toggle function to switch between open and close states
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
      {/* FAQ Header - Clickable area to toggle content visibility */}
      <div
        className="flex items-center justify-between p-5 cursor-pointer border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        onClick={toggleOpen}
      >
        <h3 className="text-lg text-gray-800 select-none">
          {title}
        </h3>
        {/* Chevron icon rotates based on isOpen state */}
        <ChevronDown
          className={`h-6 w-6 text-gray-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>

      {/* FAQ Content - Dynamically adjusts height based on content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden"> {/* This div ensures smooth height transition */}
          <div className="p-5 pt-0 text-gray-700">
            {/* Main content text */}
            <p className="mb-6 leading-relaxed mt-2">
              {content}
            </p>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {actions?.map((action, index) => (
                <a
                  key={index}
                  href={action.link}
                  className={`flex-1 text-center font-semibold py-3 px-4 rounded-md transition-colors duration-200
                    ${action.primary
                      ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-md'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300'
                    }`}
                >
                  {action.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQSection Component
// Contains the main heading and a list of CollapsibleFAQItems
const FAQSection = () => {
  // Define your FAQ data here. You can extend this array for more questions.
  const faqData = [
    {
      title: 'I need help finding a room',
      content:
        'Roomies is a free self-service website where you need to search online for potential rooms and roomies. You need to communicate with other users directly through the website to ask questions or arrange a viewing. Start your search by creating your room wanted profile and then browse the available listings. The communication options are available near the bottom of each listing when you are logged in.',
      actions: [
        { text: 'Create room wanted profile', link: '#', primary: true },
        { text: 'How to find a room', link: '#', primary: false },
        { text: 'How to communicate', link: '#', primary: false },
      ],
    },
    {
      title: 'I want to inquire about or view a room',
      content: 'Roomies is a free peer to peer website so you need to communicate directly with the listing owner to inquire, apply for or view a room. To do this, you will need to create your free account and verify yourself.Remember to view the property and meet the roommates before paying any money.',
      actions: [
        { text: 'How to communicate with other users?', link: '#', primary: true },
      ],
    },

    {
        title: 'I want to remove my listing(s)',
        content: 'Removing your listing is easy, just log into your account and visit your dashboard. If you have a live listing then you will see a "deactivate my account" link at the bottom, click this, and your account will be deactivated. It will remain dormant until you need it next.If you have multiple listings, you can pause an individual listing by clicking on that listing from your dashboard and selecting to pause the listing from a dropdown at the top of the listing page.If you have finished your search and no longer looking for a room or a roomie, then visit your dashboard and click on "deactivate my account". This will pause your listings, stop emails and make your account dormant until the next time you use it.If you are still searching but do not want to receive listings via email, then you can do this from your account settings. There is an option to turn your listing alerts off.',
        actions: [
          { text: 'Dashboard', link: '#', primary: true },
          { text: 'This didnt help', link: '#', primary: false },

        ],
      },
      {
        title: 'Unsuscribe/stop emails',
        content: 'If you have finished your search and are no longer looking for a room or roomie then visit your dashboard and click on "deactivate my account" which will pause your listings, stop emails and make your account dormant for the next time you use it.If you are still searching but do not want to receive listings via email then you can do this in account settings. There is an option to turn your listings alerts off.',
        actions: [
          { text: 'Dashboard', link: '#', primary: true },
          { text: 'Account settings', link: '#', primary: false },
          { text: 'This didnt help', link: '#', primary: false },

        ],
      },
      {
        title: 'I need help uploading images',
        content: 'To manage your room and images, please go to your dashboard or the image uploader to change the photos.For room wanted profiles or a member photo you can click on the round placeholder on your dashboard or room wanted profile, select your image and then wait for the image to upload and the page to refresh.If this is still not working then try from another device or browser. If you are still having problems, please contact support.',
      },
      {
        title: 'I"m having trouble logging into my account',
        content: 'There could be two problems that will cause you not having access to your account. Either you have forgotten your password or your email address was not entered correctly and not recognized.Password problemsReset your password. This can be done from the login page. The reset password option will email you a link which you can use to enter a new password.Magic login link. This can also be done from the login page. This provides quick access to your account via a magic email or SMS link which when clicked will log you into your account. This is a great option if you are not receiving the password reset email because you can use the SMS link to access your accountEmail address not recognized.Your email will be in our system exactly as it was provided when you signed up. Sometimes this means people used one of their alternative email addresses or misspelt their email when signing up. If you are receiving emails from us then your email address is correct. If you are not, then you will need to create a new account.Two Factor Authentication (2FA) issues.If you have 2FA enabled please use the authenticator app to generate a code and allow you back into the account. To enable 2FA you must have used an authenticator app to provide a code. Popular authenticator apps include 1Password, Google Authenticator and Authy.',
        actions: [
          { text: 'Login', link: '#', primary: true },
          { text: 'This didnt help', link: '#', primary: false },

        ],
      }, {
        title: 'I have dispute with a roommate',
        content: 'Every state has different laws and procedures for handling tenant-landlord disputes.It is typically encouraged to attempt to settle the issues between the parties before filing an official complaint. If this cannot be done, you can visit your local courthouse for more advice and help with your next steps.The U.S. Department of Housing and Urban Development is a great department to contact for more housing complaint information and has information about your state tenant rights.Alternatively you may choose to visit a small claim court, a special court where disputes are resolved quickly without needing an Attorney. Small claims courts are inexpensive and carried out by a county judge. Be sure to check your state requirements, as every state has a different maximum claim limit for a hearing to be considered.'
      },
  ];

  return (
    <div className="w-[70rem] max-w-5xl mx-auto my-10 ">
      <h2 className="text-4xl font-bold text-gray-800 mt-6 mb-6">Frequently asked questions</h2>
      {faqData.map((item, index) => (
        <CollapsibleFAQItem
          key={index} // Using index as key is generally okay for static lists
          title={item.title}
          content={item.content}
          actions={item.actions}
        />
      ))}
    </div>
  );
};

export default FAQSection;