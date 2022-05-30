import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./box.module.css";

const Box = () => {
  let navigate = useNavigate();

  return (
    <>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/email_professores");
        }}
      >
        Email dos professores
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/lattes_docentes");
        }}
      >
        Lattes dos docentes
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/contatos_coordenacao");
        }}
      >
        Contatos da coordenação
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/atletica");
        }}
      >
        Atletica do curso
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/inserir_instagram");
        }}
      >
        Perfis no instagram
      </div>
    </>
  );
};
export default Box;
