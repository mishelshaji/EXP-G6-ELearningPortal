import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import InstructorLayout from './pages/instructor/InstructorLayout';
import StudentLayout from './pages/student/StudentLayout';
import AdminLayout from './pages/admin/AdminLayout';
import UserLayout from './pages/UserLayout';
import CourseSearch from './pages/student/CourseSearch';

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
    element: <InstructorLayout />,
    children: [
      {
        path: 'courses',
        element: <CourseListing/>
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