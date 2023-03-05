import {BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HomePage from "./pages/home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
