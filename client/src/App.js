import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CourseSearch from "./pages/student/CourseSearch";
import CourseRequest from "./pages/admin/CourseRequest";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/search/:q" element={<CourseSearch />} />
      <Route path="/CourseRequest" element={<CourseRequest/>}/>
    </Routes>
  );
}

export default App;