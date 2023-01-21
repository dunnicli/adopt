import Head from "next/head";
import { useState } from "react";
import Router from "next/router";
import { toast, ToastContainer } from "react-nextjs-toast";
//import axios from "axios";


export default function AdoptAppCreate() {
  const [formData, setFormData] = useState({});

  async function saveApp(e) {
    toast.notify(`Application is saving!`);
    e.preventDefault();
    //const response = await fetch(`https://shelter.spcapv.net/adopt/adoptAppCreate`, {
    console.log(JSON.stringify(formData));
    const response = await fetch(`http://127.0.0.1:8000/adopt/adoptAppCreate/`, {
        method: "POST",
        body: JSON.stringify(formData),
        //mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
    });
    
    
    toast.remove();
    return await response.json(), await Router.push("/shelterapi/cats");
  }

  return (
    <div>
      <Head>
        <title>New Adoption Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <p>&nbsp;</p>
        <div className="page-nav">
          <h3 className="text-4xl font-bold">New Adoption Application</h3>
        </div>

        <form 
        onSubmit={saveApp}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p>
            <b>Your First and Last Name</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First and Last Name"
              name="name"
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>          
          <p>
            <b>Email Address</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email Address"
              name="email"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Name of the Animal You Want to Adopt</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Animal Name"
              name="nameAnimal"
              required
              onChange={(e) =>
                setFormData({ ...formData, nameAnimal: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Street Address</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Street Address"
              name="street"
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>City</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="City"
              name="city"
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Province</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Province or State"
              name="province"
              onChange={(e) =>
                setFormData({ ...formData, province: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Postal Code</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Postal Code"
              name="postal"
              onChange={(e) =>
                setFormData({ ...formData, postal: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Home Phone</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Home Phone"
              name="homephone"
              onChange={(e) =>
                setFormData({ ...formData, homephone: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Cell Phone</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Cell Phone"
              name="cellphone"
              onChange={(e) =>
                setFormData({ ...formData, cellphone: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Employer</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Employer"
              name="employer"
              onChange={(e) =>
                setFormData({ ...formData, employer: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Work Phone</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Work Phone"
              name="workphone"
              onChange={(e) =>
                setFormData({ ...formData, workphone: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <div className="label">
              <label>Can we contact you at work?</label>
              <br />
            </div>
            <div>
            <select id="cancontact" 
            name="editAppCancontact"
            onChange={(e) =>
                setFormData({ ...formData, cancontact: e.target.value })
              }
            >
            <option value="">Select Yes or No</option>
            <option value="YES">Yes</option>
            <option value="NO">No</option>
            </select>
            </div>
           




          <p>&nbsp;</p>
          <p>
            <b>What kind of animal are you looking for?</b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="whatKindAnimal"
              id=""
              cols="40"
              rows="5"
              placeholder="I want a pet that will ... Take your time."
              onChange={(e) =>
                setFormData({ ...formData, whatKindAnimal: e.target.value })
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
              placeholder="Notes here..."
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
            />
          </p>
          
          <p>&nbsp;</p>
          <ToastContainer />
          <p>
            <button
              type="submit"
              className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg"
            >
              Save Application
            </button>
          </p>
        </form>
      </main>
    </div>
  );
}
