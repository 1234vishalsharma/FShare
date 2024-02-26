"use client"

import React, { useEffect, useState } from 'react'
import {doc , getDoc , getFirestore, updateDoc} from 'firebase/firestore';
import {app} from '../../../../../firebaseConfig';
import { ArrowLeftSquare } from 'lucide-react';
import Link from 'next/link';
import Fileimage from './_components/Fileimage'
import Fileinfo from './_components/Fileinfo';

function FilePreview({params}){
  const db = getFirestore(app);
    const [file,setFile] = useState()
    useEffect(()=>{
      console.log("file id is here "+params?.fileId);
      params?.fileId&&getData();
    },[])


    const getData = async()=>{
      
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

    const OnPasswordSaved = async(password) =>{
      console.log(password);
      const docref = doc(db,"Uploaded_Files",params?.fileId)
      await updateDoc(docref,{
        password:password
      }).then(
        ()=>{
          alert("Password Updated Successfully")
        }
      )
    
    }
  return (
    <div className='py-10 px-20'>
      <Link href = "/Load" className='flex gap-3 border w-40 justify-center items-center p-2 rounded-lg '> <ArrowLeftSquare/> Go to Upload</Link>

      <div className='grid grid-col-2 mt-5 md:grid-cols-2 border-2 rounded-xl border-black'>
    
        <Fileimage file={file}></Fileimage>
        <Fileinfo file = {file} OnPasswordSaved = {(Password)=>OnPasswordSaved(Password)}/>
    
      </div>
    
    </div>
  )
}

export default FilePreview
