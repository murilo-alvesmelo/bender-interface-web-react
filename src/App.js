import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css'
import TelaInicial from './componentes/telaInicial'
import NavBar from './layout/NavBar';

function App() {
  return (
    <div className={styles.App}>
    <Router>
      <Routes>
        <Route path="/tela_inicial" element={<TelaInicial/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
