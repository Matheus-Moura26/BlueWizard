import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeadMenu from './Components/visualComponents/estructureComponents/headMenu/headMenu';
import Estoque from './pages/estoque/estoque';
import Fornecedores from './pages/fornecedores/fornecedores';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<HeadMenu />} />
          <Route path='/estoque' element={<Estoque/>} />
          <Route path='/fornecedores' element={<Fornecedores/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
