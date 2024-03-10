import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/BlogUI/Blog';
import AcademicResources from './components/NavigationComponents/AcademicResources';
import Alumni from './components/NavigationComponents/Alumni';
import CreatePost from './components/CreatePost/CreatePost';
import Campus from './components/NavigationComponents/Campus';
import CareerService from './components/NavigationComponents/CareerService';
import Culture from './components/NavigationComponents/Culture';
import Design from './components/NavigationComponents/Design';
import Health from './components/NavigationComponents/Health';
import LocalCommunity from './components/NavigationComponents/LocalCommunity';
import Social from './components/NavigationComponents/Social';
import Sports from './components/NavigationComponents/Sports';
import Tech from './components/NavigationComponents/Tech';
import Travel from './components/NavigationComponents/Travel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Blog />} />
        <Route path="/createPost" element={<CreatePost/>} />
        <Route path="/technology" element={<Tech/>} />
        <Route path="/design" element={<Design/>} />
        <Route path="/academic-resources" element={<AcademicResources/>} />
        <Route path="/career-services" element={<CareerService/>} />
        <Route path="/campus" element={<Campus/>} />
        <Route path="/culture" element={<Culture/>} />
        <Route path="/local-community-resources" element={<LocalCommunity/>} />
        <Route path="/social" element={<Social/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/health-and-wellness" element={<Health/>} />
        <Route path="/travel" element={<Travel/>} />
        <Route path="/alumni" element={<Alumni/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
