import React, { useState, useCallback } from 'react'
// import Dropzone from 'react-dropzone' // !hooks
import { useDropzone } from 'react-dropzone'; // hooks

const AddForm = () => {

    const [file, setFile] = useState(null);
    // const handleDrop = acceptedFiles => {
    //     setFile(acceptedFiles[0])
    // }

    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0])
      }, [])

    const { getRootProps, isDragActive, getInputProps } = useDropzone({onDrop})
    

    return (
        <div className="pg-container">
            <form>
                <h3>Add Mahasiswa</h3>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Example label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Another label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                </div>
                <div className="mb-3">
                <div {...getRootProps({ className: isDragActive ? 'active' : 'dropzone' })}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    }
                </div>
                {/* <Dropzone onDrop={handleDrop}>
                    {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <p>Drag'n'drop files, or click to select files</p>
                    </div>
                    )}
                </Dropzone> */}
                {file && <small>{file.name}</small>}
                </div>
            </form>
        </div>
    )
}

export default AddForm
