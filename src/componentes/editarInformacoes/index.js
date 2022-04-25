import React, { Component } from 'react';
import styles from './index.module.css'
import NavBar from '../../layout/NavBar.js';

class EditarInfo extends Component{
    render(){
        return(
            <>
            <NavBar/>
            <h1 className={styles.h1}>Editar informações do curso</h1>
            </>
        )
    }
}
export default EditarInfo;
