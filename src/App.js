import './App.css';
import Header from "./components/Header/Header";
import Generator from './components/Generator';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <>
    <Header />
<Generator />
<Footer year={2022}/>
    </>
  );
}

export default App;
