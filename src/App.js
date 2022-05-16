import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css'
import TelaInicial from './componentes/telaInicial'
import EditarInfo from './componentes/editarInformacoes';
import InserirInfo from './componentes/inserirInformacoes'
import EmailProfessores from './componentes/cadastroEmailProf/index'
import CadastroLattesDocentes from './componentes/cadastroLattesDocentes';
import ContatosCoordenacao from './componentes/cadastroContatosCoordenacao';



function App() {
  return (
    <div className={styles.App}>
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial/>} />
        <Route path="/editar_info" element={<EditarInfo/>} />
        <Route path="/inserir_info" element={<InserirInfo/>} />
        <Route path='/lattes_docentes' element={<CadastroLattesDocentes/>} />
        <Route path='/contatos_coordenacao' element={<ContatosCoordenacao/>} />
        <Route path='/email_professores' element={<EmailProfessores/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
