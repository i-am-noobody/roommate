import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

// Main App component
const Listing2 : React.FC = () => {
  // State for form fields
  const [preferredGender, setPreferredGender] = useState<string>('Anyone welcome');
  const [bathroomType, setBathroomType] = useState<string>('');
  const [parkingAvailable, setParkingAvailable] = useState<boolean>(false);
  const [internetIncluded, setInternetIncluded] = useState<boolean>(false);
  const [privateRoom, setPrivateRoom] = useState<boolean>(false);
  const [furnished, setFurnished] = useState<boolean>(false);
  const [accessibleProperty, setAccessibleProperty] = useState<boolean>(false);
  const [backgroundCheckRequired, setBackgroundCheckRequired] = useState<boolean>(false);
  const [lgbtFriendly, setLgbtFriendly] = useState<boolean>(false);
  const [cannabisFriendly, setCannabisFriendly] = useState<boolean>(false);
  const [catFriendly, setCatFriendly] = useState<boolean>(false);
  const [dogFriendly, setDogFriendly] = useState<boolean>(false);
  const [childrenFriendly, setChildrenFriendly] = useState<boolean>(false);
  const [studentsWelcome, setStudentsWelcome] = useState<boolean>(false);
  const [years40PlusWelcome, setYears40PlusWelcome] = useState<boolean>(false);
  const [aboutProperty, setAboutProperty] = useState<string>('');
  const [aboutRoomies, setAboutRoomies] = useState<string>('');


  return (
    <>
    <Navbar/>
    <div className="pt-[6rem] pb-[4rem] min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-2xl mb-8">
        <div className="flex justify-between items-center mb-8">
          <div className="h-2 bg-red-300 w-1/2 rounded-full mr-1"></div>
          <div className="h-2 bg-red-500 w-1/2 rounded-full ml-1"></div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">You're almost there</h1>
        <p className="text-gray-600 text-lg mb-8">Let's complete your listing.</p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Room details</h2>

          <div className="mb-6">
            <label htmlFor="preferredGender" className="block text-gray-700 text-sm font-medium mb-2">
              Preferred gender
            </label>
            <div className="relative">
              <select
                id="preferredGender"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white pr-10 text-gray-800"
                value={preferredGender}
                onChange={(e) => setPreferredGender(e.target.value)}
              >
                <option value="Anyone welcome">Anyone welcome</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
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
            <label htmlFor="bathroomType" className="block text-gray-700 text-sm font-medium mb-2">
              Bathroom type
            </label>
            <div className="relative">
              <select
                id="bathroomType"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white pr-10 text-gray-800"
                value={bathroomType}
                onChange={(e) => setBathroomType(e.target.value)}
              >
                <option value="" disabled>Select ...</option>
                <option value="Shared">Shared</option>
                <option value="Private">Private</option>
                <option value="En-suite">En-suite</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="parkingAvailable"
              name="parkingAvailable"
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              checked={parkingAvailable}
              onChange={(e) => setParkingAvailable(e.target.checked)}
            />
            <label htmlFor="parkingAvailable" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
              Parking available
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="internetIncluded"
              name="internetIncluded"
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              checked={internetIncluded}
              onChange={(e) => setInternetIncluded(e.target.checked)}
            />
            <label htmlFor="internetIncluded" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
              Internet included
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="privateRoom"
              name="privateRoom"
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              checked={privateRoom}
              onChange={(e) => setPrivateRoom(e.target.checked)}
            />
            <label htmlFor="privateRoom" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
              Private room
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="furnished"
              name="furnished"
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              checked={furnished}
              onChange={(e) => setFurnished(e.target.checked)}
            />
            <label htmlFor="furnished" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
              Furnished
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="accessibleProperty"
              name="accessibleProperty"
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              checked={accessibleProperty}
              onChange={(e) => setAccessibleProperty(e.target.checked)}
            />
            <label htmlFor="accessibleProperty" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
              Accessible property
            </label>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-1">
              <input
                id="backgroundCheckRequired"
                name="backgroundCheckRequired"
                type="checkbox"
                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                checked={backgroundCheckRequired}
                onChange={(e) => setBackgroundCheckRequired(e.target.checked)}
              />
              <label htmlFor="backgroundCheckRequired" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
                Background check required
              </label>
            </div>
            <p className="ml-8 text-gray-500 text-sm">
              If you'll require potential roomies to provide a background check before moving in.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Preferences</h2>

        <div className="flex items-center mb-4">
          <input
            id="lgbtFriendly"
            name="lgbtFriendly"
            type="checkbox"
            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            checked={lgbtFriendly}
            onChange={(e) => setLgbtFriendly(e.target.checked)}
          />
          <label htmlFor="lgbtFriendly" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
            LGBT+ friendly
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="cannabisFriendly"
            name="cannabisFriendly"
            type="checkbox"
            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            checked={cannabisFriendly}
            onChange={(e) => setCannabisFriendly(e.target.checked)}
          />
          <label htmlFor="cannabisFriendly" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
            Cannabis friendly
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="catFriendly"
            name="catFriendly"
            type="checkbox"
            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            checked={catFriendly}
            onChange={(e) => setCatFriendly(e.target.checked)}
          />
          <label htmlFor="catFriendly" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
            Cat friendly
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="dogFriendly"
            name="dogFriendly"
            type="checkbox"
            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            checked={dogFriendly}
            onChange={(e) => setDogFriendly(e.target.checked)}
          />
          <label htmlFor="dogFriendly" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
            Dog friendly
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="childrenFriendly"
            name="childrenFriendly"
            type="checkbox"
            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            checked={childrenFriendly}
            onChange={(e) => setChildrenFriendly(e.target.checked)}
          />
          <label htmlFor="childrenFriendly" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
            Children friendly
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="studentsWelcome"
            name="studentsWelcome"
            type="checkbox"
            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            checked={studentsWelcome}
            onChange={(e) => setStudentsWelcome(e.target.checked)}
          />
          <label htmlFor="studentsWelcome" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
            Students welcome
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="years40PlusWelcome"
            name="years40PlusWelcome"
            type="checkbox"
            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            checked={years40PlusWelcome}
            onChange={(e) => setYears40PlusWelcome(e.target.checked)}
          />
          <label htmlFor="years40PlusWelcome" className="ml-3 block text-gray-700 text-base font-medium cursor-pointer">
            40+ years welcome
          </label>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-2xl mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">About the property</h2>
        <div className="mb-6">
          <textarea
            id="aboutProperty"
            name="aboutProperty"
            rows={4}
            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
            placeholder="Tell us what's great about the room, property and area."
            value={aboutProperty}
            onChange={(e) => setAboutProperty(e.target.value)}
          ></textarea>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">About the Roomies</h2>
        <div className="mb-6">
          <textarea
            id="aboutRoomies"
            name="aboutRoomies"
            rows={4}
            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
            placeholder="Tell us a little about you and the other people living in the property."
            value={aboutRoomies}
            onChange={(e) => setAboutRoomies(e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-end mt-8">
          <button
            type="button"
            className="flex items-center px-6 py-3 bg-teal-600 text-white font-bold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-200"
          >
            <Link to="/listing3">
            Next
            </Link>
            
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Listing2;
