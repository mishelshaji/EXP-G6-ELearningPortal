import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import InstructorLayout from './pages/instructor/InstructorLayout';
import StudentLayout from './pages/student/StudentLayout';
import AdminLayout from './pages/admin/AdminLayout';
import UserLayout from './pages/UserLayout';
import CourseSearch from './pages/student/CourseSearch';
import Login from "./pages/Login";
import InstructorDashboard from './pages/instructor/InstructorDashboard';
import InstructorCourses from './pages/instructor/InstructorCourses.js';

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
        path: '',
        element: <InstructorDashboard/>
      },
      {
        path: 'courses',
        element: <InstructorCourses/>
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