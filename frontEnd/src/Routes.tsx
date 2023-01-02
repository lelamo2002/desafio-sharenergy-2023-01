import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </Router>
  )
}

export { AppRoutes };