import Main_Routes from './All_Routes/Main_Routes';
import './App.css';
import { BankApplicationMain } from './Components/BankApplicationMain';
import Navbar from './Components/Navbar';




function App() {
  return (
    <div className="App">

      <Navbar />
      <Main_Routes />

    </div>
  );
}

export default App;
