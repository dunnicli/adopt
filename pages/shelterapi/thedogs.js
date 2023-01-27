import Link from "next/link";
import Head from "next/head";
import Image from 'next/image'
//import prisma from "../../lib/prisma.ts";




export default function DogsApi({ data }) {
  return (
    <>
     <Head>
        <title>Dogs - Available</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <div className="flex gap-10 flex-wrap">
        <div className="w-96 p-5">
      <h1 className="text-2xl font-black">Dogs Available For Adoption</h1>
        <p>&nbsp;</p>
     

     
     <p>&nbsp;</p>
        <p>&nbsp;</p>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
         <div className="p-5">   
        <div className="card card-side w-96 bg-base-100 shadow-2xl">
  <figure><img src={item.photoMedium} alt={item.name} /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {item.name}
      <div className="badge badge-warning">Available!</div>
    </h2>  
    <p className="text-sm">Gender: {item.gender}<br />
    Weight: {item.weight}<br />
    Age:&nbsp; 
    {item.myage == 0 && (
      <span>&lt; 1 Year</span>
     )}
     {item.myage > 0 && (
      <span>{item.myage}</span>
     )}

     
      </p>
              
    <div className="card-actions justify-end">
    <Link className="badge badge-outline" href={`/shelterapi/animal_details/${item.id}`}>Details</Link>  
    
      
    </div>
  </div>
</div>        
</div>

<p>&nbsp;</p>
<p>&nbsp;</p>

</li>

          ))}
        </ul>


        <p>&nbsp;</p>
        
     
</div>

      <div className="flex-auto ml-10 w-64 h-14 p-10">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <h1 className="text-2xl font-black">HOW THIS WORKS:</h1>
            <p>
            Once you have determined the specific animal you wish 
            to adopt, you need to contact us to begin the 
            adoption process.
            </p>
            <p>&nbsp;</p>
            
            <p>The process requires you to complete a thorough 
            application here on this website and submit it for
            review
            </p>

            <p>&nbsp;</p>
            <ul>
            <li>1. Once your application has been reviewed, we will 
            be in contact. Please allow us a few days of review 
            before expecting to hear from us. Be aware that 
            there may be additional contact required, such as a 
            home visit before the adoption is approved. 
            Please understand that we want to make sure this is 
            a perfect fit for you as well as our rescue.
            </li>

            <li>2. We will guide you through the transport process if 
            necessary and provide you with all the necessary 
            veterinary records regarding vaccinations, etc.
            </li>

            <li>
            3. You will also need to agree to the terms of our 
            ADOPTION CONTRACT. Important to note that if any of 
            the terms of the contract are not honored it will 
            be considered a breach of contract, invalidating it 
            and allowing for retrieval of the animal back to the 
            SPCA PV.
            </li>
            </ul>
        </div>
        </div>

</>        
      
          )
}

export async function getServerSideProps() {
  //const notes = await prisma.note.findMany();
  //const res = await fetch(`https://shelter.spcapv.net/adopt/animals`)
  //const res = await fetch(`http://127.0.0.1:8000/adopt/dogs`)
  const res = await fetch(`https://shelter.spcapv.net/adopt/dogs`)
  //const res = await fetch(`http://127.0.0.1:8000/adopt/cats`)
  const data = await res.json()
    
  return {
    //props: { data: JSON.parse(JSON.stringify(res)) },
    props: { data },
  };
}
