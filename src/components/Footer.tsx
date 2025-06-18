import { Link } from 'react-router-dom';
import { UserRound } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f2545b] text-white px-6 py-8 text-sm text-center flex flex-col items-center gap-6">
      {/* Icon + Text */}
      <div className="flex items-center gap-2">
        <UserRound size={20} />
        <span>Free to list, search & communicate</span>
      </div>

      {/* Middle Links */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-5xl">
        <Link to="#" className="underline">How to find a room</Link>
        <Link to="#" className="underline">How to rent your room</Link>
        <Link to="#" className="underline">Verifications</Link>
        <Link to="#" className="underline">ID checks</Link>
        <Link to="#" className="underline">Credit checks</Link>
        <Link to="#" className="underline">Background checks</Link>
        <Link to="#" className="underline">Free roommate agreement</Link>
        <Link to="#" className="underline">Safety & security</Link>
        <Link to="#" className="underline">Inspections</Link>
        <Link to="#" className="underline">Community standards</Link>
      </div>

      {/* Bottom Links */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-4xl">
        <Link to="#" className="underline">Help</Link>
        <Link to="#" className="underline">Team</Link>
        <Link to="#" className="underline">Blog</Link>
        <Link to="#" className="underline">Report</Link>
        <Link to="#" className="underline">Press inquiries</Link>
        <Link to="#" className="underline">Terms</Link>
        <Link to="#" className="underline">Privacy</Link>
        <Link to="#" className="underline">Facebook</Link>
        <Link to="#" className="underline">Instagram</Link>
      </div>
    </footer>
  );
};

export default Footer;
