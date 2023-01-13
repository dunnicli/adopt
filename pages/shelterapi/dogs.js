import Link from "next/link";
import Head from "next/head";
//import prisma from "../../lib/prisma.ts";




export default function ShelterApi({ data }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Dogs - Active</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <p>&nbsp;</p>
        <div className="page-nav">
          <Link href="">Add New Dog</Link>
        </div>
        <p>&nbsp;</p>
        <h1 className="text-2xl font-black">Dogs Available</h1>
        <p>&nbsp;</p>

        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <b>Name: {item.name}</b>
              <br />
              <p>Current Status: {item.current_status}</p>
              <p>PV Only?: {item.pvOnly}</p>
              Description: {item.rescueInfo}
              <br />
              <p>ID: {item.id}</p>
              <p>Species: {item.species}</p>
              <p>Gender: {item.gender}</p>
              <p>Breed: {item.breed}</p>
              <p>Weight: {item.weight}</p>
              <p>Age: {item.myage}</p>

              <div className="page-nav">
                <Link href="">
                  Details
                </Link>
              </div>
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
  //const notes = await prisma.note.findMany();
  //const res = await fetch(`https://shelter.spcapv.net/adopt/animals`)
  const res = await fetch(`https://shelter.spcapv.net/adopt/dogs`)
  //const res = await fetch(`http://127.0.0.1:8000/adopt/cats`)
  const data = await res.json()
    
  return {
    //props: { data: JSON.parse(JSON.stringify(res)) },
    props: { data },
  };
}
