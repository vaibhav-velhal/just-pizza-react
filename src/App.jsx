import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Registration/Register";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <div className="container text-center">
              <h2 className="mt-3">404 - No page found</h2>
              <a href="/">Return to Home</a>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
