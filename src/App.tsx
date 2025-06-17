  import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RoommateCard from './components/RoommateCard'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className="flex flex-col px-4 sm:px-6 md:px-12 lg:px-32">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f2545b] mt-6 mb-2">
    Our Listed Customers and Properties
  </h1>
  <p className="text-base sm:text-lg md:text-xl mb-6">
    Find out the perfect room partners and property for yourself.
  </p>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-6 py-4 sm:justify-center">
  <RoommateCard />
  <RoommateCard />
  <RoommateCard />
  <RoommateCard />
  <RoommateCard />
  <RoommateCard />
</div>

</div>

    <Footer/>
    </div>
  )
}

export default App
