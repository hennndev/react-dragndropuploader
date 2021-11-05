import React, { useState } from 'react'
import Dropzone from 'react-dropzone'

const AddForm = () => {

    const [file, setFile] = useState(null);
    const handleDrop = acceptedFiles => {
        setFile(acceptedFiles[0])
    }
    

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
                <Dropzone onDrop={handleDrop}>
                    {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <p>Drag'n'drop files, or click to select files</p>
                    </div>
                    )}
                </Dropzone>
                {file && <small>{file.name}</small>}
                </div>
            </form>
        </div>
    )
}

export default AddForm
