"use client"
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { app } from '../../../firebaseConfig';
import Header from '../../_components/Header';
import FileDownloadCard from './_components/FileDownloadCard'
function page({params}) {
    const [file,setFile] = useState();
    useEffect(()=>{
        console.log(params.fileId);
        params.fileId&&getData();
    },[])


    const getData = async()=>{
        const db = getFirestore(app);
        const ref = doc(db, "Uploaded_Files", params?.fileId);
        const document = await getDoc(ref);
  
        if (document.exists()) {
          console.log("Document data:", document.data());
          setFile(document.data());
          
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }

  return (
    <div>
        <div className='flex flex-col w-screen h-screen justify-center items-center bg-zinc-800'>
        <FileDownloadCard file={file}/>
        <p className='text-3xl text-white mt-3'> You can download the file by pressing the Downlaod Button.</p>
        </div>
    </div>
  )
}

export default page
