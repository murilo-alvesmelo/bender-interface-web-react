//CSS react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css'
import CadastroCurso from './componentes/CadastroCurso';

function App() {
  return (
    <div className={styles.App}>
      <CadastroCurso/>
    </div>
  );
}

export default App;
