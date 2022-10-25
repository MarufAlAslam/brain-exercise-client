import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Courses from './pages/Courses/Courses';
import Faqs from './pages/Faqs/Faqs';
import Home from './pages/Home/Home';
import Main from './pages/Main/Main';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
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
          path: '*',
          element: <h2>Uh Oh!</h2>
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
