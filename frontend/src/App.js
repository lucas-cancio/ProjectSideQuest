import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LandingPage from './pages/landing.js'
import QuestSearchPage from './pages/questSearch.js'
import QuestDetailsPage from './pages/questDetails.js'
import QuestEditorPage from './pages/questEditor.js'
import ProfilePage from './pages/profile.js'
import LoginPage from './pages/login.js'
import SignupPage from './pages/signup.js'



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/quests/search/" element={<QuestSearchPage />} />
                <Route path="/quests/editor/" element={<QuestEditorPage />} />
                <Route path="/quests/:questId/" element={<QuestDetailsPage />} />
                <Route path="/account/profile/" element={<ProfilePage />} />
                <Route path="/account/login/" element={<LoginPage />} />
                <Route path="/account/signup/" element={<SignupPage />} />
                <Route path="*" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
}