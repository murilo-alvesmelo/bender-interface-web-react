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

function App() {
  return (
    <div className={styles.App}>
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial/>} />
        <Route path="/editar_info" element={<EditarInfo/>} />
        <Route path="/inserir_info" element={<InserirInfo/>} />
        <Route path="/inserir_instagram" element={<InstagramCurso/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
