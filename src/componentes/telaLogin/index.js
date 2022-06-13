import React, { useState} from 'react';
import styles from './login.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import {useNavigate} from "react-router-dom"
import MontarAxiosAPI from '../../utilitarios/axios';
const Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const entrar = (e) => {
        e.preventDefault()
        const axiosApi = MontarAxiosAPI();
        if (email !== "" && password !== "") {
            console.log("passei aqui")
            axiosApi.post('/autenticacao/entrar',
                `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`,
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(response => {
                    let resposta = response.data;
                    console.log(resposta)
                    if (resposta.status && resposta.tipo_usuario === 2) {
                        localStorage.setItem("enc_jwt", resposta.access_token);
                        navigate("/")
                    } else {
                        setErrorMessage(resposta.erro);
                    }
                })
        } else {
            setErrorMessage("Insira o email e senha para entrar!");
        }
    }
        return(
            <div className = {styles.fundo}>
            <div className={styles.container}>
                <Figure className={styles.imgSize}>
                    <Figure.Image
                        width={150}
                        height={150}
                        alt="151x150"
                        src="https://img-12.stickers.cloud/packs/b7d0c3b9-16e7-4f9d-8485-e1d66334ed09/webp/7939f494-eeab-4f45-894f-0997bcc3f5ae.webp"
                    />
                </Figure>

                <h1 className={styles.h1}>Login</h1>

                <Form onSubmit={e=>{entrar(e)}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" onChange = {(e)=>{setEmail(e.target.value);}} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" onChange = {(e)=>{setPassword(e.target.value);}} required/>
                    </Form.Group>

                    <Button variant="primary" type='submit'>Entrar</Button>
            
                </Form>
            </div>
            </div>
        );
    }
export default Login;