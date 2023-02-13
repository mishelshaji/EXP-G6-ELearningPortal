import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CourseSearch from "./pages/student/CourseSearch";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/search/:q" element={<CourseSearch />} />
    </Routes>
  );
}

export default App;