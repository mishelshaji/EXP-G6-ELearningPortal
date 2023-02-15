import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import InstructorLayout from './pages/instructor/InstructorLayout';
import StudentLayout from './pages/student/StudentLayout';
import AdminLayout from './pages/admin/AdminLayout';
import UserLayout from './pages/UserLayout';
import CourseSearch from './pages/student/CourseSearch';
import StudentProfile from './pages/student/StudentProfile';

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
      }
    ]
  },
  {
    path: 'student',
    element: <StudentLayout />,
    children: [
      {
        path: 'profile',
        element: <StudentProfile/>
      }
    ]
  },
  {
    path: 'instructor',
    element: <InstructorLayout />
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