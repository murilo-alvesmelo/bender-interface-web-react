import React, { useState} from 'react';
import NavBar from '../../layout/NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import styles from './index.module.css';
import { v4 as uuidv4 } from 'uuid';
import MontarAxiosAPI from '../../utilitarios/axios';


function EmailProfessores(){

    const [messageErro, setMessageErro] = useState([])
    const [InputEmails, setInputEmails] = useState([
        { id: uuidv4(), nome: '', email: '' },
    ]);

    const handleSubmit = (event) => {   
        event.preventDefault();
        const axiosApi = MontarAxiosAPI();
        InputEmails.map(contato => {
            axiosApi.post('/professores/professores', {
                    nome: contato.nome,
                    email: contato.email
                }).then(response=>{
                  console.log(response.data);
                  alert("Cadastrado")
                  window.location.reload()
                }).catch(e=>{
                    alert("verifique os dados")
                })
        });
    };

    const handleChangeInput = (id, event) => {
        const newInputEmails = InputEmails.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        setInputEmails(newInputEmails);
    }

    const handleAddEmails = () => {
        setInputEmails([...InputEmails, { id: uuidv4(),  nome: '', email: '' }])
    }

    const handleRemoveEmails = id => {
        const values  = [...InputEmails];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputEmails(values);
    }
    return(
        <>
            <NavBar/>
            <h2 className={styles.h1}>E-mails dos Professores</h2>
            <Form onSubmit={handleSubmit}>
            {InputEmails.map(inputEmail=>(
                <div key={inputEmail.id}>
                    <Row className={styles.row}>
                        <Form.Control 
                            className={styles.input}
                            name="nome"
                            type="text" 
                            placeholder="Nome:"
                            value={inputEmail.nome}
                            onChange={event => handleChangeInput(inputEmail.id, event)}
                        />
                        <Form.Control
                            className={styles.input}
                            name="email"
                            type="text"
                            placeholder="Email:"
                            value={inputEmail.email}
                            onChange={event => handleChangeInput(inputEmail.id, event)}
                        />
                    <Button 
                        className={styles.button}
                        variant="primary"
                        disabled={InputEmails.length === 1}
                        onClick={() => handleRemoveEmails(inputEmail.id)}
                    >Remover</Button>

                    <Button 
                        className={styles.button}
                        variant="primary"
                        onClick={handleAddEmails}
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
            <div className = {{backgroundColor: "red", width: "50%", height: "auto"}}>
                {messageErro.map(e => (<p>`${e.status}`</p>))}
            </div>
            </div>
        </>
    )
}

export default EmailProfessores;
