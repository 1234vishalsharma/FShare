"use client"

import React from 'react';
import { app } from '../../../../firebaseConfig';
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import Drag from './_components/drag'
import { useState } from 'react';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";  
import { useUser } from '@clerk/nextjs';
import {GenerateRandomString} from '../../../_utils/GenerateRandomString';
import { useRouter } from 'next/navigation';

function Load() {
  const router = useRouter();
  const {user} = useUser();
  const [progressbarvalue,setProgressBarvalue] = useState();
  let fileDocId;
  const storage = getStorage(app);

  const UploadData=(data)=>{
    const metadata = {
      contentType: data.type
    };
    const refer = ref(storage, 'Upload-data/' + data?.name);
    const uploadTask = uploadBytesResumable(refer, data, metadata);


    uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setProgressBarvalue(progress);

    progress==100&&getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      SaveToFirestore(data,downloadURL)
      setTimeout(() => {
        router.push('/file-preview/'+fileDocId);
      }, 2000);
    });

  },) 
  }

  const SaveToFirestore = async(file,url)=>{
      const unique_id = GenerateRandomString();
      const fstore = getFirestore(app);
      fileDocId = unique_id;
      console.log("the file id before router push is "+fileDocId);

      await setDoc(doc(fstore, "Uploaded_Files", unique_id), {
        FileName: file.name,
        FileSize: file.size,
        FileType: file.type,
        FileUrl: url,
        UserMail: user.primaryEmailAddress.emailAddress,
        userName: user.fullName,
        password: '',
        id:unique_id,
        ShortUrl: process.env.NEXT_PUBLIC_BASE_URL + 'f/'+ unique_id,
      });
      
  }
  return (
    <div>
        <h2 className='text-3xl text-center p-6'>FShare <strong className='text-main'>Drag and Drop</strong> Section / <strong className='text-main'>File Select</strong> Section</h2>
        <Drag value = {progressbarvalue} UploadBtnClicked = {(file)=>UploadData(file)}></Drag>
    </div>
  )
}

export default Load
