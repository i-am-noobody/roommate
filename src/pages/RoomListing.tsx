import { BedSingle } from 'lucide-react';
import {
  Building2, Home, Warehouse, Landmark, Building, Hotel, BedDouble, Caravan,
} from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const propertyOptions = [
  { label: 'Apartment', value: 'apartment', icon: <Building2 className="w-5 h-5" /> },
  { label: 'Condo', value: 'condo', icon: <Warehouse className="w-5 h-5" /> },
  { label: 'House', value: 'house', icon: <Home className="w-5 h-5" /> },
  { label: 'Townhouse', value: 'townhouse', icon: <Landmark className="w-5 h-5" /> },
  { label: 'Basement', value: 'basement', icon: <Building className="w-5 h-5" /> },
  { label: 'Loft', value: 'loft', icon: <Hotel className="w-5 h-5" /> },
  { label: 'Studio', value: 'studio', icon: <BedDouble className="w-5 h-5" /> },
  { label: 'Trailer', value: 'trailer', icon: <Caravan className="w-5 h-5" /> },
];
const RoomListing = () => {
  const [selected, setSelected] = useState('room');
  const [select, setSelect] = useState('');

  return (
  <div className=''>
  <Navbar/>
    <div className="w-full bg-gray-100 flex flex-col items-center py-24 px-4">
  {/* Header Box */}
  <div className="w-full max-w-2xl bg-white flex flex-col p-6 sm:p-8 gap-4 rounded-lg">
    <h1 className="text-3xl sm:text-4xl text-[#f2545b] font-bold">Got a spare room?</h1>
    <p className="font-semibold">Advertise your room for free?</p>
  </div>

  {/* Address Section */}
  <div className="w-full max-w-2xl bg-white mt-6 px-6 py-4 flex flex-col gap-4 rounded-lg">
    <h1 className="text-lg font-semibold">Property address</h1>
    <input type="text" placeholder="Search your Address" className="w-full px-4 py-2 outline outline-gray-100 rounded-md" />
    <p className="underline text-sm">Can't find your address?</p>

    <div className="flex flex-col sm:flex-row items-start gap-4 mt-4">
      <input type="checkbox" className="scale-150 mt-1 sm:mt-2" />
      <div className="flex flex-col">
        <h2 className="font-semibold text-base">Don't display street name</h2>
        <p className="text-sm text-gray-700">Your street number is never displayed. You can choose to not display your street name, and instead your listing will display your first name.</p>
      </div>
    </div>
  </div>

  {/* Room Details */}
  <div className="w-full max-w-3xl bg-white flex flex-col mt-12 rounded-lg px-6 py-8">
    <h1 className='text-2xl font-semibold'>Room Details</h1>

    {/* Accommodation Type */}
    <div className="mt-4">
      <h3 className="font-semibold text-gray-800 mb-2">Accommodation type</h3>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Room Option */}
        <label className={`flex items-center gap-3 border rounded-xl px-4 py-3 w-full sm:w-1/2 cursor-pointer transition-all ${selected === 'room' ? 'border-orange-500 bg-orange-50 text-orange-500 ring-2 ring-orange-100' : 'border-gray-300 text-gray-700'}`}>
          <input type="radio" name="accommodation" value="room" className="hidden" checked={selected === 'room'} onChange={() => setSelected('room')} />
          <BedSingle className="w-5 h-5" />
          <span className="flex-1 text-sm font-medium">Room</span>
          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selected === 'room' ? 'border-orange-500' : 'border-gray-400'}`}>
            {selected === 'room' && <div className="w-2 h-2 rounded-full bg-orange-500"></div>}
          </div>
        </label>

        {/* Property Option */}
        <label className={`flex items-center gap-3 border rounded-xl px-4 py-3 w-full sm:w-1/2 cursor-pointer transition-all ${selected === 'property' ? 'border-orange-500 bg-orange-50 text-orange-500 ring-2 ring-orange-100' : 'border-gray-300 text-gray-700'}`}>
          <input type="radio" name="accommodation" value="property" className="hidden" checked={selected === 'property'} onChange={() => setSelected('property')} />
          <Home className="w-5 h-5" />
          <span className="flex-1 text-sm font-medium">Whole property</span>
          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selected === 'property' ? 'border-orange-500' : 'border-gray-400'}`}>
            {selected === 'property' && <div className="w-2 h-2 rounded-full bg-orange-500"></div>}
          </div>
        </label>
      </div>
    </div>

    {/* Property Types */}
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-gray-800 mb-2">Property type</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {propertyOptions.map((option) => {
          const isSelected = select === option.value;
          return (
            <div key={option.value}
              onClick={() => setSelect(option.value)}
              className={`flex flex-col items-center justify-center gap-2 border rounded-xl px-4 py-3 cursor-pointer transition-all ${isSelected ? 'border-orange-500 text-orange-500 bg-orange-50 ring-2 ring-orange-100' : 'border-gray-300 text-gray-700'}`}>
              {option.icon}
              <span className="text-sm font-medium">{option.label}</span>
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-orange-500' : 'border-gray-400'}`}>
                {isSelected && <div className="w-2 h-2 rounded-full bg-orange-500" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* Rent Details */}
    <div className="w-full mt-6">
      <label className="block text-sm font-semibold text-gray-800 mb-1">Rent</label>
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
        <span className="text-gray-500 mr-2">$</span>
        <input type="number" placeholder="Enter amount" className="flex-1 outline-none bg-transparent text-gray-800" />
        <span className="text-gray-500 ml-2 text-sm">per month</span>
      </div>
      <div className='flex items-center mt-4 gap-2'>
        <input type='checkbox' />
        <label className='font-semibold text-sm'>Bills included</label>
      </div>

      <div className='flex flex-col gap-2 mt-6'>
        <label className='font-semibold text-sm'>Security deposit</label>
        <input type="number" placeholder="$" className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 bg-transparent outline-none" />
      </div>

      <div className='flex flex-col gap-2 mt-6'>
        <label className='font-semibold text-sm'>Available from</label>
        <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 bg-transparent outline-none" />
      </div>
    </div>
  </div>

  {/* Account Section */}
  <div className='w-full max-w-2xl bg-white flex flex-col p-6 sm:p-8 gap-6 rounded-lg mt-12'>
    <h1 className='font-bold text-lg sm:text-xl'>Create an account or login</h1>
    <div className='flex flex-col gap-3'>
      <label className="block text-sm font-semibold text-gray-800">First Name</label>
      <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 bg-transparent outline-none" />
    </div>

    <div className='flex flex-col gap-3'>
      <label className="block text-sm font-semibold text-gray-800">Last Name</label>
      <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 bg-transparent outline-none" />
    </div>

<button className='bg-[#1b8695] font-bold rounded-lg text-white py-2'>
<Link to="/listing2" className='w-full'>
  
  Create room →
</Link>
  
  </button>

  </div>
</div>

    <Footer/>
  </div>
  )
}

export default RoomListing
