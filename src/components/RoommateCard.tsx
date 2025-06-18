import { useNavigate } from 'react-router-dom'

const RoommateCard = () => {
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate("/roommate")
  }
  return (
   <div
  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[22rem] h-auto flex flex-col rounded-md overflow-hidden border border-gray-300 shadow-md cursor-pointer transition-transform hover:scale-[1.01]"
  onClick={handleClick}
>
  <img
    src="second.jpg"
    alt="girl"
    className="object-cover w-full h-40 sm:h-48"
  />
  <hr className="border-t border-red-400" />

  <div className="flex gap-2 px-4 mt-[-0.75rem]">
    <div className="px-2 py-1 bg-[#f2545b] text-white text-sm rounded-md">
      New
    </div>
    <div className="px-2 py-1 bg-[#f2545b] text-white text-sm rounded-md">
      1600$
    </div>
  </div>

  <div className="flex flex-col px-4 py-4 justify-between">
    <h1 className="text-lg font-bold">Maddisson</h1>
    <h3 className="text-base font-semibold">29 Years • Female</h3>
    <p className="mt-2 text-sm text-gray-700 line-clamp-4">
      It’s me and my two and a half year old daughter. I’m 29 years old and work
      two serving jobs. I’m clean and respectful but also super fun and easy
      going! No rules on my end and just want somewhere comfortable and chill. I
      work a lot but in my free time I like to go to the gym, go out to eat,
      hang with friends, watch a movie, concerts, hike, pretty much down for
      whatever!
    </p>
    <p className="mt-3 text-sm text-gray-500 line-clamp-1">
      Roommates looking around -- Costa Mesa, Orange County, CA, Tustin, Orange
      County, CA & Irvine, Orange County, CA.
    </p>
  </div>
</div>

  )
}

export default RoommateCard
