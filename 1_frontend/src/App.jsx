import { AuthProvider } from './context/AuthContext';
import Profile from './components/Profile';
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
      path: '/profile',
      element: <Profile />,
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
