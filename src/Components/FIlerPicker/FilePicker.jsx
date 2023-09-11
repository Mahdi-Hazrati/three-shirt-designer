import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-1 flex-col">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(event) => { setFile(event.target.files[0]) }}
        />
        <label htmlFor="file-upload" className="filepicker-label">Upload File</label>
        <p className="mt-2 text-gray-800 text-xs truncate">
          {file === "" ? "No file selected!" : file.name}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-3">
        <CustomButton
          type="outlined"
          innerText="Logo"
          customClassName="text-xs"
          clickHandler={() => { readFile("logo") }}
        />
        <CustomButton
          type="filled"
          innerText="Texture"
          customClassName="text-xs"
          clickHandler={() => { readFile("full") }}
        />

      </div>
    </div>
  )
}

export default FilePicker