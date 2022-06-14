import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Logo from '../assets/logo.jpg'
import styles from './NavBar.module.css'
import Button from 'react-bootstrap/Button'
import {useNavigate} from "react-router-dom"

const NavBar = ()=>{
        const navigate = useNavigate();
        const handleLogout = ()=>{
            localStorage.removeItem("enc_jwt")
            navigate("/login")
        }
        return(
            <>
            <Navbar style={{backgroundColor: '#253341'}}variant='dark'>
                <Container>
                    <figure className={styles.imgPosition}>
                        <img src={Logo} className={styles.logo}/>
                    </figure>
                    <Navbar.Brand href="/">Bender Web</Navbar.Brand>
                    <Nav className="me-auto">
                        <div className={styles.navLinks}>
                        <Nav.Link href="/" className={styles.text}>Inicio</Nav.Link>
                        <Nav.Link href="/inserir_info" className={styles.text}>Inserir informações</Nav.Link>
                        <Nav.Link href="/editar_info" className={styles.text}>Editar informações</Nav.Link>
                        </div>
                        <Button variant="outline-secondary" className={styles.button} onClick={handleLogout}>Sair</Button>{' '}
                    </Nav>
                </Container>
            </Navbar>
            </>
        )
    }

export default NavBar;
