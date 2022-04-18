import React, { Component } from 'react';
import NavBar from '../../layout/NavBar';
import styles from './index.module.css'
import Form from 'react-bootstrap/Form'

class inserirInfo extends Component{
    render(){
        const x = 10;
        console.log(x)
        return(
            <>
            <NavBar/>
            <div className={styles.body}>
            <h1 className={styles.titulo}>Inserir Informações do Curso</h1>

            <Form.Group controlId="formFile" className={styles.formfile}>
                <Form.Label className={styles.formfile1}>Oferta de Disciplinas - Docentes x Curso:</Form.Label>
                <Form.Control type="file" />

                <Form.Label className={styles.formfile1}>Documento x</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            </div>
            </>
        )
    }
}
export default inserirInfo;