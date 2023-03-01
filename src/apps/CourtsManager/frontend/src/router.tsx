import {
  createBrowserRouter,
} from "react-router-dom";
import { LandingPage } from "./app/pages/landing/landing";
import { LoginPage } from "./app/pages/login/login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
]);

export default router;
