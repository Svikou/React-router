import { Search } from "lucide-react";

export default function Sidebar() {
  const contacts = [
    "Dennis Beatty",
    "Greg Brimble",
    "Ryan Dahl",
    "Sarah Dayan",
    "Ceora Ford",
    "Anthony Frehner",
    "Arisa Fukuzaki",
    "Henri Helvetica",
    "Michael Jackson",
    "Ian Jensen",
  ];

  return (
    <div className="w-80 h-full flex flex-col border-r border-gray-200 bg-gray">
      <div className="p-4 flex items-center border-b border-gray-300">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-[px] pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none shadow-sm"
          />
        </div>
        <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm">
          New
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 space-y-2">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className={`px-3 py-2 text-sm rounded-lg ${
              contact === "Henri Helvetica"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {contact}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200 flex items-center gap-2">
        <img src="public/icon.png" alt="Profile" className="w-6 h-6" />
        <div className="text-sm font-medium text-gray-700">
          React Router Contacts
        </div>
      </div>
    </div>
  );
}
