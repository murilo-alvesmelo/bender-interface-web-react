import React from 'react'
import styles from "./box.module.css";

const FileUploader = ({onFileSelectError,onFileSelectSuccess}) => {
    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        if (file.size > 1000000)
          onFileSelectError({ error: "O arquivo não pode ultrapassar 1 MB de tamanho." });
        else if(file.type !== 'application/pdf')
            onFileSelectError({error: "O arquivo não é um pdf."})
        else
            onFileSelectSuccess(file);
      };

    return (
        <div className="file-uploader">
            <input className = {styles.input} type="file" onChange={(e)=>handleFileInput(e)}/>
        </div>
    )
}

export default FileUploader;