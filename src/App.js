import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import DeepDives from './components/DeepDives/deepdives';
import Missions from './components/Missions/missions';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/deepdives' element={<DeepDives />}/>
          <Route path='/missions' element={<Missions />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
