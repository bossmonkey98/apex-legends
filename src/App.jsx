
import MockmanEs from "mockman-js";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import {
  Home,
  Login,
  Signup,
  Saved,
  Profile
} from "./pages"


function App() {
  const [mode, setMode] = useState('light')

  return (
    <div className="App" >
      <input id="theme" type="checkbox"
        checked={"dark" === mode} style={{ display: "none" }} />
      <div>
        <Header theme={{ mode, setMode }} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feed" element={<Home />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mockman" element={<MockmanEs />} />
        </Routes>
        <Toaster position="top-right" reverseOrder={true}
          toastOptions={{ style: { border: `1px solid royalblue` } }} />
      </div>
    </div>
  );
}

export default App;
