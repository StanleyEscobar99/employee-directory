import "./styles.css";
import Homepage from "./components/Homepage.js";
import { Route, Routes} from "react-router-dom"
import EmployeePage from "./pages/EmployeePage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/employee/:id" element={<EmployeePage />} />

      </Routes>
    </div>
  );
}