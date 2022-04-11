import React, { Component } from 'react';
import styles from './login.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';

class telaLogin extends Component{
    render(){
        return(
            <div className={styles.container}>
                <Figure className={styles.imgSize}>
                    <Figure.Image
                        width={150}
                        height={150}
                        alt="151x150"
                        src="holder.js/171x180"
                    />
                    <Figure.Caption>
                        IMAGEM
                    </Figure.Caption>
                </Figure>

                <h1 className={styles.h1}>Login</h1>

                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className={styles.forms} type="email" placeholder="E-mail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className={styles.forms} type="password" placeholder="Senha" />
                    </Form.Group>

                    <Button className={styles.button}variant="primary" type="submit">
                        Entrar
                    </Button>

            
                </Form>
            </div>
        );
    }

}
export default telaLogin;