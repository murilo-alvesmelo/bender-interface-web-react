import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import NavBar from '../../layout/NavBar';
import styles from './index.module.css'

class TelaInicial extends Component{
    render(){
        return(
            <> 
            <NavBar/>
            <div className={styles.imgContainer}>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{marginTop:120, fontWeight:'bold', marginLeft:50}}>
                            Bem vindo ao Painel de adiministrador do Bender
                        </h1>
                    </Col>
                    <Col>
                        <img src='./cartoon.png' style={{width:300, marginTop:30, marginLeft:100}} alt="card"/>
                    </Col>
                </Row>
            </Container>
            </div>

            <div style={{textAlign:"center", marginTop:30}}>
                <h2>Acesso Rápido</h2>
            </div>

            <div style={{marginTop:30, fontSize:22, textAlign:'center', color:'#15202B', fontWeight:'bold'}}>
                <a href='/informes'>
                    <div className={styles.modal1}>
                        <p>Informes</p>
                    </div>
                </a>

                <a href='/email_professores'>
                    <div className={styles.modal2}>
                        <p>Email dos docentes</p>
                    </div>
                </a>

                <a href='/lattes_docentes'>
                    <div className={styles.modal3}>
                        <p>Lattes dos docentes</p>
                    </div>
                </a>
            </div>
                
            </>
        )
    }
}

export default TelaInicial; 