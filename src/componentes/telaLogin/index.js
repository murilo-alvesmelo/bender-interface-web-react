import React, { useState,useEffect } from "react";
import styles from "./login.module.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import MontarAxiosAPI from "../../utilitarios/axios";
import logo from "../../assets/logo_login.png";
import { MdOutlineErrorOutline } from "react-icons/md";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

    useEffect(() => {
        setErrorMessage("")
    }, [email, password])
  const entrar = (e) => {
    e.preventDefault();
    const axiosApi = MontarAxiosAPI();
    if (email !== "" && password !== "") {
      console.log("passei aqui");
      axiosApi
        .post(
          "/autenticacao/entrar",
          `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`,
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          let resposta = response.data;
          console.log(resposta);
          if (resposta.status && resposta.tipo_usuario === 2) {
            localStorage.setItem("enc_jwt", resposta.access_token);
            navigate("/");
          } else {
            setErrorMessage(resposta.erro);
          }
        });
    } else {
      setErrorMessage("Insira o email e senha para entrar!");
    }
  };
  return (
    <div className={styles.fundo}>
      <div className={styles.container}>
        <img src={logo} className={styles.imgSize} alt="logo"/>

        <h1 className={styles.h1}>Login</h1>

        <Form
          onSubmit={(e) => {
            entrar(e);
          }}
        >
          <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </Form.Group>

          {errorMessage !== "" && (
            <div className={styles.boxError}>
                <MdOutlineErrorOutline color='white' size={20}/>
              <span>{errorMessage}</span>
            </div>
          )}
          <button className={styles.Button} type="submit">
            Entrar
          </button>
        </Form>
      </div>
    </div>
  );
};
export default Login;
