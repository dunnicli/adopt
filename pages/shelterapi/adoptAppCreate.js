import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import Router from "next/router";
import { signOut, useSession } from "next-auth/react";
import { toast, ToastContainer } from "react-nextjs-toast";
//import axios from "axios";


export default function AdoptAppCreate() {
  const { data: session } = useSession();
  let myid;
  
  if (session) 
    myid = session.id; 
  else
    myid = 0;

  const [formData, setFormData] = useState({});

    const name = formData.name;
    const adopter_id = myid; 
    const street = formData.street;
    const city = formData.city;
    const province = formData.province;
    const postal = formData.postal;
    const homephone = formData.homephone;
    const cellphone = formData.cellphone;
    const employer = formData.employer;
    const workphone = formData.workphone;
    const cancontact = formData.cancontact;
    const email = formData.email;
    const nameAnimal = formData.nameAnimal;
    const whatKindAnimal = formData.whatKindAnimal;
    const notes = formData.notes;
    const reasonReturn = formData.reasonReturn;
    const petsPast = formData.petsPast;
    const petsNow = formData.petsNow;
    const petsVaxed = formData.petsVaxed;
    const petsAcceptNew = formData.petsAcceptNew;
    const whereDuringDay = formData.whereDuringDay;
    const housebreaking = formData.housebreaking;
    const whatFood = formData.whatFood;
    const whatExercise = formData.whatExercise;
    const travelHotel = formData.travelHotel;
    const sentBack = formData.sentBack;
    const housingStatus = formData.housingStatus;
    const secureYard = formData.secureYard;
    const movingSoon = formData.movingSoon;
    const yourFamily = formData.yourFamily;
    const insideDog = formData.insideDog;
    const anyAllergies = formData.anyAllergies;
    const disciplineStyle = formData.disciplineStyle;
    const budget = formData.budget;
    const commentsQuestions = formData.commentsQuestions;
    const twoRefs = formData.twoRefs;
    const publishStatus = formData.publishStatus;


    
    //
    let formstuff = {
      
            name,
            street,
            city,
            province,
            postal,
            homephone,
            cellphone,
            employer,
            workphone,
            cancontact,
            email,
            nameAnimal,
            whatKindAnimal,
            notes,
            adopter_id,
            reasonReturn,
            petsPast,
            petsNow,
            petsVaxed,
            petsAcceptNew,
            whereDuringDay,
            housebreaking,
            whatFood,
            whatExercise,
            travelHotel,
            sentBack,
            housingStatus,
            secureYard,
            movingSoon,
            yourFamily,
            insideDog,
            anyAllergies,
            disciplineStyle,
            budget,
            commentsQuestions,
            twoRefs,
            publishStatus,

    };
  
  

  async function saveApp(e) {
    toast.notify(`Application is saving!`);
    e.preventDefault();
    const response = await fetch(`https://shelter.spcapv.net/adopt/adoptAppCreate/`, {
    //console.log(JSON.stringify(formstuff));
    //const response = await fetch(`http://127.0.0.1:8000/adopt/adoptAppCreate/`, {
        method: "POST",
        body: JSON.stringify(formstuff),
        //mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
    });
    
    
    toast.remove();
    return await response.json(), await Router.push(`/shelterapi/myapps/?key=${myid}`);
  }

  return (
    <div>
      <Head>
        <title>New Adoption Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
    <div className="p-2 rounded-md">
        <p>{myid}</p>
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
            <b>Colonia and City</b>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Colonia and City"
              name="city"
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>State / Province</b>
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
            <b>Notes (private - not sent with app)</b>
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
          <p>
            <b>What reasons would cause you to return the pet to us?:</b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="reasonReturn"
              id=""
              cols="40"
              rows="2"
              placeholder="reason here..."
              onChange={(e) =>
                setFormData({ ...formData, reasonReturn: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Have you had pets in the past? If so, please describe. 
            Why are they no longer with you?</b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="petsPast"
              id=""
              cols="40"
              rows="2"
              placeholder="Past pets here ..."
              onChange={(e) =>
                setFormData({ ...formData, petsPast: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Please list pets you currently have in your home. 
            Include the following information in your list. 
            Dogs, cats comments on personality of each animal.  
            Are your pets spayed/neutered? If no, please explain.</b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="petsNow"
              id=""
              cols="40"
              rows="2"
              placeholder="Current pets here ..."
              onChange={(e) =>
                setFormData({ ...formData, petsNow: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Are your pets up-to-date on vaccinations?  *The 
            name and phone number of your veterinarian are 
            mandatory*</b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="petsVaxed"
              id=""
              cols="40"
              rows="4"
              placeholder="Vaccinations yes or no.  Vet Info ..."
              onChange={(e) =>
                setFormData({ ...formData, petsVaxed: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Would your pets accept a new dog or cat? What exposure 
            have they had with other pets in and out of your 
            home? What is their behaviour like with other animals?</b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="petsAcceptNew"
              id=""
              cols="40"
              rows="4"
              placeholder="Will your pets accept a new family member ..."
              onChange={(e) =>
                setFormData({ ...formData, petsAcceptNew: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Where will the pet you are applying to adopt be 
            kept during the day or when no one is at home? 
            Where will it sleep? Where will it be when you are 
            at home?</b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="whereDuringDay"
              id=""
              cols="40"
              rows="4"
              placeholder="Where will your pet be when you are at 
              work, when no one is home, at night.  Where will it sleep?"
              onChange={(e) =>
                setFormData({ ...formData, whereDuringDay: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Have you ever housebroken a puppy or dog? How would 
            you approach housebreaking a dog? Please explain in 
            detail.  We do not know if they have been housebroken.
          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="housebreaking"
              id=""
              cols="40"
              rows="4"
              placeholder="Housebreaking experience.."
              onChange={(e) =>
                setFormData({ ...formData, housebreaking: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>What will you feed your pet?  If a commercial food 
            which brand?
          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="whatFood"
              id=""
              cols="40"
              rows="2"
              placeholder="Type of food here ..."
              onChange={(e) =>
                setFormData({ ...formData, whatFood: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>If it is a dog, what kind of exercise will the 
            dog receive and how frequent??
          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="whatExercise"
              id=""
              cols="40"
              rows="2"
              placeholder="Exercise here ..."
              onChange={(e) =>
                setFormData({ ...formData, whatExercise: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>If you travel, what arrangements do you make 
            for the care of your pets?
          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="travelHotel"
              id=""
              cols="40"
              rows="2"
              placeholder="Travel arrangements here ..."
              onChange={(e) =>
                setFormData({ ...formData, travelHotel: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Have you ever relinquished a pet to a shelter or 
            rescue, or rehomed it? * If yes, please explain the 
            circumstances.
          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="sentBack"
              id=""
              cols="40"
              rows="2"
              placeholder="Ever sent back to shelter ..."
              onChange={(e) =>
                setFormData({ ...formData, sentBack: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>HOUSING INFORMATION: Do you own or rent?  Is it a 
            house or apartment or condo? If renting, how long
             have you lived at this address? *If renting, 
             please provide landlord contact information

          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="housingStatus"
              id=""
              cols="40"
              rows="4"
              placeholder="House or apartment or condo ..."
              onChange={(e) =>
                setFormData({ ...formData, housingStatus: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>If you are getting a dog, do you have a securely 
            fenced yard? Small dog proof? Jumping dog proof?
              What type of fencing? 
          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="secureYard"
              id=""
              cols="40"
              rows="2"
              placeholder="Secure yard here ..."
              onChange={(e) =>
                setFormData({ ...formData, secureYard: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Are you planning on moving within the next months/years? 
          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="movingSoon"
              id=""
              cols="40"
              rows="2"
              placeholder="Moving soon?? ..."
              onChange={(e) =>
                setFormData({ ...formData, movingSoon: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>YOUR FAMILY:  First name and age of each adult in your home? 
            First name and age of each child in the home?  
          Is everyone living in your home agreeable to having a dog/cat?
          How would you describe the activity level of your 
          household? i.e. quiet, structured, busy, hectic etc... 
          
          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="yourFamily"
              id=""
              cols="40"
              rows="4"
              placeholder="First name and age each resident.  Who is in the house? ..."
              onChange={(e) =>
                setFormData({ ...formData, yourFamily: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Will it be an inside or outside dog / cat?
          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="insideDog"
              id=""
              cols="40"
              rows="2"
              placeholder="Inside dog or outside only?  Same applies 
              to cats ..."
              onChange={(e) =>
                setFormData({ ...formData, insideDog: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Does anyone in your home have allergies? 
            Please describe.
          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="anyAllergies"
              id=""
              cols="40"
              rows="2"
              placeholder="Anybody have allergies?"
              onChange={(e) =>
                setFormData({ ...formData, anyAllergies: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>What forms of discipline do you feel are 
            appropriate for training or modifying behaviour in a 
            dog?  Are you familiar with rewards-based training methods 
            that do not involve physical force or dominance? 
          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="disciplineStyle"
              id=""
              cols="40"
              rows="4"
              placeholder="Discipline style here ..."
              onChange={(e) =>
                setFormData({ ...formData, disciplineStyle: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>How much do you think you have to budget for expenses for 
            the dog / cat on a yearly basis? Can you afford it?
            
          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="budget"
              id=""
              cols="40"
              rows="2"
              placeholder="Annual costs.  Food, vet, etc..."
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Comments or Questions? Please feel free to include any 
            information that you feel we should know about you, your 
            family, your experience with pets.
            
          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="commentsQuestions"
              id=""
              cols="40"
              rows="4"
              placeholder="Comments or Questions?"
              onChange={(e) =>
              setFormData({ ...formData, commentsQuestions: e.target.value })
              }
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <b>Please provide us with at least two references in 
            addition to your vet. Please provide full name, telephone 
            number(s) and relationship for all references.            
          </b>
            <br />
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              name="twoRefs"
              id=""
              cols="40"
              rows="4"
              placeholder="Two references please."
              onChange={(e) =>
              setFormData({ ...formData, twoRefs: e.target.value })
              }
            />
          </p>

          <p>&nbsp;</p>
          <div className="label">
              <label><b>Application Submission Status:</b></label>
              <br />
            </div>
            <div>
            <select id="publishStatus" 
            name="publishStatus"
            defaultValue="Draft"
            onChange={(e) =>
                setFormData({ ...formData, publishStatus: e.target.value })
              }
            >
            <option value="">Select Here</option>
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
            </select>
            </div>
          
            <p>&nbsp;</p>
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
        </div>
        <div className="p-2 rounded-md">      
              <h1 className="text-1xl font-bold">Take your time filling out the App!</h1>
              <p>&nbsp;</p>
              <ul className="list-disc">
              <li>Save it any time and come back later<br />&nbsp;</li>
              <li>By default you are in draft mode<br />&nbsp;</li>
              <li>When you are done - changing the setting above the save 
              button to publish<br />&nbsp;</li>
              <li>When you set your app to publish that will trigger 
              us to review it.<br />&nbsp;</li>
              <li>Good luck and thank you for your willingness to adopt!<br />&nbsp;</li>

              </ul>

              <p>&nbsp;</p>
          <p>&nbsp;</p>
          <h1 className="text-2xl font-black">HOW THIS WORKS:</h1>
            <p>
            Once you have determined the specific animal you wish 
            to adopt, you are ready to start on this Adoption Application.
            </p>
            <p>&nbsp;</p>

            
            <h1 className="text-1xl font-black">Dogs and Cats - Mexico and USA Residents:</h1>
            <p>&nbsp;</p>
            <ul className="list-disc">
            <li>
            If you want to adopt one of our dogs or cats, and you 
            are a resident of Mexico or the United States, use this 
            Adoption Application.
            </li>
            </ul>
            
            <p>&nbsp;</p>
            <h1 className="text-1xl font-black">Dogs - Canada Residents:</h1>
            <p>&nbsp;</p>
            <ul className="list-disc">
            <li>
            If you are a resident of Canada and you want to adopt 
            one of our dogs, do not use this form.  Please use the PVCA Adoption 
            Application linked below.  You can download the form, 
            fill it out and email it to us at spcapv@gmail.com.
            <br />&nbsp;
            </li>
            <li>
            <Link href="https://spcapvr.com/wp-content/uploads/2022/08/ADOPTION-APPLICATION.pdf">
            <u><b>Canada PVCA Addoption Application - Dogs - Download</b></u>
            </Link>
            <br />&nbsp;
            </li>
              <li>    
              <h1 className="text-1xl font-black">Cats - Canada Residents:</h1>            
            If you are in Canada and want to adopt one of 
            our cats, use this online Adoption Application.  
            </li>
            </ul>
            <p>&nbsp;</p>

            <h1 className="text-1xl font-black">Adoption Fees</h1>
            <p>&nbsp;</p>
            <ul className="list-disc">
            <li>Adoption Fees for Dogs:<br />
            Mexico: $3,000 pesos<br />
            US and Canada: $550 USD<br />&nbsp;</li>
            
            <li>Adoption fee for Cats:<br />
            US and Canada: $150 USD<br />&nbsp;</li>
            <li>Note* Adoption fees may change without prior notice.</li>
            </ul>
            <p>&nbsp;</p>

            <p>Please be thorough on your application and submit it for
            review.  Save it and come back to it later if you need to.  Remember 
            your password so you can come back to it later.
            </p>
            <p>&nbsp;</p>
            <ul className="list-disc">
            <li>Once your application has been reviewed, we will 
            be in contact. Please allow us a few days of review 
            before expecting to hear from us. Be aware that 
            there may be additional contact required, such as a 
            home visit before the adoption is approved. 
            Please understand that we want to make sure this is 
            a perfect fit for you as well as our rescue.
            <br />&nbsp;</li>

            <li>We will guide you through the transport process if 
            necessary and provide you with all the necessary 
            veterinary records regarding vaccinations, etc.
            <br />&nbsp;</li>

            <li>
            You will also need to agree to the terms of our 
            ADOPTION CONTRACT. Important to note that if any of 
            the terms of the contract are not honored it will 
            be considered a breach of contract, invalidating it 
            and allowing for retrieval of the animal back to the 
            SPCA PV.
            <br />&nbsp;</li>
            </ul>

              <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          

              </div>      
        </div>
      </main>
    </div>
  );
}
