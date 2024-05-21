import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeadMenu from './Components/visualComponents/estructureComponents/headMenu/headMenu';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<HeadMenu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
