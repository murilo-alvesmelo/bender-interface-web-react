import React from "react";
import NavBar from "../../layout/NavBar";
import styles from "./index.module.css";
import Box from './box'
const InserirInfo = () => {
  
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <span className={styles.title}>Inserir Informações do Curso</span>
        <Box title = 'Calendario Acadêmico' rota= "/informacoes_curso/calendario_academico"/>
      </div>
    </>
  );
};
export default InserirInfo;
