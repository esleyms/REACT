import logo from './logo.svg';
import './App.css';
import HellWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoas'
import Pessoas from './components/Pessoas';
import Frase from './components/Frase'
import List from './components/List'


function App() {
  const name = 'Esley'
  const newName = name.toLocaleUpperCase()
  const nome = "Maria"

  function sum(a, b) {
    return a + b

  }
  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">

      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <h1>{newName}</h1>
      <p></p>
      <button>Ativar</button>
      <p></p>
      <h1>soma: {sum(1, 2)}</h1>
      <img src={url} alt="Minha imagem" /> 
      <SayMyName nome={nome} />
      <Pessoas nome=" João"
        idade="35"
        profissão="Programador"
      />
      <List/>
    </div>
  );
}

export default App;
