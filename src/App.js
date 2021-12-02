import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home/Home';
import Learning from './Pages/Learning/Learning';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Error404 from './Pages/Error404/Error404';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/learning" element={<Learning />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
