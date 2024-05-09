import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './assets/styles/App.css';
import LandingPage from './pages/landing.js'
import QuestSearchPage from './pages/questSearch.js'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/quests/search/" element={<QuestSearchPage />} />
                <Route path="*" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
}