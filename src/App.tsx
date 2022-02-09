import './App.css';
import LogoSanar from './components/LogoSanar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoSanar/>
        <p>
          Acessos a milhares de artigos online.
        </p>
        <button
          className="Button"
        >
          Começar
        </button>
      </header>
    </div>
  );
}

export default App;
