import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Listing4 = () =>{
    const [country, setCountry] = useState<string>('United States of America');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [contactPreference, setContactPreference] = useState<string>('allow');
return(
    <>
    <Navbar/>
     <div className="pt-[6rem] min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Verify phone number</h1>
        <p className="text-gray-600 text-lg mb-8">
          Phone verification is required by all users for the safety of the community.
        </p>

        <div className="mb-6">
          <label htmlFor="country" className="block text-gray-700 text-sm font-medium mb-2">
            Country
          </label>
          <div className="relative">
            <select
              id="country"
              className="block w-full px-4 py-3 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none bg-white pr-10 text-gray-800"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="United States of America">United States of America</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-medium mb-2">
            Phone number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder=""
          />
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-1">
            <input
              id="allowContact"
              name="contactPreference"
              type="radio"
              className="h-5 w-5 text-red-600 border-gray-300 rounded-full focus:ring-red-500 cursor-pointer"
              checked={contactPreference === 'allow'}
              onChange={() => setContactPreference('allow')}
            />
            <label htmlFor="allowContact" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
              Allow contact via phone
            </label>
          </div>
          <p className="ml-8 text-gray-500 text-sm">
            Phone number will be available to verified Roomies users.
          </p>
        </div>

        <div className="mb-8"> {/* Increased mb for spacing before button */}
          <div className="flex items-center mb-1">
            <input
              id="keepPrivate"
              name="contactPreference"
              type="radio"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded-full focus:ring-blue-500 cursor-pointer"
              checked={contactPreference === 'private'}
              onChange={() => setContactPreference('private')}
            />
            <label htmlFor="keepPrivate" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
              Keep phone number private
            </label>
          </div>
          <p className="ml-8 text-gray-500 text-sm">
            You can communicate through the Roomies messaging system.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="flex items-center px-8 py-3 bg-teal-600 text-white font-bold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-200"
          >
            <Link to="/listing5">
            Send verification code
            
            </Link>
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
)
}
export default Listing4