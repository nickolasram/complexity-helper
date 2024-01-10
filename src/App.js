import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index2.css';
import Main from './pages/Main'
import Exercises from './pages/Exercises';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Navigate to="/Home" />} />
            <Route path='/Home' element={<Main />} />
            <Route path='/Exercises' element={<Exercises />} />
        </Routes>
    </Router>
  );
}

export default App;
