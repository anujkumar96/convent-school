import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';

import MainPage from './components/mainPage';
import Overview from './components/overview';
import MissionVision from './components/mission';
import CoCurricularActivities from './components/coCurricularActivities';
import Sports from './components/sports';
import PrincipalMessage from './components/principalMessage';
import GalleryPage from './components/gallery';
import CampusPage from './components/campus';
import LaboratoriesPage from './components/laboratory';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/convent-school" element={<MainPage />} />
      <Route path="/overview" element={<Overview/>} />
      <Route path="/mission-vision" element={<MissionVision/>} />
      <Route path="/curricular-activities" element={<CoCurricularActivities/>} />
      <Route path="/sports" element={<Sports/>} />
      <Route path="/principal-message" element={<PrincipalMessage/>} />
      <Route path="/gallery" element={<GalleryPage/>} />
      <Route path="/campus" element={<CampusPage/>} />
      <Route path="/lab" element={<LaboratoriesPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
