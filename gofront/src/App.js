import './App.css';
import logo from './assets/logo.png';
import { useState, useEffect } from 'react';

function App() {
const [loginLigado, setloginLigado] = useState(false);
const [modalLigado, setmodalLigado] = useState(false);
const [teste, setTeste] = useState(true);

useEffect(() => {
  setloginLigado(true);
  setmodalLigado(true);
}, [teste]);

function handleCadastrar () {
  setTeste(false)
};

  return (
    <div className="App">
      <img src={logo} alt="Logo" className='logo'/>
       {loginLigado && 
       <div className='modal_login'>  
        <h2>Login</h2>
        <input name='email' type="text" placeholder='Email...'/>
        <input name='senha' type="text" placeholder='Senha...'/>
        <div className="cadastrar" onClick={() => handleCadastrar()}>Cadastrar Usuário</div>
      </div>}
      {!modalLigado && 
        <div className='modal_cadastrar hidden'>
          <h2>Cadastrar Novo Usuário</h2>
          <input name='nome' type="text" placeholder='Nome...'/>
          <input name='email' type="text" placeholder='Email...'/>
          <input name='senha' ype="text" placeholder='Senha...'/>
          <button> Enviar </button>
          </div>}
        </div>
  );
}

export default App;