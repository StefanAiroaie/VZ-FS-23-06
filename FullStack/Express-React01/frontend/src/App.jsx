import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import ToDos from "./pages/ToDos";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import BlogDetail from "./pages/BlogDetail";
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<ToDos />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
