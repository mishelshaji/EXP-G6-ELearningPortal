import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import InstructorLayout from './pages/instructor/InstructorLayout';
import StudentLayout from './pages/student/StudentLayout';
import AdminLayout from './pages/admin/AdminLayout';
import UserLayout from './pages/UserLayout';
import CourseSearch from './pages/student/CourseSearch';
import Login from "./pages/Login";
import CourseListing from './pages/instructor/CourseList';
import CourseCreate from './pages/instructor/CourseCreate';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'search/:q',
        element: <CourseSearch />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
  {
    path: 'student',
    element: <StudentLayout />
  },
  {
    path: 'instructor',
    element: <InstructorLayout />,
    children: [
      {
        path: 'courses',
        element: <CourseListing />
      },
      {
        path: 'create',
        element: <CourseCreate />
      }
    ]
  },
  {
    path: 'admin',
    element: <AdminLayout />
  }
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;