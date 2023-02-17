import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import InstructorLayout from './pages/instructor/InstructorLayout';
import StudentLayout from './pages/student/StudentLayout';
import AdminLayout from './pages/admin/AdminLayout';
import UserLayout from './pages/UserLayout';
import CourseSearch from './pages/student/CourseSearch';
import Login from "./pages/Login";
import CourseCreate from './pages/instructor/CourseCreate';
import StudentProfile from './pages/student/StudentProfile';
import UserManagement from './pages/admin/UserManagement';
import CourseViewer from './pages/student/CourseViewer';
import StudentRegistration from './pages/student/StudentRegistration';
import InstructorRegistration from './pages/instructor/InstructorRegistration';
import EnrolledCourses from './pages/student/EnrolledCourses';
import Order from './pages/student/Order';
import InstructorDashboard from './pages/instructor/InstructorDashboard';
import InstructorCourses from './pages/instructor/InstructorCourses.js';
import CourseList from './pages/instructor/CourseList';

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
                path: 'login',
                element: <Login />
            },
            {
                path: 'student/registration',
                element: <StudentRegistration />
            },
            {
                path: 'instructor/registration',
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
            },
            {
                path: 'profile',
                element: <StudentProfile />
            },
            {
                path: 'course-view/:q',
                element: <CourseViewer />
            }
        ]
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
            },
            {
                path: 'courses',
                element: <CourseList />
            },
            {
                path: 'create',
                element: <CourseCreate />
            }
        ]
    },
    {
        path: 'admin',
        element: <AdminLayout />,
        children: [
            {
                path: 'user-management',
                element: <UserManagement/>
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={routes}></RouterProvider>;
}

export default App;