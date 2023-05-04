import logo from './logo.svg';
import './App.css';
import HellWorld from './components/HelloWorld'

function App() {
  const name = 'Esley'
  const newName = name.toLocaleUpperCase()

  function sum(a, b) {
    return a + b

  }
  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>NOVO PROJETO</h1>
      <h1>{newName}</h1>
      <h1>soma: {sum(1, 2)}</h1>
      <img src={url} alt="Minha imagem" />
      <HellWorld />
    </div>
  );
}

export default App;
