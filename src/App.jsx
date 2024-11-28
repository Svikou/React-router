import "./index.css";
import Sidebar from "./Components/Sidebar";
import ProfileCard from "./Components/ProfileCard";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex justify-center mt-10 bg-gray-50">
        <ProfileCard />
      </div>
    </div>
  );
}

export default App;
