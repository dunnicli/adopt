import Link from "next/link";
//import styles from './Navbar.module.css';
//import "./Navbar.css";
import { signOut, useSession, signIn } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
//import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";

function Navbar() {
    const { data: session } = useSession();
    const router = useRouter();
    //const [session, loading] = useSession();
    return (
<>  

<nav className="flex items-center justify-between flex-wrap bg-white-500 p-6">

  <div className="flex items-center flex-shrink-0 text-black mr-6">
  <Link href="/">
    <img src="/images/paw2.png" width="54" height="40" alt=""></img>
    </Link>
     &nbsp; 
     <Link href="/">
    <span className="font-semibold text-blue-700 text-xl tracking-tight">SPCA de PV</span>
    </Link>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
    <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/">Home</Link>
    <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/shelterapi/thedogs">Dogs</Link>
    <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/shelterapi/thecats">Cats</Link>
    
    {session && (
      <Link 
      className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
      href={`/shelterapi/myapps/?key=${session.id}`}>My Apps</Link>
    )}

    {   session && session.isAdmin && (
        <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/manager">Manager</Link>
  
)}
  {session && (
  
  
          <span className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold">
            {session.email}
          </span>
                
  
)}

{session ? (
          <button onClick={() => signOut({ callbackUrl: '/' })}>Log out</button>
        ) : (
          <button onClick={() => signIn(undefined, { callbackUrl: '/' })}>Log In</button>  
        )}
        
    &nbsp; &nbsp; &nbsp;    
 {!session && (
  <button onClick={() => { router.push("/register");
            }}>
            Register
          </button>
  )}     



    </div>
    <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>

</>

);

}

export default Navbar;
