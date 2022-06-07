import React, { useState} from 'react';
import NavBar from '../../layout/NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import styles from './index.module.css';
import { v4 as uuidv4 } from 'uuid';
import api from '../../services/Api';

function InstagramCurso(){

    const [inputInstagrams, setinputInstagrams] = useState([
        { id: uuidv4(), perfil: '', link: '' },
    ]);

    const handleSubmit = (event) => {   
        event.preventDefault();
        inputInstagrams.map(i =>{
            api.post('/instagram/adicionar_instagram', {
                nome_do_perfil: i.perfil,
                link: i.link
            })
        })
        alert("Cadastrado")
        window.location.reload()
    };

    const handleChangeInput = (id, event) => {
        const newinputInstagrams = inputInstagrams.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        setinputInstagrams(newinputInstagrams);
    }

    const handleAddInstagrams = () => {
        setinputInstagrams([...inputInstagrams, { id: uuidv4(),  perfil: '', link: '' }])
    }

    const handleRemoveInstagrams = id => {
        const values  = [...inputInstagrams];
        values.splice(values.findIndex(value => value.id === id), 1);
        setinputInstagrams(values);
    }
    return(
        <>
            <NavBar/>
            <h2 className={styles.h1}>Instagrams do Curso</h2>
            <Form onSubmit={handleSubmit}>
            {inputInstagrams.map(inputInstagram=>(
                <div key={inputInstagram.id}>
                    <Row className={styles.row}>
                        <Form.Control 
                            className={styles.input}
                            name="perfil"
                            type="text" 
                            placeholder="Nome do Perfil :"
                            value={inputInstagram.nome}
                            onChange={event => handleChangeInput(inputInstagram.id, event)}
                        />
                        <Form.Control
                            className={styles.input}
                            name="link"
                            type="tel"
                            placeholder="Link:"
                            value={inputInstagram.lattes}
                            onChange={event => handleChangeInput(inputInstagram.id, event)}
                        />
                    <Button 
                        className={styles.button}
                        variant="primary"
                        disabled={inputInstagrams.length === 1}
                        onClick={() => handleRemoveInstagrams(inputInstagram.id)}
                    >Remover</Button>

                    <Button 
                        className={styles.button}
                        variant="primary"
                        onClick={handleAddInstagrams}
                    >Novo</Button>
                    </Row>
                </div>
            ))}

            </Form>
            <br/>
            <div className={styles.buttonPosition}>
                <Button
                    style={{width: '200px', background: '#1D9BF0'}}
                    variant="primary"
                    type='submit'
                    onClick={handleSubmit}
                >Enviar</Button>
            </div>
        </>
    )
}

export default InstagramCurso;