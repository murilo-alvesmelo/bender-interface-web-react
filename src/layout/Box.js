import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./box.module.css";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";

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
        <p>E-mail dos professores</p>
        <FaAngleRight/>
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/lattes_docentes");
        }}
      >
        <p>Lattes dos docentes</p>
        <FaAngleRight/>
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/contatos_coordenacao");
        }}
      >
        <p>Contatos da coordenação</p>
        <FaAngleRight/>
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/atletica");
        }}
      >
        <p>Atlética do curso</p>
        <FaAngleRight/>
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/informes");
        }}
      >
        <p>Informes</p>
        <FaAngleRight/>
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/inserir_instagram");
        }}
      >
        <p>Perfis no instagram</p>
        <FaAngleRight/>
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          navigate("/grade_horário");
        }}
      >
        <p>Horários da Disciplina</p>
        <FaAngleRight/>
      </div>
    </>
  );
};
export default Box;
