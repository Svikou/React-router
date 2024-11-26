import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Sidebar from "./Components/Sidebar";

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
