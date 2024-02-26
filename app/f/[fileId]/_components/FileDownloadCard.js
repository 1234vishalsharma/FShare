import { Download} from 'lucide-react'
import React from 'react'
const FileDownloadCard = ({file}) => {
    const downloadFile = () =>{
        window.open(file?.FileUrl , "_blank");
    }
    const downloadDataHandeler = () => {
        if(file?.password == ""){
             downloadFile();
        }
        else{
            let pass = prompt("This file is secured with a pass key Enter it:")
            if(pass === file.password){
                downloadFile();
            }else{
                alert("You entered a wrong pass key (Try again)")
            }
        }
    }
  return (
    <div className='border border-green-600 rounded-md h-4/5 w-2/4 bg-slate-300 p-4 flex items-center gap-4 justify-between pl-32 pr-32'>
      <div className='flex items-center flex-col text-2xl'>

        <h2 className='text-center font-semibold text-2xl'>File Info</h2>
        <span>File Name: {file?.FileName}</span><br />
        <span>File Size: {file?.FileSize} Bytes</span><br />
        <span>File Type: {file?.FileType}</span><br />
        <span>Sender: {file?.userName}</span>
      
      </div>
      
      <div className='flex flex-col'> 
        <img className='border border-black h-48 w-48' src={file?.FileUrl} alt="Loading File" />  
        <button onClick={downloadDataHandeler} className='flex justify-center items-center border border-slate-800 p-2 mt-4 rounded-lg text-bold bg-green-400 gap-1'>Download File <Download/></button>
      </div>
    </div>
  )
}

export default FileDownloadCard
