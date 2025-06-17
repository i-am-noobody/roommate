import React from 'react'
import { PersonStanding } from 'lucide-react';
import { CigaretteOff } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { UsersRound , ArrowDownWideNarrow , Handshake} from 'lucide-react';
import { Link } from 'react-router-dom';




const RoomcardDetails = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#f9fbfd] pt-24 pb-8 px-4 sm:px-6 md:px-8">
  <div className="flex flex-col items-center w-full max-w-4xl gap-2">
    <img src="man.jpg" alt="girl" className="h-40 w-40 rounded-full object-cover" />
    <h1 className="text-xl sm:text-2xl font-bold">Cadenza Collectives</h1>
    <p className="text-center">Male · 25 Years · Software Engineer / Developer</p>

    <hr className="border-2 border-[#f2545b] w-full mt-6" />

    <div className="flex flex-wrap justify-center gap-2 mt-2">
      <div className="px-3 py-1 rounded-lg bg-[#f2545b] text-white text-sm">New</div>
      <div className="px-3 py-1 rounded-lg bg-[#f2545b] text-white text-sm">1600$</div>
      <button className="bg-[#f2545b] px-3 py-1 rounded-lg flex items-center gap-1 text-white text-sm">
        <PersonStanding size={16} color="white" /> Team Up
      </button>
    </div>

    <p className="mt-4 text-sm sm:text-base text-center">
      Looking in:{" "}
      <span className="font-semibold">
        Briar Forest, Houston, Harris County, TX, Missouri City, Fort Bend County, TX, Sugar Land, Fort Bend County, TX, Richmond, Fort Bend County, TX, Alief, Houston, Harris County, TX & Houston, Harris County, TX
      </span>
    </p>

    {/* Table */}
    <div className="overflow-x-auto mt-6 w-full">
      <table className="min-w-[20rem] sm:min-w-[30rem] md:min-w-[40rem] table-auto text-left text-[#1a1a1a] text-sm">
        <tbody>
          <tr className="bg-[#f9fbfd]">
            <td className="py-3 px-4 font-medium">Budget</td>
            <td className="py-3 px-4">$1,100 per month</td>
          </tr>
          <tr className="bg-white">
            <td className="py-3 px-4 font-medium">Accommodation for</td>
            <td className="py-3 px-4">For myself</td>
          </tr>
          <tr className="bg-[#f9fbfd]">
            <td className="py-3 px-4 font-medium">Ready to move</td>
            <td className="py-3 px-4">Now</td>
          </tr>
          <tr className="bg-white">
            <td className="py-3 px-4 font-medium">Looking to stay</td>
            <td className="py-3 px-4">2 months</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      <div className="flex items-center gap-2 px-4 py-1 bg-gray-100 rounded-md text-sm">
        <CigaretteOff size={16} color="red" /> Non-smoker
      </div>
      <div className="flex items-center gap-2 px-4 py-1 bg-gray-100 rounded-md text-sm">
        <GraduationCap size={16} /> Student
      </div>
      <div className="px-4 py-1 bg-gray-100 rounded-md text-sm">
        Sometimes I will have a company
      </div>
      <div className="flex items-center gap-2 px-4 py-1 bg-gray-100 rounded-md text-sm">
        <UsersRound size={16} /> Ready to team up
      </div>
    </div>

    {/* Description */}
    <div className="w-full mt-12">
      <div className="flex items-center gap-2 mb-2">
        <ArrowDownWideNarrow size={24} color="red" />
        <h1 className="font-semibold text-lg sm:text-xl">Description</h1>
      </div>
      <p className="px-2 sm:px-4 mt-2 text-sm sm:text-base leading-relaxed" style={{ wordSpacing: "2px" }}>
        I’m clean, down to earth, and value honesty and transparency. I’m a freelance Digital Marketer and also instruct yoga classes. I will need to live with my two sons who are 9 and 11 years old. I can comfortably put in $1100 but can be a little higher if necessary. Would love the southwest area from Eastern edge of Katy, Memorial, Energy Corridor, Mission Bend, Sugar Land, Richmond, Missouri City, & Alief.
      </p>
    </div>

    {/* Messaging Section */}
    <div className="flex flex-col items-center gap-4 mt-12 w-full">
      <img src="man.jpg" alt="man" className="h-24 w-24 rounded-full object-cover" />
      <h1 className="text-lg font-semibold">Cadenza Collectives</h1>
      <div className="flex items-center gap-2">
        <p className="text-2xl text-[#347b2b]">•</p>
        <span className="text-sm text-black">Online today</span>
      </div>

      <input
        type="text"
        className="w-full max-w-md bg-gray-100 rounded-md mt-1 px-4 py-2 text-center"
        placeholder="You can't message Cadenza."
        disabled
      />

      <div className="border border-gray-100 rounded-md w-full max-w-md mt-4 px-6 py-4 flex flex-col gap-2 text-sm">
        <p>
          To <span className="font-bold">message Cadenza</span> or{" "}
          <span className="font-bold">view their phone number</span> you need to be a member. Joining and communicating is free.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
          <button className="px-6 py-2 bg-[#1b8695] text-white rounded-md text-sm">List your room</button>
          <button className="px-6 py-2 bg-gray-100 text-black rounded-md text-sm">Create profile</button>
        </div>
        <p className="text-center mt-2 text-sm">
          Already a member? <Link to="/login" className="underline">Login now.</Link>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center px-4 py-2 bg-gray-100 rounded-md gap-2 w-full max-w-md mt-4 text-xs text-center sm:text-left">
        <Handshake size={20} color="#f2545b" className="mt-1" />
        <p>
          It is free to message and reply to any other user here.{" "}
          <Link to="/learn" className="underline">Learn more.</Link>
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default RoomcardDetails
