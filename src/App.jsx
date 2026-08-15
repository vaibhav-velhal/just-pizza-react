import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Registration/Register";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <div>
              <h2 className="text-center mt-3">404 - No page found</h2>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
