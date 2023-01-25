import { useState, useRef } from "react";
import Head from "next/head";
import Router from "next/router";
import { useSession } from "next-auth/react";



export default function EditApp({ data }) {
  const { data: session } = useSession();
  let myid;
  
  if (session) 
    myid = session.id; 
  else
    myid = 0;

  const formRef = useRef();
  const [disable, setDisable] = useState(false);
  async function saveApp() {
    setDisable(true);
    const { editAppName, editAppEmail, editAppStreet, editAppProvince,  
        editAppNameAnimal, editAppCity, editAppPostal, editAppHomephone, 
      editAppCellphone, editAppEmployer, editAppWorkphone, editAppCancontact, 
      editAppwhatKindAnimal } =
      formRef.current;
    
    const id = parseInt(data.id);
    const name = editAppName.value;
    const email = editAppEmail.value;
    const nameAnimal = editAppNameAnimal.value;
    const street = editAppStreet.value;
    const city = editAppCity.value;
    const province = editAppProvince.value;
    const postal = editAppPostal.value;
    const homephone = editAppHomephone.value;
    const cellphone = editAppCellphone.value;
    const employer = editAppEmployer.value;
    const workphone = editAppWorkphone.value;
    const cancontact = editAppCancontact.value;
    const whatKindAnimal = editAppwhatKindAnimal.value;   
    
    console.log("cancontact:", cancontact);  

    let formData = {
      
      name,
      email,
      nameAnimal,
      street,
      city,
      province,
      postal,
      homephone,
      cellphone,
      employer,
      workphone,
      cancontact,
      whatKindAnimal,
      
    };

    const response = await fetch(`http://127.0.0.1:8000/adopt/update_adopt_app/${id}/`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    setDisable(false);
    return await response.json(), await Router.push("/shelterapi/appList");
    
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
      {data.adopter_id == myid && (
        <title>Edit: {data?.name} </title>
      )}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data.adopter_id == myid && (
      <main className="main">
        <div>
          <div>
            <p>&nbsp;</p>
            <div className="page-nav">
              <h3>Edit Application</h3>
            </div>
          </div>
          <form
            ref={formRef}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="label">
              <label>Full Name</label>
              <br />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={data?.name}
                name="editAppName"
                type="text"
              />
              <p>&nbsp;</p>
            </div>

            <div className="label">
              <label>Animal Name</label>
              <br />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={data?.nameAnimal}
                name="editAppNameAnimal"
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
                defaultValue={data?.email}
                name="editAppEmail"
                type="text"
              />
              <p>&nbsp;</p>
            </div>
            <div>
            <div className="label">
              <label>Street</label>
              <br />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={data?.street}
                name="editAppStreet"
                type="text"
              />
              <p>&nbsp;</p>
            </div>
            </div>

            <div className="label">
              <label>City</label>
              <br />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={data?.city}
                name="editAppCity"
                type="text"
              />
              <p>&nbsp;</p>
            </div>
            <div className="label">
              <label>Province</label>
              <br />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={data?.province}
                name="editAppProvince"
                type="text"
              />
              <p>&nbsp;</p>
            </div>
            <div className="label">
              <label>Postal Code</label>
              <br />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={data?.postal}
                name="editAppPostal"
                type="text"
              />
              <p>&nbsp;</p>
            </div>
            <div className="label">
              <label>Home Phone</label>
              <br />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={data?.homephone}
                name="editAppHomephone"
                type="text"
              />
              <p>&nbsp;</p>
            </div>
            <div className="label">
              <label>Cell Phone</label>
              <br />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={data?.cellphone}
                name="editAppCellphone"
                type="text"
              />
              <p>&nbsp;</p>
            </div>
            <div className="label">
              <label>Employer</label>
              <br />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={data?.employer}
                name="editAppEmployer"
                type="text"
              />
              <p>&nbsp;</p>
            </div>
            <div className="label">
              <label>Work Phone</label>
              <br />
            </div>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={data?.workphone}
                name="editAppWorkphone"
                type="text"
              />
              <p>&nbsp;</p>
            </div>
            
            <div className="label">
              <label>Can we contact you at work?</label>
              <br />
            </div>
            <div>
            <select id="cancontact" 
            name="editAppCancontact"
            defaultValue={data?.cancontact}
            >
            <option value="">Select Yes or No</option>
            <option value="YES">Yes</option>
            <option value="NO">No</option>
            </select>
            <p>&nbsp;</p>
            </div>
           

            <div className="label">
              <label>What kind of animal?</label>
              <br />
            </div>
            <div>
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="editAppwhatKindAnimal"
              cols="40"
              rows="5"
              defaultValue={data?.whatKindAnimal}
              />
          </div>
            
          </form>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={disable}
            onClick={() => saveApp()}
          >
            Save
          </button>
        </div>
      </main>
      )}
      <footer className="text-center font-bold text-xl">
        <b>SPCAPV 2023</b>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
    const id = context.params.id;
    const res = await fetch(`http://127.0.0.1:8000/adopt/detail_adopt_app/${id}`)
    //const res = await fetch(`https://shelter.spcapv.net/adopt/dog_detail/${id}`)
    const data = await res.json()
      
    return {
      //props: { data: JSON.parse(JSON.stringify(res)) },
      props:  { data } ,
    };
  }
  