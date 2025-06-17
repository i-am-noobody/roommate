import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { CircleHelp, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full max-h-screen min-h-[70vh] bg-gray-100 flex items-center justify-center px-4 py-6 sm:py-8 md:py-10 lg:pt-[5.1rem] lg:pb-[2.1rem]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-md bg-white rounded-md mt-4 p-6 gap-6"
        >
          <h1 className="text-2xl font-semibold">Login</h1>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-base">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-base">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="bg-[#1b8695] w-full text-white py-2 font-semibold rounded-md mt-2 hover:bg-[#157a85] transition-all"
          >
            LOGIN
          </button>

          <div className="flex items-center justify-center gap-2 my-4">
            <CircleHelp size={16} />
            <p className="font-semibold text-sm">Forgot your Password?</p>
          </div>

          <div className="w-full rounded-md shadow-sm overflow-hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between px-4 py-3 font-semibold text-sm text-gray-800 focus:outline-none"
            >
              <span className="flex items-center">
                {isOpen ? (
                  <ChevronUp size={18} className="mr-2" />
                ) : (
                  <ChevronDown size={18} className="mr-2" />
                )}
                Don't have an account yet?
              </span>
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-[#f9fbfd] px-4 py-3 text-sm text-gray-700 border-t">
                Create your Roomies account by{' '}
                <Link to="/" className="text-teal-700 underline">
                  listing your available room
                </Link>{' '}
                or creating a{' '}
                <Link to="/" className="text-teal-700 underline">
                  room wanted profile
                </Link>.
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
