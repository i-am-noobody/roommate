import { Home, Mail, Search } from "lucide-react";
import TopicComponent from "./TopicComponent";

const Popular = () => {
    return (
      <div className="w-full max-w-5xl mx-auto my-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TopicComponent
            icon={Search} 
            title="Finding a room"
            description="Learn how to create your room wanted profile and find suitable homes."
            linkText="Creating a profile"
            linkHref="/login"
          />
          <TopicComponent
            icon={Home} 
            title="Rent your room"
            description="Tips on getting started renting out your spare room on Roomies."
            linkText="Creating a listing"
            linkHref="/roomlisting"
          />
          <TopicComponent
            icon={Mail} 
            title="Communicating on Roomies"
            description="Learn how the Roomies messaging system helps you to communicate safely with potential roomies."
            linkText="Tips & tricks"
            linkHref="/"
          />
        </div>
      </div>
    );
  };
  
  export default Popular;