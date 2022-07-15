import MockmanEs from "mockman-js";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { PrivateRoute } from "./components/privateRoute";
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
          <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
            } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/saved" element={
            <PrivateRoute>
              <Saved />
            </PrivateRoute>
          } />
          <Route path="/profile" element={
            <PrivateRoute>
            <Profile />
            </PrivateRoute>
          } />
          <Route path="/mockman" element={<MockmanEs />} />
        </Routes>
        <Toaster position="top-right" reverseOrder={true}
          toastOptions={{ style: { border: `1px solid royalblue` } }} />
      </div>
    </div>
  );
}

export default App;
