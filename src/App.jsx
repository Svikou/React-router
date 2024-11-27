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
              name="John Doe"
              username="johndoe"
              description="Full Stack Developer passionate about coding."
              imageUrl="https://via.placeholder.com/150"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
