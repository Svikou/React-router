import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Sidebar from "./Components/Sidebar";
import ProfileCard from "./Components/ProfileCard"; // Importation du composant ProfileCard

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route pour afficher les détails d'un contact */}
        <Route path="/contacts/:id" element={<div>Contact Details</div>} />

        {/* Route pour afficher la sidebar */}
        <Route path="/" element={<Sidebar />} />

        {/* Route pour afficher le composant ProfileCard */}
        <Route
          path="/profile"
          element={
            <ProfileCard
              name="Henri Helvetica"
              username="HenriHelvetica"
              description="How To WebPageTest"
              imageUrl="https://via.placeholder.com/150" // Remplacez par l'URL réelle de l'image
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
