import './App.css';
import Aika from './components/teht1';
import ArvaaNumero from './components/teht2';
import Laskeminen from './components/teht3';
import LampotilaMuunnin from './components/teht4';
import NumberCheck from './components/teht5';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>-- TÄMÄN HETKINEN AIKA --</p>
        <Aika/>
        <p>-- NUMERON ARVAUS --</p>
        <ArvaaNumero/>
        <p>-- LASKIN --</p>
        <Laskeminen/>
        <p>-- LAMPÖTILA MUUNNIN --</p>
        <LampotilaMuunnin/>
        <p>-- NUMERO TARKISTIN --</p>
        <NumberCheck/>
      </header>
    </div>
  );
}

export default App;
