import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Listing5 = () =>{
    const [verificationCode, setVerificationCode] = useState<string>('');
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleVerify = () => {
    
    console.log('Verifying code:', verificationCode);

    setShowSuccessMessage(true);
   setTimeout(()=>{
    navigate("/")
   },2000)
  };

  const handleResendCode = () => {
    console.log('Resending verification code...');
    alert('Resend code functionality not implemented yet.');
  };
    return(
<>
<Navbar/>
<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-2xl">
        {showSuccessMessage ? (
          <div className="flex flex-col items-center text-center py-10">
            <svg
              className="w-20 h-20 text-green-500 mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Verification Successful!</h2>
            <p className="text-gray-600 text-lg">Your phone number has been successfully verified.</p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Enter verification code</h1>
            <p className="text-gray-600 text-lg mb-8">
              A verification code has been sent to your phone number. Please enter it below.
            </p>

            <div className="mb-6">
              <label htmlFor="verificationCode" className="block text-gray-700 text-sm font-medium mb-2">
                Verification Code
              </label>
              <input
                type="text"
                id="verificationCode"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 tracking-widest text-center"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="XXXXXX"
                maxLength={6}
              />
            </div>

            <div className="flex justify-center mb-8">
              <button
                type="button"
                className="text-blue-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                onClick={handleResendCode}
              >
                Resend code
              </button>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                className="flex items-center px-8 py-3 bg-teal-600 text-white font-bold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-200"
                onClick={handleVerify}
              >
                Verify
              </button>
            </div>
          </>
        )}
      </div>
    </div>
    <Footer/>
</>
    )
}

export default Listing5