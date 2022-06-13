import React, { useState} from 'react';
import NavBar from '../../layout/NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import styles from './index.module.css';
import { v4 as uuidv4 } from 'uuid';
import MontarAxiosAPI from '../../utilitarios/axios';

function ContatosCoordenacao(){

    const [InputContatos, setInputContatos] = useState([
        { id: uuidv4(), email: '', telefone: '' },
    ]);

    const handleSubmit = (event) => {   
        event.preventDefault();
        const axiosApi = MontarAxiosAPI();
        InputContatos.map(i => {
            axiosApi.post('/contatosCoordenacao/contatosCoordenacao', {
                    email: i.email,
                    telefone: i.telefone
                })
        });
        alert("Cadastrado!")
        window.location.reload()
    };

    const handleChangeInput = (id, event) => {
        const newInputContatos = InputContatos.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        setInputContatos(newInputContatos);
    }

    const handleAddContatos = () => {
        setInputContatos([...InputContatos, { id: uuidv4(),  email: '', telefone: '' }])
    }

    const handleRemoveContatos = id => {
        const values  = [...InputContatos];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputContatos(values);
    }
    return(
        <>
            <NavBar/>
            <h2 className={styles.h1}>Contatos da Coordenação</h2>
            <Form onSubmit={handleSubmit}>
            {InputContatos.map(inputContato=>(
                <div key={inputContato.id}>
                    <Row className={styles.row}>
                        <Form.Control 
                            className={styles.input}
                            name="email"
                            type="text" 
                            placeholder="E-mail:"
                            value={inputContato.email}
                            onChange={event => handleChangeInput(inputContato.id, event)}
                        />
                        <Form.Control
                            className={styles.input}
                            name="telefone"
                            type="tel"
                            placeholder="Telefone:"
                            value={inputContato.telefone}
                            onChange={event => handleChangeInput(inputContato.id, event)}
                        />
                    <Button 
                        className={styles.button}
                        variant="primary"
                        disabled={InputContatos.length === 1}
                        onClick={() => handleRemoveContatos(inputContato.id)}
                    >Remover</Button>

                    <Button 
                        className={styles.button}
                        variant="primary"
                        onClick={handleAddContatos}
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

export default ContatosCoordenacao;
