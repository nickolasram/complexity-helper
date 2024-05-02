import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Main from './pages/Main'
import Exercises from './pages/Exercises';
import FlashcardCategories from './pages/Categories';
import FlashcardPage from './pages/FlashcardPage';
import TutorialHub from './pages/Tutorials'

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Navigate to="/Home" />} />
            <Route path='/Home' element={<Main />} />
            <Route path='/Exercises' element={<Exercises />} />
            <Route path='/Flashcards' element={<FlashcardCategories />} />
            <Route path='/FlashcardPage/:category' element={<FlashcardPage />} />
            <Route path='/Tutorial' element={<TutorialHub />} />
        </Routes>
    </Router>
  );
}

export default App;
