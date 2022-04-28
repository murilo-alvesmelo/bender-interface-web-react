import React, { Component } from 'react';
import styles from './index.module.css'
import NavBar from '../../layout/NavBar.js';
import Box from '../../layout/Box';

class EditarInfo extends Component{
    render(){
        return(
            <>
            <NavBar/>
            <h1 className={styles.h1}>Inserir informações do Curso</h1>
            <Box />
            <div className={styles.btn}>Hoi</div>
            </>
        )
    }
}
export default EditarInfo;
