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
import InstagramCurso from './componentes/cadastroInstagramCurso';
import CadastroLattesDocentes from './componentes/cadastroLattesDocentes';
import ContatosCoordenacao from './componentes/cadastroContatosCoordenacao';
import EmailProfessores from './componentes/cadastroEmailProf';
import Atletica from './componentes/atleticaCurso'
import GradeHorarios from './componentes/gradeHorarios'

function App() {
  return (
    <div className={styles.App}>
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial/>} />
        <Route path="/editar_info" element={<EditarInfo/>} />
        <Route path="/inserir_info" element={<InserirInfo/>} />
        <Route path="/inserir_instagram" element={<InstagramCurso/>} />
        <Route path='/lattes_docentes' element={<CadastroLattesDocentes/>} />
        <Route path='/contatos_coordenacao' element={<ContatosCoordenacao/>} />
        <Route path='/email_professores' element={<EmailProfessores/>} />
        <Route path="/atletica" element={<Atletica />} />
        <Route path="/grade_horarios" element={<GradeHorarios />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
