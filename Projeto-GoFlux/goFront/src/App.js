import './App.css';
import logo from './assets/logo.png';
import lapis from './assets/lapis.png'
import excluir from './assets/excluir.png'
import { useState } from 'react';
import { get, post } from './utils/api';

function App() {

  const [activeLogo, setActiveLogo] = useState(true);
  const [loginLigado, setloginLigado] = useState(true);
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorCad_user, setErrorCad_user] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState('');
  const [modalLigado, setmodalLigado] = useState(false);
  const [modalMenu, setModalMenu] = useState(false);
  const [formLogin, setFormLogin] = useState({ email: '', senha: '' });
  const [formCadastro, setFormCadastro] = useState({ nome: '', email: '', senha: '' });
  const [formCad_transp, setFormCad_transp] = useState({ nome: '', doc: '', about: '', active: '', site: '' });
  const [formCad_embarc, setFormCad_embarc] = useState({ nome: '', doc: '', about: '', active: '', site: '' });
  const [formCad_ofertas, setFormCad_ofertas] = useState({ id_customer: '', from: '', to: '', initial_value: 0, amount: 0, amount_type: '' });
  const [formCad_lances, setFormCad_lances] = useState({ id_provider: '', id_offer: '', value: '', amount: '' });
  const [resultado, setResultado] = useState('');
  const [listTransps, setListTransps] = useState();
  const [listEmbars, setListEmbars] = useState();
  const [listOfertas, setListOfertas] = useState();
  const [listLances, setListLances] = useState();
  const [transOk, setTransOk] = useState(false);
  const [embarsOk, setEmbarsOk] = useState(false);
  const [ofertasOk, setOfertasOk] = useState(false);
  const [lancesOk, setLancesOk] = useState(false);
  const [cad_transpOk, setCad_transpOk] = useState(false);
  const [cad_embarcOk, setCad_embarcOk] = useState(false);
  const [cad_ofertasOk, setCad_ofertasOk] = useState(false);
  const [cad_lancesOk, setCad_lancesOk] = useState(false);
  const [modal_cad_transp, setmodal_cad_transp] = useState(false);
  const [modal_cad_embarc, setmodal_cad_embarc] = useState(false);
  const [modal_cad_ofertas, setmodal_cad_ofertas] = useState(false);
  const [modal_cad_lances, setmodal_cad_lances] = useState(false);

  async function logar() {
    let data = await post('login',
      {
        email: formLogin.email,
        passw: formLogin.senha
      },
      'POST',
      ''
    );
    data = await data.result.json()
    localStorage.setItem('TOKEN', data.token);

    if (data.Usuario) {
      setloginLigado(false);
      setModalMenu(true);
      setUsuarioLogado(data.Usuario.username);
      setActiveLogo(false);
    } else {
      setResultado(data);
      setErrorLogin(true);
      localStorage.removeItem('TOKEN');
    }
  };

  function logout() {
    localStorage.removeItem('TOKEN');
    window.location.reload();
    setLancesOk(false);
    setOfertasOk(false);
    setEmbarsOk(false);
    setTransOk(false);
    setActiveLogo(true);
  }

  async function cadastrarUser() {
    let data = await post('usuarios',
      {
        nome: formCadastro.nome,
        email: formCadastro.email,
        passw: formCadastro.senha
      },
      'POST'
    );
    if (!data.erro) {
      setloginLigado(true);
      setmodalLigado(false);
    }
    data = await data.result.json();
    setResultado(data);
    setErrorCad_user(true);
  };

  async function cadastrarTransp() {
    const headers = {
      'Content-type': 'application/json'
    };
    headers["Authorization"] = `Bearer ${localStorage.getItem('TOKEN')}`;
    const response = await fetch(`http://localhost:8000/transportadores`, {
      method: 'POST',
      body: JSON.stringify({
        name: formCad_transp.nome,
        doc: formCad_transp.doc,
        about: formCad_transp.about,
        active: formCad_transp.active,
        site: formCad_transp.site
      })
      ,
      headers
    });
    const data = await response.json();
    setResultado(data);
    setCad_transpOk(true);
  };

  async function cadastrarEmbarc() {
    const headers = {
      'Content-type': 'application/json'
    };
    headers["Authorization"] = `Bearer ${localStorage.getItem('TOKEN')}`;
    const response = await fetch(`http://localhost:8000/embarcadores`, {
      method: 'POST',
      body: JSON.stringify({
        name: formCad_embarc.nome,
        doc: formCad_embarc.doc,
        about: formCad_embarc.about,
        active: formCad_embarc.active,
        site: formCad_embarc.site
      })
      ,
      headers
    });
    const data = await response.json();
    setResultado(data);
    setCad_embarcOk(true);
  };

  async function cadastrarOfertas() {
    const headers = {
      'Content-type': 'application/json'
    };
    headers["Authorization"] = `Bearer ${localStorage.getItem('TOKEN')}`;
    const response = await fetch(`http://localhost:8000/ofertas`, {
      method: 'POST',
      body: JSON.stringify({
        id_customer: formCad_ofertas.id_customer,
        from: formCad_ofertas.from,
        to: formCad_ofertas.to,
        initial_value: formCad_ofertas.initial_value,
        amount: formCad_ofertas.amount,
        amount_type: formCad_ofertas.amount_type
      }),
      headers
    });
    const data = await response.json();
    setResultado(data);
    setCad_ofertasOk(true);
  };

  async function cadastrarLances() {
    const headers = {
      'Content-type': 'application/json'
    };
    headers["Authorization"] = `Bearer ${localStorage.getItem('TOKEN')}`;
    const response = await fetch(`http://localhost:8000/lances`, {
      method: 'POST',
      body: JSON.stringify({
        id_provider: formCad_lances.id_provider,
        id_offer: formCad_lances.id_offer,
        value: formCad_lances.value,
        amount: formCad_lances.amount
      }),
      headers
    });
    const data = await response.json();
    setResultado(data);
    setCad_lancesOk(true);
  };

  function handleCadastrar() {
    setloginLigado(false);
    setmodalLigado(true);
    setErrorCad_user(false);
    setErrorLogin(false);
  };

  function handleCloseUser() {
    setloginLigado(true);
    setmodalLigado(false);
    setErrorLogin(false);
    setErrorCad_user(false);
  };

  function handleCloseTransp() {
    setmodal_cad_transp(false);
    clean();
  };

  function handleCloseEmbarc() {
    setmodal_cad_embarc(false);
    clean();
  };

  function handleCloseOfertas() {
    setmodal_cad_ofertas(false);
    clean();
  };

  function handleCloseLances() {
    setmodal_cad_lances(false);
    clean();
  };

  function handleSubmitLogin(event) {
    event.preventDefault();
    setFormLogin({ email: '', senha: '' });
    setErrorLogin(false);
    logar();
  };

  function handleSubmitUsuario(event) {
    event.preventDefault();
    setFormCadastro({ nome: '', email: '', senha: '', });
    cadastrarUser();
    setErrorLogin(false);
  };

  function handleSubmitTransp(event) {
    event.preventDefault();
    setFormCad_transp({ nome: '', doc: '', about: '', active: '', site: '' });
    cadastrarTransp();
    setErrorLogin(false);
  }

  function handleSubmitEmbarc(event) {
    event.preventDefault();
    setFormCad_transp({ nome: '', doc: '', about: '', active: '', site: '' });
    cadastrarEmbarc();
  };

  function handleSubmitOfertas(event) {
    event.preventDefault();
    setFormCad_ofertas({ id_customer: '', from: '', to: '', initial_value: '', amount: '', amount_type: '' });
    cadastrarOfertas();
  };

  function handleSubmitLances(event) {
    event.preventDefault();
    setFormCad_lances({ id_provider: '', id_offer: '', value: '', amount: '' });
    cadastrarLances();
  };

  function handleChangeLogin(event) {
    event.preventDefault();
    setFormLogin({ ...formLogin, [event.target.name]: event.target.value });
    setErrorLogin(false);
    clean();
  };

  function handleChangeCadastro(event) {
    event.preventDefault();
    setFormCadastro({ ...formCadastro, [event.target.name]: event.target.value });
    setErrorLogin(false);
  };

  function handleChangeCadastroTransp(event) {
    event.preventDefault();
    setFormCad_transp({ ...formCad_transp, [event.target.name]: event.target.value });
    setErrorLogin(false);
  };

  function handleChangeCadastroEmbarc(event) {
    event.preventDefault();
    setFormCad_embarc({ ...formCad_embarc, [event.target.name]: event.target.value });
    setErrorLogin(false);
  };

  function handleChangeCadastroOfertas(event) {
    event.preventDefault();
    setFormCad_ofertas({ ...formCad_ofertas, [event.target.name]: event.target.value });
    setErrorLogin(false);
  };

  function handleChangeCadastroLances(event) {
    event.preventDefault();
    setFormCad_lances({ ...formCad_lances, [event.target.name]: event.target.value });
    setErrorLogin(false);
  };

  function clean() {
    setEmbarsOk(false);
    setOfertasOk(false);
    setLancesOk(false);
    setTransOk(false);
    setErrorLogin(false);
    setCad_transpOk(false);
    setCad_embarcOk(false);
    setCad_ofertasOk(false);
    setCad_lancesOk(false);
  }

  function cleanforms() {
    setResultado('');
    setFormLogin('');
    setFormCadastro('');
  }

  function handleOpen_modal_cad_transp() {
    setmodal_cad_transp(true);
    setmodal_cad_ofertas(false);
    setmodal_cad_embarc(false);
    setmodal_cad_lances(false);
    clean();
    cleanforms();
  };

  function handleOpen_modal_cad_embarc() {
    setmodal_cad_embarc(true);
    setmodal_cad_transp(false);
    setmodal_cad_ofertas(false);
    setmodal_cad_lances(false);
    clean();
    cleanforms();
  };

  function handleOpen_modal_cad_ofertas() {
    setmodal_cad_transp(false);
    setmodal_cad_ofertas(true);
    setmodal_cad_embarc(false);
    setmodal_cad_lances(false);
    clean();
    cleanforms();
  };

  function handleOpen_modal_cad_lances() {
    setmodal_cad_lances(true);
    setmodal_cad_transp(false);
    setmodal_cad_ofertas(false);
    setmodal_cad_embarc(false);
    clean();
    cleanforms();
  };

  async function loadListTransps() {
    const transps = await get('transportadores', localStorage.getItem('TOKEN'));
    if (transps.erro) {
      setResultado(transps.data);
      setTransOk(false);
      setEmbarsOk(false);
      setOfertasOk(false);
      setLancesOk(false);
      setErrorLogin(true);
      setmodal_cad_transp(false);
      setmodal_cad_ofertas(false);
      setmodal_cad_embarc(false);
      return;
    }
    setListTransps(transps.data);
    setTransOk(true);
    setEmbarsOk(false);
    setOfertasOk(false);
    setLancesOk(false);
    setErrorLogin(false);
    setmodal_cad_transp(false);
    setmodal_cad_ofertas(false);
    setmodal_cad_embarc(false);
  }

  async function loadListEmbars() {
    const embars = await get('embarcadores', localStorage.getItem('TOKEN'));

    if (embars.erro) {
      setResultado(embars.data);
      setTransOk(false);
      setEmbarsOk(false);
      setOfertasOk(false);
      setLancesOk(false);
      setErrorLogin(true);
      setmodal_cad_transp(false);
      setmodal_cad_ofertas(false);
      setmodal_cad_embarc(false);
      return;
    }
    setListEmbars(embars.data);
    setEmbarsOk(true);
    setTransOk(false);
    setOfertasOk(false);
    setLancesOk(false);
    setTransOk(false);
    setErrorLogin(false);
    setmodal_cad_transp(false);
    setmodal_cad_ofertas(false);
    setmodal_cad_embarc(false);
  }

  async function loadListOfertas() {
    const ofertas = await get('ofertas', localStorage.getItem('TOKEN'));

    if (ofertas.erro) {
      setResultado(ofertas.data);
      setTransOk(false);
      setEmbarsOk(false);
      setOfertasOk(false);
      setLancesOk(false);
      setErrorLogin(true);
      setmodal_cad_transp(false);
      setmodal_cad_ofertas(false);
      setmodal_cad_embarc(false);
      return;
    }
    setListOfertas(ofertas.data);
    setOfertasOk(true);
    setEmbarsOk(false);
    setTransOk(false);
    setLancesOk(false);
    setTransOk(false);
    setErrorLogin(false);
    setmodal_cad_transp(false);
    setmodal_cad_ofertas(false);
    setmodal_cad_embarc(false);
  }

  async function loadListLances() {
    const lances = await get('lances', localStorage.getItem('TOKEN'));

    if (lances.erro) {
      setResultado(lances.data);
      setErrorLogin(true);
      setTransOk(false);
      setEmbarsOk(false);
      setOfertasOk(false);
      setLancesOk(false);
      setmodal_cad_transp(false);
      setmodal_cad_ofertas(false);
      setmodal_cad_embarc(false);
      return;
    }
    setListLances(lances.data);
    setLancesOk(true);
    setOfertasOk(false);
    setEmbarsOk(false);
    setTransOk(false);
    setTransOk(false);
    setErrorLogin(false);
    setmodal_cad_transp(false);
    setmodal_cad_ofertas(false);
    setmodal_cad_embarc(false);
  }

  async function handleDeleteTransps(id) {
    const headers = {
      'Content-type': 'application/json'
    };
    headers["Authorization"] = `Bearer ${localStorage.getItem('TOKEN')}`;
    const result = await fetch(`http://localhost:8000/transportadores/${id}`, {
      method: 'DELETE',
      headers,
    })
    loadListTransps()
  };

  async function handleDeleteEmbars(id) {
    const headers = {
      'Content-type': 'application/json'
    };
    headers["Authorization"] = `Bearer ${localStorage.getItem('TOKEN')}`;
    const result = await fetch(`http://localhost:8000/embarcadores/${id}`, {
      method: 'DELETE',
      headers,
    });
    loadListEmbars();
  };

  async function handleDeleteOfertas(id) {
    const headers = {
      'Content-type': 'application/json'
    };
    headers["Authorization"] = `Bearer ${localStorage.getItem('TOKEN')}`;
    const result = await fetch(`http://localhost:8000/ofertas/${id}`, {
      method: 'DELETE',
      headers,
    });
    loadListOfertas();
  };

  async function handleDeleteLances(id) {
    const headers = {
      'Content-type': 'application/json'
    };
    headers["Authorization"] = `Bearer ${localStorage.getItem('TOKEN')}`;
    const result = await fetch(`http://localhost:8000/lances/${id}`, {
      method: 'DELETE',
      headers,
    });
    loadListLances();
  };

  return (
    <div className="App">
      {activeLogo && <img src={logo} alt="Logo" className='logo' />}
      {loginLigado &&
        <div className='modal_login'>
          <h2>Login</h2>
          <form onSubmit={handleSubmitLogin}>
            <input name='email' onChange={handleChangeLogin} value={formLogin.email} type="text" placeholder='Email...' />
            <input name='senha' onChange={handleChangeLogin} value={formLogin.senha} type="password" placeholder='Senha...' />
            <button type='submit'> Enviar </button>
          </form>
          <div className="cadastrar" onClick={() => handleCadastrar()}>Cadastrar Usuário</div>
        </div>}
      {errorLogin && <div className='modal_erro_login'>{resultado}</div>}
      {modalLigado &&
        <div className='modal_cadastrar'>
          <h2>Cadastrar Novo Usuário</h2>
          <div className="close" onClick={() => handleCloseUser()}>X</div>
          <form onSubmit={handleSubmitUsuario}>
            <input name='nome' type="text" placeholder='Nome...' value={formCadastro.nome} onChange={handleChangeCadastro} />
            <input name='email' type="text" placeholder='Email...' value={formCadastro.email} onChange={handleChangeCadastro} />
            <input name='senha' type="password" placeholder='Senha...' value={formCadastro.senha} onChange={handleChangeCadastro} />
            <button> Enviar </button>
          </form>
        </div>}
      {errorCad_user && <div className='modal_erro_login'>{resultado}</div>}
      {modalMenu &&
        <div className='modal_menu'>
          <h3>Olá, {usuarioLogado}</h3> <br />
          <div className="btn_itens_menu">
            <a onClick={() => loadListTransps()}>Transportadores</a>
            <a onClick={() => handleOpen_modal_cad_transp()}><h6>Cadastrar</h6></a>
          </div>
          <div className="btn_itens_menu">
            <a onClick={() => loadListEmbars()}>Embarcadores</a>
            <a onClick={() => handleOpen_modal_cad_embarc()}><h6>Cadastrar</h6></a>
          </div>
          <div className="btn_itens_menu">
            <a onClick={() => loadListOfertas()}>Ofertas</a>
            <a onClick={() => handleOpen_modal_cad_ofertas()}><h6>Cadastrar</h6></a>
          </div>
          <div className="btn_itens_menu">
            <a onClick={() => loadListLances()}>Lances</a>
            <a onClick={() => handleOpen_modal_cad_lances()}><h6>Cadastrar</h6></a>
          </div>
          <a className="logout" onClick={() => logout()}>Sair</a>
        </div>}
      {transOk &&
        <div className="list">
          <div className="subtitulo">
            <h2>Transportadores</h2>
          </div>
          {listTransps.map((item) =>
          (
            <section key={item.id}>
              <div className='flexR'>
                <div className='flexR'><h4>Nome:</h4><h5>{item.name}</h5></div>
                <div className='flexR'><h4>CNPJ:</h4><h5>{item.doc}</h5></div>
                <div className='flexR'><h4>Sobre</h4><h5>{item.about}</h5></div>
                <div className='flexR'><h4>Site:</h4><h5>{item.site}</h5></div>
              </div>
              <div className='flexR opcoes_list'>
                <img width="15px" alt='editar' src={lapis} />
                <img width="15px" alt='excluir' onClick={() => handleDeleteTransps(item.id)} src={excluir} />
              </div>
            </section>
          )
          )}
        </div>}
      {embarsOk &&
        <div className="list">
          <div className="subtitulo">
            <h2>Embarcadores</h2>
          </div>
          {listEmbars.map((item) =>
          (
            <section key={item.id}>
              <div className='flexR'>
                <div className='flexR'><h4>Nome:</h4><h5>{item.name}</h5></div>
                <div className='flexR'><h4>CNPJ:</h4><h5>{item.doc}</h5></div>
                <div className='flexR'><h4>Sobre</h4><h5>{item.about}</h5></div>
                <div className='flexR'><h4>Site:</h4><h5>{item.site}</h5></div>
              </div>
              <div className='flexR opcoes_list'>
                <img width="15px" alt='editar' src={lapis} />
                <img width="15px" alt='excluir' onClick={() => handleDeleteEmbars(item.id)} src={excluir} />
              </div>
            </section>
          )
          )}
        </div>}
      {ofertasOk &&
        <div className="list">
          <div className="subtitulo">
            <h2>Ofertas</h2>
          </div>
          {listOfertas.map((item) => {
            return (
              <section key={item.id}>
                <div className='flexR'>
                  <div className='flexR'><h4>Origem:</h4><h5>{item.origin}</h5></div>
                  <div className='flexR'><h4>Destino:</h4><h5>{item.destiny}</h5></div>
                  <div className='flexR'><h4>Valor Inicial:</h4><h5>{item.initial_value}</h5></div>
                  <div className='flexR'><h4>Valor:</h4><h5>{item.amount}</h5></div>
                </div>
                <div className='flexR opcoes_list'>
                  <img width="15px" alt='editar' src={lapis} />
                  <img width="15px" alt='excluir' onClick={() => handleDeleteOfertas(item.id)} src={excluir} />
                </div>
              </section>
            )
          })}
        </div>}
      {lancesOk &&
        <div className="list">
          <div className="subtitulo">
            <h2>Lances</h2>
          </div>
          {listLances.map((item) =>
          (
            <section key={item.id}>
              <div className='flexR'>
                <div className='flexR'><h4>ID Oferta:</h4><h5>{item.id_offer}</h5></div>
                <div className='flexR'><h4>Quantia:</h4><h5>{item.amount}</h5></div>
                <div className='flexR'><h4>Valor:</h4><h5>{item.value}</h5></div>
              </div>
              <div className='flexR opcoes_list'>
                <img width="15px" alt='editar' src={lapis} />
                <img width="15px" alt='excluir' onClick={() => handleDeleteLances(item.id)} src={excluir} />
              </div>
            </section>
          )
          )}
        </div>}
      {modal_cad_transp &&
        <div className='modal_cadastrar'>
          <h2>Cadastrar Transportador</h2>
          <div className="close" onClick={() => handleCloseTransp()}>X</div>
          <form onSubmit={handleSubmitTransp}>
            <input name='nome' type="text" placeholder='Nome...' value={formCad_transp.nome} onChange={handleChangeCadastroTransp} />
            <input name='doc' type="text" placeholder='CNPJ...' value={formCad_transp.doc} onChange={handleChangeCadastroTransp} />
            <input name='about' type="text" placeholder='Descricao...' value={formCad_transp.about} onChange={handleChangeCadastroTransp} />
            <input name='active' type="text" placeholder='Ativo...' value={formCad_transp.active} onChange={handleChangeCadastroTransp} />
            <input name='site' type="text" placeholder='Site...' value={formCad_transp.site} onChange={handleChangeCadastroTransp} />
            <button> Enviar </button>
          </form>
          {cad_transpOk && <div className='modal_erro'>{resultado}</div>}
        </div>}
      {modal_cad_embarc &&
        <div className='modal_cadastrar'>
          <h2>Cadastrar Embarcador</h2>
          <div className="close" onClick={() => handleCloseEmbarc()}>X</div>
          <form onSubmit={handleSubmitEmbarc}>
            <input name='nome' type="text" placeholder='Nome...' value={formCad_embarc.nome} onChange={handleChangeCadastroEmbarc} />
            <input name='doc' type="text" placeholder='CNPJ...' value={formCad_embarc.doc} onChange={handleChangeCadastroEmbarc} />
            <input name='about' type="text" placeholder='Descricao...' value={formCad_embarc.about} onChange={handleChangeCadastroEmbarc} />
            <input name='active' type="text" placeholder='Ativo...' value={formCad_embarc.active} onChange={handleChangeCadastroEmbarc} />
            <input name='site' type="text" placeholder='Site...' value={formCad_embarc.site} onChange={handleChangeCadastroEmbarc} />
            <button> Enviar </button>
          </form>
          {cad_embarcOk && <div className='modal_erro'>{resultado}</div>}
        </div>}
      {modal_cad_ofertas &&
        <div className='modal_cadastrar'>
          <h2>Cadastrar Ofertas</h2>
          <div className="close" onClick={() => handleCloseOfertas()}>X</div>
          <form onSubmit={handleSubmitOfertas}>
            <input name='id_customer' type="number" placeholder='ID Cliente...' value={formCad_ofertas.id_customer} onChange={handleChangeCadastroOfertas} />
            <input name='from' type='text' placeholder='Origen...' value={formCad_ofertas.from} onChange={handleChangeCadastroOfertas} />
            <input name='to' type="text" placeholder='Destino...' value={formCad_ofertas.to} onChange={handleChangeCadastroOfertas} />
            <input name='initial_value' type="number" placeholder='Valor Inicial...' value={formCad_ofertas.initial_value} onChange={handleChangeCadastroOfertas} />
            <input name='amount' type="number" placeholder='Quantia...' value={formCad_ofertas.amount} onChange={handleChangeCadastroOfertas} />
            <input name='amount_type' type="text" placeholder='Tipo Quantia...' value={formCad_ofertas.amount_type} onChange={handleChangeCadastroOfertas} />
            <button> Enviar </button>
          </form>
          {cad_ofertasOk && <div className='modal_erro'>{resultado}</div>}
        </div>}
      {modal_cad_lances &&
        <div className='modal_cadastrar'>
          <h2>Cadastrar Lances</h2>
          <div className="close" onClick={() => handleCloseLances()}>X</div>
          <form onSubmit={handleSubmitLances}>
            <input name='id_provider' type="number" placeholder='ID Fornecedor...' value={formCad_lances.id_provider} onChange={handleChangeCadastroLances} />
            <input name='id_offer' type="number" placeholder='ID Oferta...' value={formCad_lances.id_offer} onChange={handleChangeCadastroLances} />
            <input name='value' type="number" placeholder='Valor...' value={formCad_lances.value} onChange={handleChangeCadastroLances} />
            <input name='amount' type="number" placeholder='Quantia...' value={formCad_lances.amount} onChange={handleChangeCadastroLances} />
            <button> Enviar </button>
          </form>
          {cad_lancesOk && <div className='modal_erro'>{resultado}</div>}
        </div>}
    </div>
  );
};

export default App;
