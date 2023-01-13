import Link from "next/link";
import Head from "next/head";
import prisma from "../../lib/prisma.ts";
import Image from 'next/image'

export default function PhotosPage({ data }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Photos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <p>&nbsp;</p>
        <div className="page-nav">
          <Link href="/photos/newPhoto">Add New Photo</Link>
        </div>
        <p>&nbsp;</p>
        <h1 className="text-2xl font-black">All Photos</h1>
        <p>&nbsp;</p>

        <ul>
          {data.map((item) => (
            <li key={item.id}>
            {item.s3Url && (
            <Image
              src={item.s3Url}
              alt="A picture"
              width={200}
              height={200}
            />
          )}
           <span>Caption:  <b>{item.caption}</b></span>
            <br />
            <span>File Name: <b>{item.fileName}</b></span>
            <br />
              <p>ID: {item.id}</p>
              <div className="page-nav">
              <Link href={`/photos/photoDetails/${item.id}`} >
              Details</Link>     
              </div>
              <br />
              &nbsp;
            </li>
          ))}
        </ul>


        
      </main>

      <footer className="text-center font-bold text-xl">
        <b>Powered by John Dunnicliffe</b>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const photos = await prisma.photo.findMany();

  return {
    props: { data: JSON.parse(JSON.stringify(photos)) },
    
  };
}


