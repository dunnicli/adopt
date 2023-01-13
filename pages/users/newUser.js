import Head from "next/head";
import { useState } from "react";
import Router from "next/router";
import { toast, ToastContainer } from "react-nextjs-toast";

export default function NewUser() {
  const [formData, setFormData] = useState({});

  async function saveUser(e) {
    toast.notify(`User is saving!`);
    e.preventDefault();
    const response = await fetch("/api/users/newUser", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    toast.remove();
    return await response.json(), await Router.push("/users");
  }

  return (
    <div>
      <Head>
        <title>Create New User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <p>&nbsp;</p>
        <div className="page-nav">
          <h3>Create New User</h3>
        </div>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p>
            <b>Username</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="username"
              name="title"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Password</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Email Address</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>First Name</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Last Name</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Active</b>
            <br />
            <input
              type="checkbox"
              className="form-checkbox"
              name="active"
              defaultChecked={false}
              onChange={(e) =>
                setFormData({ ...formData, active: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          
          <p>
            <b>Is Admin?</b>
            <br />
            <input
              type="checkbox"
              className="form-checkbox"
              name="isAdmin"
              defaultChecked={false}
              onChange={(e) =>
                setFormData({ ...formData, isAdmin: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Is Editor?</b>
            <br />
            <input
              type="checkbox"
              className="form-checkbox"
              name="isEditor"
              defaultChecked={false}
              onChange={(e) =>
                setFormData({ ...formData, isEditor: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Is Adder?</b>
            <br />
            <input
              type="checkbox"
              className="form-checkbox"
              name="isAdder"
              defaultChecked={false}
              onChange={(e) =>
                setFormData({ ...formData, isAdder: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Is Partner?</b>
            <br />
            <input
              type="checkbox"
              className="form-checkbox"
              name="isPartner"
              defaultChecked={false}
              onChange={(e) =>
                setFormData({ ...formData, isPartner: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>    
          <p>
            <b>Notes</b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="notes"
              id=""
              cols="40"
              rows="5"
              placeholder="Notes"
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
            />
          </p>
          
          <p>&nbsp;</p>
          <ToastContainer />
          <p>
            <button
              onClick={saveUser}
              className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg"
            >
              Add User
            </button>
          </p>
        </form>
      </main>
    </div>
  );
}
