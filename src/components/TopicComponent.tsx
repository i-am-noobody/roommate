import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react'; // Import the icon type

interface TopicComponentProps {
  icon: LucideIcon; // Type for Lucide icons
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const TopicComponent = ({ 
  icon: IconComponent, 
  title, 
  description, 
  linkText, 
  linkHref 
}: TopicComponentProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start text-left h-full">
      <div className="text-xl mb-4 text-gray-700">
        <IconComponent size={24} strokeWidth={1.5} color="red"/> 
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
        {description}
      </p>

      <a
        href={linkHref}
        className="flex items-center text-teal-600 font-semibold px-4 py-2 rounded-md transition-colors duration-200 hover:bg-teal-50"
      >
        {linkText}
        <ArrowRight size={16} strokeWidth={2} className="ml-2" />
      </a>
    </div>
  );
};

export default TopicComponent;