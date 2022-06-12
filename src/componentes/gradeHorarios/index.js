import React, { Component } from 'react'
import styles from './index.module.css'
import NavBar from '../../layout/NavBar.js'
import { FaAngleDown } from '@react-icons/all-files/fa/FaAngleDown'

const GradeHorarios = () => {
  return (
    <>
      <NavBar />
      <h1 className={styles.h1}>Grade de horários do Curso</h1>

      <div className={styles.horarios}>
        <div className={styles.periodo}>
          <p>Periodo: 1</p>
          <FaAngleDown />
        </div>
        <div className={styles.disciplina}>
          <p>Projeto de sistemas</p>
        </div>
        <div className={styles.horario}>
          <p>Horário: 08:00 às 11:40</p>
          <FaAngleDown />
        </div>
        <button className={styles.button}>Atualizar</button>
        <button className={styles.button}>Deletar</button>
      </div>

      <div className={styles.horarios}>
        <div className={styles.periodo}>
          <p>Periodo: 2</p>
          <FaAngleDown />
        </div>
        <div className={styles.disciplina}>
          <p>Engenharia de software</p>
        </div>
        <div className={styles.horario}>
          <p>Horário: 08:00 às 11:40</p>
          <FaAngleDown />
        </div>
        <button className={styles.button}>Atualizar</button>
        <button className={styles.button}>Deletar</button>
      </div>

      <div className={styles.horarios}>
        <div className={styles.periodo}>
          <p>Periodo: 3</p>
          <FaAngleDown />
        </div>
        <div className={styles.disciplina}>
          <p>Estrutura de dados</p>
        </div>
        <div className={styles.horario}>
          <p>Horário: 08:00 às 11:40</p>
          <FaAngleDown />
        </div>
        <button className={styles.button}>Atualizar</button>
        <button className={styles.button}>Deletar</button>
      </div>
    </>
  )
}

export default GradeHorarios
