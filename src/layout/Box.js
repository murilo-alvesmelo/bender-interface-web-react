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
          navigate("//google.com");
        }}
      >
        Email dos professores
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/lalala");
        }}
      >
        Lattes dos docentes
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/lalala");
        }}
      >
        Contatos da coordenação
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/lalala");
        }}
      >
        Atletica do curso
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/lalala");
        }}
      >
        Perfis no instagram
      </div>
    </>
  );
};
export default Box;
