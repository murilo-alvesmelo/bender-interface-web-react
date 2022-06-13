import React from "react";
import NavBar from "../../layout/NavBar";
import styles from "../atleticaCurso/index.module.css";
import Button from 'react-bootstrap/Button'
import api from '../../services/Api';
import { useState } from "react";

const Informes = ()=>{

    const [nome, setNome] = useState("");
    const [message, setMessage] = useState("");
    const [link, setLink] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
            api.post('/informes/informes', {
                remetente: nome,
                aviso: message,
                link: link
            })
            
            alert("Enviado!")
            window.location.reload()
        }
        
        return(
        <>
            <NavBar />
            <h1 className={styles.h1}>Informes</h1>
            <form onSubmit={handleSubmit}> 
                <input
                    type="text"
                    value={nome}
                    placeholder="Remetente:"
                    onChange={(e) => {
                    setNome(e.target.value);
                    }}
                    className={styles.input}></input>

                <input
                    type="text"
                    value={message}
                    placeholder="Aviso:"
                    onChange={(e) => {
                    setMessage(e.target.value);
                    }}
                    className={styles.input}></input>

                <input
                    type="text"
                    value={link}
                    placeholder="Link:"
                    onChange={(e) => {
                    setLink(e.target.value);
                    }}
                    className={styles.input}></input>

                <div style={{display:'flex', justfiContent:'center'}}>
                    <Button variant="primary" type="submit">Enviar</Button>
                </div>
            </form>
        </>
    )
    
};
export default Informes;