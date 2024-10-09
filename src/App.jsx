import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Navegacao from './components/Navegacao';
import Head from './components/Head';
import Sobre from './components/Sobre'
import Skills from './components/Skills';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className='App'>
      <>
      <Navegacao />
      <Head />
      <Sobre />
      <Skills />
      <Projetos />
      <Contato />
      <Rodape />
      </> 
    </div>
  )
}
export default App
