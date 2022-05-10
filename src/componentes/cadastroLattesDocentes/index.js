import React, { useState} from 'react';
import NavBar from '../../layout/NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import styles from './index.module.css';
import { v4 as uuidv4 } from 'uuid';

function LattesDocentes(){

    const [inputLattes, setinputLattes] = useState([
        { id: uuidv4(), nome: '', lattes: '' },
    ]);

    const handleSubmit = (e) => {   
        e.preventDefault();
        console.log("Lattes", inputLattes);
    };

    const handleChangeInput = (id, event) => {
        const newinputLattes = inputLattes.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        setinputLattes(newinputLattes);
    }

    const handleAddLattes = () => {
        setinputLattes([...inputLattes, { id: uuidv4(),  nome: '', lattes: '' }])
    }

    const handleRemoveLattes = id => {
        const values  = [...inputLattes];
        values.splice(values.findIndex(value => value.id === id), 1);
        setinputLattes(values);
    }
    return(
        <>
            <NavBar/>
            <h2 className={styles.h1}>Lattes dos Docentes</h2>
            <Form onSubmit={handleSubmit}>
            {inputLattes.map(inputLatte=>(
                <div key={inputLatte.id}>
                    <Row className={styles.row}>
                        <Form.Control 
                            className={styles.input}
                            name="nome"
                            type="text" 
                            placeholder="Nome:"
                            value={inputLatte.nome}
                            onChange={event => handleChangeInput(inputLatte.id, event)}
                        />
                        <Form.Control
                            className={styles.input}
                            name="lattes"
                            type="tel"
                            placeholder="Lattes:"
                            value={inputLatte.lattes}
                            onChange={event => handleChangeInput(inputLatte.id, event)}
                        />
                    <Button 
                        className={styles.button}
                        variant="primary"
                        disabled={inputLattes.length === 1}
                        onClick={() => handleRemoveLattes(inputLatte.id)}
                    >Remover</Button>

                    <Button 
                        className={styles.button}
                        variant="primary"
                        onClick={handleAddLattes}
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

export default LattesDocentes;