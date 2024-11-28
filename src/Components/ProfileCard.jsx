import { Star } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="flex items-start space-x-8 p-6">
      <img
        src="public/PP.png"
        alt="Profile"
        className="w-48 h-48 rounded-md object-cover"
      />
      <div>
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">Henri Helvetica</h1>
          <button className="text-gray-400 hover:text-gray-600">
            <Star className="h-5 w-5" />
          </button>
        </div>
        <p className="text-blue-500 mt-1">HenriHelvetica</p>
        <p className="text-gray-600 mt-2">How To WebPageTest</p>

        <div className="mt-6 space-x-3">
          <button className="px-4 py-2 text-sm border border-gray-200 rounded-md hover:bg-gray-50">
            Edit
          </button>
          <button className="px-4 py-2 text-sm text-red-600 border border-gray-200 rounded-md hover:bg-gray-50">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
