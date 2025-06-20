import { Route, Routes } from "react-router-dom";
import AddLifeWorkshop from "./components/AddLifeWorkshop";
import "./index.css";
import Register from "./page/Register";
import UserManagement from "./page/UserManagement";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<AddLifeWorkshop />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/list" element={<UserManagement/>}/>
      </Routes>
    </div>
  );
}

export default App;
