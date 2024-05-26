import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeadMenu from './Components/visualComponents/estructureComponents/headMenu/headMenu';
import Estoque from './pages/estoque/estoque';
import Fornecedores from './pages/fornecedores/fornecedores';
import Produtos from './pages/produtos/produtos.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HeadMenu />} />
          <Route path='/estoque' element={<Estoque />} />
          <Route path='/fornecedores' element={<Fornecedores />} />
          <Route path='/produtos' element={<Produtos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
