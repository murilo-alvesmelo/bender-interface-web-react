import React, { Component } from 'react';
import imgContainer from '../../assets/imgContainer.jpg'
import NavBar from '../../layout/NavBar';
import styles from './index.module.css'

class TelaInicial extends Component{
    render(){
        return(
            <>
            <NavBar/>
            <figure>
                <img src={imgContainer} className={styles.imgContainer}/>
            </figure>

            <div className={styles.modalscontainer}>
                <div className={styles.modal1}>
                    
                </div>
                <div className={styles.modal2}>
                    
                </div>
                <div className={styles.modal3}>
                    
                </div>
            </div>
                
            </>
        )
    }
}

export default TelaInicial;