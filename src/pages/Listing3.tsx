import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Listing3 =() =>{
    return(
        <>
        <Navbar/>
         <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans pt-[6rem]">
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-between items-center">
          <div className="h-2 bg-red-300 w-1/3 rounded-full mr-1"></div>
          <div className="h-2 bg-red-300 w-1/3 rounded-full mr-1 ml-1"></div>
          <div className="h-2 bg-red-500 w-1/3 rounded-full ml-1"></div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-6 pb-0 md:p-8 w-full max-w-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <svg
              className="w-24 h-24 text-gray-700"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm-1 15H9v-4h2v4zm4 0h-2v-4h2v4z"/>
              <circle cx="18" cy="6" r="2.5" fill="#FBBF24" />
              <circle cx="14" cy="4" r="2" fill="#FBBF24" />
              <circle cx="20" cy="9" r="1.5" fill="#FBBF24" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-2">Now for some photos</h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Uploading photos brings your listing up search results, helps it stand out and increases the number of inquiries you'll receive.
          </p>

          <button
            type="button"
            className="flex items-center px-6 py-3 bg-teal-600 text-white font-bold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-200"
          >
            Select photos
          </button>
        </div>

        
      </div>
      <div className="h-1 bg-red-500 w-[42rem]"></div> 


      <div className="w-full max-w-2xl mt-4 flex justify-end">
        <button
          type="button"
          className="px-6 py-3 text-gray-600 font-bold rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition duration-200"
        >
            <Link to="/listing4">
            Do this later
            </Link>
         
        </button>
      </div>
    </div>
    <Footer/>
        </>
    )
}

export default Listing3;