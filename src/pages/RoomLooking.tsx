import { useState } from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const RoomLooking = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");

    const showPasswordField = firstName.trim() !== "" && email.trim() !== "";
    return (
       <>
       <Navbar/>
       <div className="w-full flex flex-col justify-center items-center bg-gray-100 py-24 px-4">
  {/* Top Progress Bar */}
  <div className="w-full max-w-3xl bg-[#f2545b] h-2 rounded-lg"></div>

  {/* Header */}
  <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8 mt-6 text-start">
    <h1 className="text-[#f2545b] text-2xl sm:text-3xl font-bold">Looking for a room?</h1>
    <p className="font-semibold">Create your room wanted profile.</p>
  </div>

  {/* Location Input Card */}
  <div className="w-full max-w-3xl bg-white rounded-lg px-6 py-6 mt-6">
    <h1 className="text-2xl font-semibold">Where are you looking?</h1>
    <div className="mt-6 flex flex-col gap-2">
      <p className="text-lg font-semibold">Search locations</p>
      <input
        type="text"
        placeholder="Type to search..."
        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
      />
    </div>
  </div>

  {/* About You Form */}
  <div className="w-full max-w-2xl bg-white rounded-lg px-6 py-6 mt-8 flex flex-col gap-6">
    <h1 className="text-xl font-semibold">About you</h1>

    {/* Rent */}
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-1">Rent</label>
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
        <span className="text-gray-500 mr-2">$</span>
        <input
          type="number"
          placeholder="Enter amount"
          className="flex-1 outline-none bg-transparent text-gray-800"
        />
        <span className="text-gray-500 ml-2 text-sm">per month</span>
      </div>
    </div>

    {/* Looking for */}
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">I'm looking for...</label>
      <select className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none">
        <option value="">Choose an option</option>
        <option value="myself">For Myself</option>
        <option value="couple">As a couple</option>
        <option value="group">As a group of friends</option>
      </select>
    </div>

    {/* Gender */}
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">Gender</label>
      <select className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none">
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="nottomention">Not to Mention</option>
      </select>
    </div>
  </div>

  {/* Account Creation */}
  <div className="w-full max-w-2xl bg-white rounded-lg px-6 py-6 mt-8 flex flex-col gap-6">
    <h1 className="font-bold text-xl">Create an account or login</h1>

    {/* First Name */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-gray-800">First Name</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 bg-transparent outline-none"
      />
    </div>

    {/* Email */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-gray-800">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 bg-transparent outline-none"
      />
    </div>

    {/* Password */}
    {showPasswordField && (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-gray-800">Password</label>
        <input
          type="password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 bg-transparent outline-none"
        />
      </div>
    )}

    {/* Submit Button */}
    <button className="bg-[#1b8695] text-white font-bold rounded-lg py-2 mt-2">
      Create room →
    </button>
  </div>
</div>

        <Footer/>
       </>
    )
}

export default RoomLooking
