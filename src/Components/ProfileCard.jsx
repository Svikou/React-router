export default function ProfileCard() {
  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <img
        src="public/PP.png" // Remplacez par votre image
        alt="Profil"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="mt-4 text-center text-xl font-bold">Henri Helvetica</h2>
      <p className="text-center text-blue-500">HenriHelvetica</p>
      <p className="mt-2 text-center text-gray-600">How To WebPageTest</p>

      <div className="flex justify-center gap-4 mt-4">
        <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
          Edit
        </button>
        <button className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-50">
          Delete
        </button>
      </div>
    </div>
  );
}
