import Link from "next/link";
//import styles from './Navbar.module.css';
//import "./Navbar.css";
import { signOut, useSession, signIn } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";


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
  
  {   session && session.isAdmin && (
  <li className="mr-1">
    <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/manager">Manager</a>
  </li>
)}
  {session && (
  <li className="mr-1">
  
          <span className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold">
            {session.email}
          </span>
                
  </li>
)}

  {session ? (
          <button onClick={() => signOut({ callbackUrl: '/' })}>Log out</button>
        ) : (
          <button onClick={() => signIn(undefined, { callbackUrl: '/' })}>Log In</button>  
        )}
        
    &nbsp; &nbsp; &nbsp;    
 {!session && (
  <button
            onClick={() => {
              router.push("/register");
            }}
          >
            Register
          </button>
  )}     

</ul>
    
  );

}

export default Navbar;

