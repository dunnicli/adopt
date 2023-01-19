import Link from "next/link";
//import styles from './Navbar.module.css';
//import "./Navbar.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";


function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  //const [session, loading] = useSession();
  return (
    
    <ul className="flex border-b">
  <li className="-mb-px mr-1">    
    <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/">Home</Link>
  </li>
  <li className="-mb-px mr-1">    
    <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/shelterapi/thedogs">Dogs</Link>
  </li>
  <li className="-mb-px mr-1">    
    <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/shelterapi/thecats">Cats</Link>
  </li>
  <li className="-mb-px mr-1">    
    <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/shelterapi">All Animals</Link>
  </li>
  
  <li className="mr-1">
  <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/notes">Notes</Link>
  </li>
  <li className="mr-1">
  <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/photos">Photos</Link>
  </li>
  <li className="mr-1">
  <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/shelterapi">Shelter API</Link>
  </li>
  {session && session.isAdmin && (
  <li className="mr-1">
  <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/users">Users</Link>
  </li>
)}
  {session && session.isAdmin && (
  <li className="mr-1">
    <a className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Tab</a>
  </li>
)}
  {session && (
  <li className="mr-1">
  
          <span className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold">
            {session.username}
          </span>
                
  </li>
)}

  {session ? (
          <button onClick={() => signOut()}>Log out</button>
        ) : (
          <button
            onClick={() => {
              router.push("/api/auth/signin");
            }}
          >
            Sign in
          </button>
        )}
</ul>
    
  );

}

export default Navbar;

