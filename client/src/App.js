import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import InstructorLayout from './pages/instructor/InstructorLayout';
import StudentLayout from './pages/student/StudentLayout';
import AdminLayout from './pages/admin/AdminLayout';
import UserLayout from './pages/UserLayout';
import CourseSearch from './pages/student/CourseSearch';
import ViewCourseDetails from './pages/student/CourseView';
import Login from './pages/Login';
import CourseCreate from './pages/instructor/CourseCreate';
import StudentProfile from './pages/student/StudentProfile';
import UserManagement from './pages/admin/UserManagement';
import CourseViewer from './pages/student/CourseViewer';
import StudentRegistration from './pages/student/StudentRegistration';
import InstructorRegistration from './pages/instructor/InstructorRegistration';
import EnrolledCourses from './pages/student/EnrolledCourses';
import Order from './pages/student/Order';
import InstructorProfile from './pages/instructor/InstructorProfile';
import InstructorDashboard from './pages/instructor/InstructorDashboard';
import FeedbackList from './pages/instructor/FeedbackList';
import CourseList from './pages/instructor/CourseList';
import AdminDashboard from './pages/admin/AdminDashboard';
import CourseContent from './pages/instructor/CourseContent';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '',
                element: <Home page='landing'/>
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
                element: <Home page='student-home'/>
            },
            {
                path: 'search/:q',
                element: <CourseSearch />
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
            },
            {
                path: 'courses',
                element: <ViewCourseDetails />
            }
        ]
    },
    {
        path: 'instructor',
        element: <InstructorLayout />,
        children: [
            {
                path: '',
                element: <InstructorDashboard />
            },
            {
                path: 'profile',
                element: <InstructorProfile/>
            },
            {
                path: 'feedback-list',
                element: <FeedbackList />
            },
            {
                path: 'courses',
                element: <CourseList />
            },
            {
                path: 'create',
                element: <CourseCreate />
            },
            {
                path: 'course-content',
                element: <CourseContent/>
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
            },
            {
                path: 'user-management',
                element: <UserManagement />
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={routes}></RouterProvider>;
}

export default App;