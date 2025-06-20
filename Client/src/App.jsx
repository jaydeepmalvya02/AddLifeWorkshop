import { Route, Routes } from "react-router-dom";
import AddLifeWorkshop from "./components/AddLifeWorkshop";
import "./index.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AddLifeWorkshop />} />
      </Routes>
    </div>
  );
}

export default App;
