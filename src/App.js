import Main_Routes from './All_Routes/Main_Routes';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main_Routes/>
      {/* <h1>"Welcome to our remarkable tech team where innovation knows no limits!"</h1> */}
    </div>
  );
}

export default App;
