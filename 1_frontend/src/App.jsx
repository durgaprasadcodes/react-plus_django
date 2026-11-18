import { AuthProvider } from './context/AuthContext';
import DashBoard from './pages/DashBoard';
import Home from './pages/Home';
import Login from './pages/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/DashBoard',
      element: <DashBoard />,
    },
    {
      path: '/login',
      element: <Login />
    }
  ]);

  return (
    <>
      <AuthProvider >
        <RouterProvider router={router} />
      </AuthProvider >

    </>
  );
}
