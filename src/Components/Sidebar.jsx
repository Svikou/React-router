import { useState } from "react";
import { Link } from "react-router-dom";

const contacts = [
  { id: "1", name: "Dennis Beatty" },
  { id: "2", name: "Greg Brimble" },
  { id: "3", name: "Ryan Dahl" },
  { id: "4", name: "Sarah Dayan" },
  { id: "5", name: "Ceora Ford" },
  { id: "6", name: "Anthony Frehner" },
  { id: "7", name: "Arisa Fukuzaki" },
  { id: "8", name: "Henri Helvetica" },
  { id: "9", name: "Michael Jackson" },
  { id: "10", name: "Ian Jensen" },
];

export default function Sidebar() {
  const [selectedContact, setSelectedContact] = useState("8");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-80 h-screen flex flex-col border-r border-gray-200 bg-white">
      <div className="p-4 space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            New
          </button>
        </div>

        <nav className="space-y-1">
          {filteredContacts.map((contact) => (
            <Link
              key={contact.id}
              to={`/contacts/${contact.id}`}
              onClick={() => setSelectedContact(contact.id)}
              className={`block px-3 py-2 text-sm rounded-lg transition-colors
                ${
                  contact.id === selectedContact
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {contact.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <div className="w-5 h-5">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <circle cx="12" cy="12" r="10" className="fill-current" />
            </svg>
          </div>
          React Router Contacts
        </div>
      </div>
    </div>
  );
}
