import Login from "./Components/Login/Login";
import Register from "./Components/Registration/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
