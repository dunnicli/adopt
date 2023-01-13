import Link from "next/link";
import Head from "next/head";
import prisma from "../../lib/prisma.ts";
//import { moment } from 'moment'
let moment = require('moment');
export default function UsersPage({ data }) {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Users</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <p>&nbsp;</p>
        <div className="page-nav">
          <Link href="/users/newUser">Add New User</Link>
        </div>
        <p>&nbsp;</p>
        <h1 className="text-2xl font-black">All Users</h1>
        <p>&nbsp;</p>

        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <b>{item.username}</b>
              <br />
              {item.email}
              <br />
              <p>Active: {item.active && "Yes"}</p>
              <p>Administrator: {item.isAdmin && "Yes"}</p>
              <p>Created: {moment(item.createdAt).format("LLL")}</p>

              <div className="page-nav">
                <Link href={`/users/userDetails/${item.id}`}>
                  <u>Details</u>
                </Link>
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
  const users = await prisma.user.findMany();

  return {
    props: { data: JSON.parse(JSON.stringify(users)) },
    
  };
}
