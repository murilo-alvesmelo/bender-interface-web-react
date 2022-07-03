import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import TelaInicial from './componentes/telaInicial';
import EditarInfo from './componentes/editarInformacoes';
import InserirInfo from './componentes/inserirInformacoes';
import InstagramCurso from './componentes/cadastroInstagramCurso';
import CadastroLattesDocentes from './componentes/cadastroLattesDocentes';
import ContatosCoordenacao from './componentes/cadastroContatosCoordenacao';
import EmailProfessores from './componentes/cadastroEmailProf';
import Atletica from './componentes/atleticaCurso';
import Informes from './componentes/informes';
import Login from './componentes/telaLogin'

function App() {
  const Private = ({children}) => {
    if(localStorage.getItem("enc_jwt")){
        return children
    }else{
        return <Navigate to ="/login" />
    }
}
  return (
    <div className = {styles.background}>
    <Router>
      <Routes>
        <Route path="/" element={<Private><TelaInicial/></Private>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/editar_info" element={<Private><EditarInfo/></Private>} />
        <Route path="/inserir_info" element={<Private><InserirInfo/></Private>} />
        <Route path="/inserir_instagram" element={<Private><InstagramCurso/></Private>} />
        <Route path='/lattes_docentes' element={<Private><CadastroLattesDocentes/></Private>} />
        <Route path='/contatos_coordenacao' element={<Private><ContatosCoordenacao/></Private>} />
        <Route path='/email_professores' element={<Private><EmailProfessores/></Private>} />
        <Route path="/atletica" element={<Private><Atletica /></Private>} />
        <Route path="/informes" element={<Private><Informes /></Private>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
