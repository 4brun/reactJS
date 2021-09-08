
import './App.css';
import MassegeComp from './components/MassageComp/MassageComp';

const msg = "This is my massage"

function App() {
  return (
    <div className="App">
      <MassegeComp massage={msg} />
    </div>
  );
}

export default App;
