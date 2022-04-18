//CSS react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css'
import TelaLogin from './componentes/telaLogin'


function App() {
  return (
    <div className={styles.App}>
      <TelaLogin/>
    </div>
  );
}

export default App;
