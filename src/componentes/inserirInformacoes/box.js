import React, { useState } from "react";
import styles from "./box.module.css";
import FileUploaded from "./upload";
import MontarAxiosAPI from '../../utilitarios/axios'
const Box = ({title,rota}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = (e) => {
    e.preventDefault()
    if (!selectedFile) {
        alert("Nenhum arquivo selecionado")
      return;
    }
    const axiosApi = MontarAxiosAPI()
    let formData = new FormData();
    formData.append("type", "application/pdf");
    formData.append("pdf", selectedFile);

    console.log(">> formData >> ", selectedFile.name.replace('.pdf',''));
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        accept: "application/json",
      },
    };
    axiosApi
      .post(
        `${rota}`,
        formData,
        config
      )
      .then((res) => {
        alert("File Upload success");
        console.log(res.data)
      })
      .catch((err) => console.log(err.response));
  };
  return (
      <div className={styles.box}>
        <h1 className={styles.titulo}>{title}</h1>
        <form className={styles.divform}>
            <FileUploaded
              onFileSelectSuccess={(file) => setSelectedFile(file)}
              onFileSelectError={({ error }) => alert(error)}
            />
            <button className = {styles.button} onClick={(e)=>submitForm(e)}>Enviar</button>
        </form>
      </div>
  );
};
export default Box;
