import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import InstructorLayout from './pages/instructor/InstructorLayout';
import StudentLayout from './pages/student/StudentLayout';
import AdminLayout from './pages/admin/AdminLayout';
import UserLayout from './pages/UserLayout';
import CourseSearch from './pages/student/CourseSearch';
import Login from './pages/Login';
import CourseListing from './pages/instructor/CourseList';
import AdminDashboard from './pages/admin/AdminDashboard';

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
            }
        ]
    },
    {
        path: 'admin',
        element: <AdminLayout />,
        children: [
            {
                path: '',
                element: <AdminDashboard />
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={routes}></RouterProvider>;
}

export default App;