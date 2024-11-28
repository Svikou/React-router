import "./index.css";
import Sidebar from "./Components/Sidebar";
import ProfileCard from "./Components/ProfileCard";

function App() {
  return (
    <div className="flex h-screen">
      {/* Barre latérale */}
      <Sidebar />

      {/* Section de droite pour la carte de profil */}
      <div className="flex-1 flex justify-center items-center bg-gray-50">
        <ProfileCard />
      </div>
    </div>
  );
}

export default App;
