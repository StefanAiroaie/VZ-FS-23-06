import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import ToDos from "./pages/ToDos";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import BlogDetail from "./pages/BlogDetail";
import Nav from "./components/header/Nav";
import Expenses from "./pages/Expenses";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<ToDos />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/admin' element={<Admin />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </>
  );
}

export default App;
