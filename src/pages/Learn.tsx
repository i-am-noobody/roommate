import FAQSection from "../components/FAQSection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Popular from "../components/Popular"

const Learn = () =>{
    return(
        <div className="w-full">
        <Navbar/>

        <div className="relative bg-[#EE6352] text-white p-10 rounded-lg w-[70rem] mx-auto mt-[6rem] mb-10 flex flex-col md:flex-row justify-between items-center overflow-hidden help-banner-slant">
      <div className="flex items-center mb-6 md:mb-0 md:mr-10">
        <div className="flex flex-col gap-4">
        <div className="bg-white rounded w-16 h-16 flex justify-center items-center mr-5 flex-shrink-0">
          <img src="/icon.png" alt="Roomies Logo" className="max-w-[50px] max-h-[50px]" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 leading-tight">Help with Roomies</h1>
          <p className="text-base sm:text-lg">
            We have a collection of resources and helpful FAQs to help you with your Roomies experience.
          </p>
        </div>
        </div>
      </div>

      <div className="max-w-[80px] sm:max-w-[100px] md:max-w-[30%] flex-shrink-0 relative z-10">
        <img src="/8064688.jpg" alt="Person in Room" className="block w-[180px] h-auto rounded-lg" />
      </div>
    </div>
    <Popular/>
    <FAQSection/>
    <Footer/>
        </div>
    )
}
export default Learn