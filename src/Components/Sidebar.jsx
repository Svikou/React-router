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
    <div className="w-80 h-full flex flex-col border-r border-gray-200 bg-white">
      {/* Barre de recherche */}
      <div className="p-4">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none"
          />
        </div>
        <button className="mt-4 px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
          New
        </button>
      </div>

      {/* Liste de contacts */}
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

      {/* Pied de page */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-sm font-medium text-gray-700">
          React Router Contacts
        </div>
      </div>
    </div>
  );
}
