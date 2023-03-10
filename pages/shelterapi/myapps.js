import Link from "next/link";
import Head from "next/head";
import { useSession } from "next-auth/react";



export default function ShelterApi({data, thekey}) {
  const { data: session } = useSession();
  const thatkey = thekey;
  let myid;
  
  if (session) 
    myid = session.id; 
  else
    myid = 0;
  
  
  return (
    
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>My Adoption Applications</title>
        <meta name="description" content="SPCAPV Adoption Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="page-nav">
          <Link href="/shelterapi/adoptAppCreate">Add New App</Link>
        </div>
        {session && session.isAdmin && (
        <p>Key: {thatkey} - 
        myid: {myid}</p>
        )}
        
        <h1 className="text-2xl font-black">My Applications</h1>
        <p>&nbsp;</p>

        <ul>
        {data.map((item) => (
          
            <li key={item.id}>
            {item.adopter_id == myid && (  
            <div>
              Submission Status: <b>{item.publishStatus}</b><br />
              <Link href={`/shelterapi/detailAdoptApp/${item.id}`}>
              Adopter: <b className="text-blue-900"><u>{item.name}</u></b>
                </Link> &nbsp; 
              
              <br />
              <p>Animal Name: {item.nameAnimal}</p>
              <p>Email: {item.email}</p>
              <p>ID: {item.id}</p>
              
              <div className="page-nav">
              <Link className="badge badge-warning" 
          href={`/shelterapi/editAdoptApp/${item.id}`}>Edit</Link>  &nbsp; 
              
              </div>
              <p>&nbsp;</p>
              </div>
              )}      
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

export async function getServerSideProps(context) {
  const key = context.query.key
  const res = await fetch(`https://shelter.spcapv.net/adopt/my_apps/?key=${key}`)
  //const res = await fetch(`https://shelter.spcapv.net/adopt/dog_detail/${id}`)
  //const res = await fetch(`http://127.0.0.1:8000/adopt/dogs`)
  //const res = await fetch(`http://127.0.0.1:8000/adopt/cats`)
  //const data = res;
  const data = await res.json()
  console.log("key:", key)
      
  return {
    props: { 
      data: data,
      thekey: key
             
                        },
  
  };
}
