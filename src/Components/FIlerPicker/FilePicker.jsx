import React from 'react'

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
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected!" : file.name}
        </p>
      </div>
    </div>
  )
}

export default FilePicker