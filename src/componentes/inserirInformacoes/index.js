import React from "react";
import NavBar from "../../layout/NavBar";
import styles from "./index.module.css";
import Box from './box'
const InserirInfo = () => {
  
  return (
    <>
      <NavBar />
      <div className={styles.container} style={{marginBottom:50}}>
        <span className={styles.title}>Inserir Informações do Curso</span>
        <Box title = 'Auxilios UFT' rota= "/informacoes_curso/auxilio_uft"/>
        <Box title = 'Biblioteca UFT' rota= "/informacoes_curso/biblioteca_uft"/>
        <Box title = 'Calendario Acadêmico' rota= "/informacoes_curso/calendario_academico"/>
        <Box title = 'Matriz curricular' rota= "/informacoes_curso/matriz_curricular"/>
        <Box title = 'Regimento Acadêmico' rota= "/informacoes_curso/regimento_academico"/>
        <Box title = 'Restaurante Universitário' rota= "/informacoes_curso/restaurante_universitario"/>
      </div>
    </>
  );
};
export default InserirInfo;
