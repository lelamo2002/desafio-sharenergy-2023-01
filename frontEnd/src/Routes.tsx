import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CatErrors } from './pages/CatErrors';
import { Customers } from './pages/Customers';
import { Dogs } from './pages/Dogs';
import { Login } from './pages/Login';
import { RandomUsers } from './pages/RandomUsers';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/customers" element={<Customers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/cats" element={<CatErrors />} />
        <Route path="/users" element={<RandomUsers />} />
      </Routes>
    </Router>
  );
}

export { AppRoutes };
