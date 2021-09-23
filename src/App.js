import './App.css';
import Home from './components/Home'
import About from './components/About'
import Porfolio from './components/Portfolio'
import Contact from './components/Contact'
function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Porfolio/>
     <Contact/>
    </div>
  );
}

export default App;
