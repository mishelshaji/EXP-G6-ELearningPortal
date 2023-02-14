import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import InstructorLayout from "./pages/instructor/InstructorLayout";
import StudentLayout from "./pages/student/StudentLayout";
import AdminLayout from "./pages/admin/AdminLayout";
import UserLayout from "./pages/UserLayout";
import CourseSearch from "./pages/student/CourseSearch";

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

      }
    ]
  },
  {
    path: 'instructor',
    element: <InstructorLayout />,
    children: [
      {

      }
    ]
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      {

      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;