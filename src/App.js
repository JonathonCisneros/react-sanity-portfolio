import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Post from './components/Post';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/post/:slug' element={<SinglePost />} />
          <Route path='/post' element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
