import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./components/Context";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
function App() {
  return (
    <>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
