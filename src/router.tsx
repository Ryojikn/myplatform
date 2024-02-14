import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Playground } from "./pages/playground";
import { AboutPage } from "./pages/About";
import { Login } from "./login"

export function AppRouter () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Playground />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
