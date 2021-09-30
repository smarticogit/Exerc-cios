import './App.css';
import  { useState, useEffect, useRef } from 'react';

function App() {
  const [paises, setPaises] = useState([]);
  const [value, setValue] = useState('');
  const [paisFiltrado, setPaisFiltrado] = useState();
  const [valorsrc, setValorsrc] = useState();
  const [ligado, setLigado] = useState(false);
  const mainpais = useRef([]);

  function Card ({image, name}) {
    return (
      <div className='pais'>
          <h2>{name}</h2>
          <img src={image} className='flag' onClick={(e) => handleBtn(e) } />
      </div>
    )
  }

  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
    .then( resposta => resposta.json())
    .then(data => setPaises(data));
    
  }, []); 
  
  useEffect(() => {
    let paisFilter = paises.filter((pais) => pais.name.common.includes(value));
    setPaisFiltrado(paisFilter)
  }, [value]);

  const temp = paises.filter(pais => pais.flags[0].includes(valorsrc));
  mainpais.current = temp;

  function handleBtn (e) {
    setValorsrc(e.target.src)
    setLigado(true)
  }

  function handleApp () {
    setValue('');
    setLigado(false);
  }

  return (
    <div className="App">
      <h1>Países</h1>
      <div className="main">
        <input type="text" placeholder='Busca país...' onChange={(e) => setValue(e.target.value)}/>
        {ligado && (
        <div className="modal" onClick={e => handleApp(e)}>
            <div className="div">
              <img src={valorsrc} className='flag2'/>
            </div>
            <div className='modal_texto'>
              <h5>{mainpais.current[0].name.common}</h5>
              <h4>Região: {mainpais.current[0].region}</h4>
              <h4>Capital: {mainpais.current[0].capital}</h4>
              <h4>Área: {mainpais.current[0].area}</h4>
              <h4>População: {mainpais.current[0].population}</h4>
              <h4><a target='_blank' href={mainpais.current[0].maps.googleMaps}>Ver no mapa</a></h4>

            </div>
        </div>)}
        <div className="paises">
          {value !== '' ? paisFiltrado.map ((pais) => {
            return (
              <Card 
              name={pais.name.common} 
              image={pais.flags[0]}
              />
            )
          }) :
           paises.map ((pais) => {
            return (
              <Card 
              name={pais.name.common} 
              image={pais.flags[0]}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default App;



