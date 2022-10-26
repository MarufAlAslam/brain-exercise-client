import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Broken from './pages/Broken/Broken';
import Courses from './pages/Courses/Courses';
import Faqs from './pages/Faqs/Faqs';
import Home from './pages/Home/Home';
import Main from './pages/Main/Main';
import ResetPass from './pages/ResetPass/ResetPass';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import User from './pages/User/User';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch("http://localhost:5000/courses")
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: () => fetch("http://localhost:5000/courses")
        },
        {
          path: '/faqs',
          element: <Faqs></Faqs>
        },
        {
          path: '/login',
          element: <SignIn></SignIn>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/dashboard',
          element: <PrivateRoute><User></User></PrivateRoute>
        },
        {
          path: '/reset',
          element: <ResetPass></ResetPass>
        },
        {
          path: '*',
          element: <Broken></Broken>
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
