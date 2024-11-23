import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar"; // Chemin vers ton composant

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contacts/:id" element={<div>Contact Details</div>} />
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
