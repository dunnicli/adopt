import { useState, useRef } from "react";
import Head from "next/head";
import Router from "next/router";
import prisma from "../../../lib/prisma.ts";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  if (user.isAdmin == true) {
    user.admin = "on";
  }
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}

export default function EditUser({ user }) {
  const formRef = useRef();
  const [disable, setDisable] = useState(false);

  async function editUser() {
    setDisable(true);
    const {
      editUserFirstName,
      editUserLastName,
      editUserEmail,
      editUserIsAdmin,
      editUserActive,
      editUserNotes,
      editUserIsEditor,
      editUserIsAdder,
      editUserIsPartner,
    } = formRef.current;
    //const name = editUserName.value;
    const firstName = editUserFirstName.value;
    const lastName = editUserLastName.value;
    const email = editUserEmail.value;
    const isAdmin = editUserIsAdmin.checked;
    const active = editUserActive.checked;
    const notes = editUserNotes.value;
    const isEditor = editUserIsEditor.checked;
    const isAdder = editUserIsAdder.checked;
    const isPartner = editUserIsPartner.checked;

    const id = parseInt(user.id);

    //
    let formData = {
      firstName,
      lastName,
      email,
      isAdmin,
      active,
      notes,
      isEditor,
      isAdder,
      isPartner,      
    };

    await fetch(`/api/users/updateUser/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      //id: parseInt(id),
      //title: title,
      //notebody: notebody,
      //author: author
    });
    setDisable(false);
    Router.push("/users");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Edit: {user?.firstName + " " + user?.lastName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div>
          <div>
            <p>&nbsp;</p>
            <div className="page-nav">
              <h3>Edit User</h3>
            </div>
          </div>
          <form
            ref={formRef}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="label">
              <label>First Name</label>
              <br />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={user?.firstName}
                name="editUserFirstName"
                type="text"
              />
              <p>&nbsp;</p>
            </div>

            
            <div className="label">
              <label>Last Name</label>
              <br />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={user?.lastName}
                name="editUserLastName"
                type="text"
              />
              <p>&nbsp;</p>
            </div>

            <div className="label">
              <label>Email</label>
              <br />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={user?.email}
                name="editUserEmail"
                type="text"
              />
              <p>&nbsp;</p>
            </div>

            <div className="label">
              <label>Active</label>
              <br />
            </div>
            <div>
              <input
                className="form-checkbox"
                defaultChecked={user?.active}
                name="editUserActive"
                type="checkbox"
              />
              <p>&nbsp;</p>
            </div>

            <div className="label">
              <label>Notes</label>
              <br />
            </div>
            <div>
              <textarea
                defaultValue={user?.notes}
                name="editUserNotes"
                type="textarea"
                rows="4"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              ></textarea>
              <p>&nbsp;</p>
            </div>

            
            <div className="label">
              <label>Is Administrator</label>
              <br />
            </div>
            <div>
              <input
                className="form-checkbox"
                defaultChecked={user?.isAdmin}
                name="editUserIsAdmin"
                type="checkbox"
              />
              <p>&nbsp;</p>
            </div>

            <div className="label">
              <label>Is Editor</label>
              <br />
            </div>
            <div>
              <input
                className="form-checkbox"
                defaultChecked={user?.isEditor}
                name="editUserIsEditor"
                type="checkbox"
              />
              <p>&nbsp;</p>
            </div>

            <div className="label">
              <label>Is Adder</label>
              <br />
            </div>
            <div>
              <input
                className="form-checkbox"
                defaultChecked={user?.isAdder}
                name="editUserIsAdder"
                type="checkbox"
              />
              <p>&nbsp;</p>
            </div>

            <div className="label">
              <label>Is Partner (PVCA)</label>
              <br />
            </div>
            <div>
              <input
                className="form-checkbox"
                defaultChecked={user?.isPartner}
                name="editUserIsPartner"
                type="checkbox"
              />
              <p>&nbsp;</p>
            </div>

            
          </form>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={disable}
            onClick={() => editUser()}
          >
            Save
          </button>
        </div>
      </main>
      <footer className="text-center font-bold text-xl">
        <b>Powered by John Dunnicliffe</b>
      </footer>
    </div>
  );
}
