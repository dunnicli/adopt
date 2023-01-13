import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import { toast, ToastContainer } from "react-nextjs-toast";
import Head from "next/head";

const BUCKET_URL = "https://spcapv-hrku.s3.us-east-2.amazonaws.com/";

//https://spcapv-hrku.s3.us-east-2.amazonaws.com/aasadiepic.png

export default function Home() {
  //const [formData, setFormData] = useState({});
  const [file, setFile] = useState();
  const [caption, setCaption] = useState();
  const [uploadingStatus, setUploadingStatus] = useState();
  const [uploadedFile, setUploadedFile] = useState();

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const selectCaption = (e) => {
    setCaption(e.target.value);
  };

  
  

  const uploadFile = async () => {
    setUploadingStatus("Uploading the file to AWS S3");
    var filepath = "shelter/";
    var thetime = new Date().getTime();
    //strip spaces from filename
    var filename = file.name.replace(/\s/g, "");


    let { data } = await axios.post("/api/photos/uploadFile", {
      name: filepath+thetime+filename,
      type: file.type,      
    });

    console.log(data);

    const url = data.url;
    let { data: newData } = await axios.put(url, file, {
      headers: {
        "Content-type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setUploadedFile(BUCKET_URL + filepath + thetime + filename);

    const theUploadedFile = BUCKET_URL + filepath + thetime + filename;
    //const thatCaption = theCoolcaption;
    //setFile(null);
    
    // redirect to the new photo page..
    //window.location.href = "/photos";
    //Create new photo record in the database

    let photoData = {
      s3Url: theUploadedFile,
      fileType: file.type,
      caption: caption,
      fileName: file.name,
    };
    console.log("PhotoData: ", photoData);
    createPhoto(photoData);

    async function createPhoto( photoData ) {
      toast.notify(`Photo is saving to the database!`);
      
      const response = await fetch("/api/photos/createPhoto", {
        method: "POST",
        body: JSON.stringify(photoData),
      });
      toast.remove();
      return await response.json(), await Router.push("/photos");
    }
  

  };

  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
       <Head>
        <title>New S3 Upload</title>
        <link rel="icon" href="/favicon.ico" />
       </Head>
      <main>
        <p>Please select a file to upload</p>
        <input type="file" onChange={(e) => selectFile(e)} />
        <p>&nbsp;</p>
        <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Caption"
              name="caption"
              onChange={(e) => selectCaption(e)}              
            />

        <p>&nbsp;</p>
        {file && (
          <>
            <p>Selected file: {file.name}</p>
            <button
              onClick={uploadFile}
              className=" bg-purple-500 text-white p-2 rounded-sm shadow-md hover:bg-purple-700 transition-all"
            >
              Upload a File!
            </button>
          </>
        )}
        <p>&nbsp;</p>
        <ToastContainer />
        <p>&nbsp;</p>
        {uploadingStatus && <p>{uploadingStatus}</p>}
        <p>&nbsp;</p>
        {uploadedFile && (
          <Link href={uploadedFile}>View Uploaded File</Link>
        )}
        <p>&nbsp;</p>
        <p>&nbsp;</p>

      </main>
    </div>
  );
}