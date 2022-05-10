import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./box.module.css";

const Box = () => {
  const [nome, setNome] = useState("");
  const [instagram, setInstagram] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <>
      <input
        type="text"
        value={nome}
        placeholder="Nome"
        onChange={(e) => {
          setNome(e.target.value);
        }}
        className={styles.input}
      ></input>
      <input
        type="text"
        value={instagram}
        placeholder="Instagram"
        onChange={(e) => {
          setInstagram(e.target.value);
        }}
        className={styles.input}
      ></input>
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className={styles.input}
      ></input>
      <input
        type="text"
        value={telefone}
        placeholder="Telefone"
        onChange={(e) => {
          setTelefone(e.target.value);
        }}
        className={styles.input}
      ></input>
      <div className={styles.btn}>Enviar</div>
    </>
  );
};
export default Box;
