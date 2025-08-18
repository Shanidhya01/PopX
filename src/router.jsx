import App from "./App";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Account } from "./pages/Account";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
