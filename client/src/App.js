import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import InstructorLayout from './pages/instructor/InstructorLayout';
import StudentLayout from './pages/student/StudentLayout';
import AdminLayout from './pages/admin/AdminLayout';
import UserLayout from './pages/UserLayout';
import CourseSearch from './pages/student/CourseSearch';
import Login from './pages/Login';
import StudentRegistration from './pages/student/StudentRegistration';
import InstructorRegistration from './pages/instructor/InstructorRegistration';
import EnrolledCourses from './pages/student/EnrolledCourses';
import Order from './pages/student/Order';

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
            },
            {
                path: '/student/registration',
                element: <StudentRegistration />
            },
            {
                path: '/instructor/registration',
                element: <InstructorRegistration />
            }
        ]
    },
    {
        path: 'student',
        element: <StudentLayout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'enrolled-courses',
                element: <EnrolledCourses />
            },
            {
                path: 'order',
                element: <Order />
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


function App() {
    return <RouterProvider router={routes}></RouterProvider>;
}

export default App;