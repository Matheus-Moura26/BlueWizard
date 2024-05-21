import React from "react"
import "./headMenu.css"
import { Link } from "react-router-dom"



export default function HeadMenu() {
    return (
      <div className='navBarLoja-card-navbar'>
            <li >
                <Link className="navLink" to="/estoque">Estoque</Link>
            </li>
            <li >
                <Link className="navLink"  to="/fornecedores">Fornecedores</Link>
            </li>
            <li >
                <Link className="navLink"  to="/produtos">Produtos</Link>
            </li>
          
      </div>
    );
  };