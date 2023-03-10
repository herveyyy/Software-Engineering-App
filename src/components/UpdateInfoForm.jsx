import React,{ useState, useEffect , useRef} from "react";
import {
  doc,
  setDoc,
  collection
} from 'firebase/firestore';
import { database } from "../../firebaseConfig";
import CustomModal from "./CustomModal";

export default function UpdateInfoForm({isOpen, onClose, userInfo}) {
    const [engineerName, setEngineerName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState("");
    const databaseRef = collection(database, 'SoftwareEngineers');
    const [skillCount, setSkillCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
   
      const handleInfo = () => {
        if(isOpen === true){
            setEngineerName(userInfo.engineerName)
        }else{
            alert("Somethings wrong")
        }
        
  
    };
    const handleOpenModal = () => {
       
      setIsModalOpen(true);
  
    };
    const removeSkill = (skillToRemove) => {
        setSkills(skills.filter((skill) => skill !== skillToRemove));
      };
    const handleCloseModal = () => {
     
      setIsModalOpen(false);
     
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userInfo)
      if(skills.length != 0){
        updateDocument(userInfo.id);
        console.log({engineerName, emailAddress, skills}, "Changes Saved.");
        handleOpenModal()
        setEngineerName("");
        setEmailAddress("");
        setSkills([]);
        
      }else{
        setSkills([""]);
        updateDocument(userInfo.id);
        console.log({engineerName, emailAddress, skills}, "Changes Saved.");
        handleOpenModal()
        setEngineerName("");
        setEmailAddress("");

      }
      
      };
      const handleAddSkill = () => {
        if(skillCount < 10  && newSkill != ""){
        setSkills([...skills, newSkill]);
        setNewSkill("");
        setSkillCount(skillCount + 1);
      };}
    
    //update
  const updateDocument = async (id) => {
    try {
      const docRef = doc(databaseRef, id);
      await setDoc(docRef, {
        engineerName: engineerName,
        emailAddress: emailAddress,
        skills: skills
      }, { merge: true });
      console.log('Document with id', id, 'successfully updated!');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };
//   useEffect(() => {
    
//   });



  return (
    <>
      {isOpen && (
        <div  className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50 "></div>
          <div className="bg-white rounded-lg overflow-hidden max-w-md mx-auto z-10">
            <div className="p-4 flex justify-between items-center bg-gray-100">
              <h2 className="text-lg font-medium">🖋Edit Applicants Information</h2>
              <button onClick={onClose}>
                <svg
                  className="w-6 h-6 text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
            <form onSubmit={handleSubmit}>
        <div className="mb-4">
        <label
          htmlFor="engineersName"
          className="block text-gray-700 font-medium mb-2"
        >
          Engineer's Name
        </label>
        <input
          id="engineersName"
          type="text"
          className="border border-gray-400 p-2 w-full rounded"
          placeholder="Enter Engineer's Name"
          value={engineerName}
          onChange={(e) => setEngineerName(e.target.value, userInfo.engineerName)}
          required
        />
        </div>
       <div className="mb-4">
        <label
          htmlFor="emailAddress"
          className="block text-gray-700 font-medium mb-2"
        >
          Email Address
        </label>
        <input
          id="emailAddress"
          type="text"
          className="border border-gray-400 p-2 w-full rounded"
          placeholder="Enter Email address"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          required
        />
       </div>
       <div className="mb-4">
        <label
          htmlFor="skills"
          className="block text-gray-700 font-medium mb-2"
        >
          Skills
        </label>
        <div className="flex">
          <input
            id="skills"
            type="text"
            className="border border-gray-400 p-2 w-full rounded"
            placeholder="Skills"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150 ease-in-out ml-2"
            onClick={handleAddSkill}
          >
            +
          </button>
        </div>
        <ul className="list-disc list-inside">
          {
          
          skills.map((skill) => (
            <li key={skill}>{skill}
            <button
             className="px-2 mx-4 shadow-lg rounded-md bg-red-500 text-white font-bold hover:bg-red-800" onClick={() => removeSkill(skill)}>-</button></li>
          ))}
        </ul>
       </div>
       <div className="text-right">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150 ease-in-out"
        >
          Submit
        </button>
        </div>
      </form>
            </div>
          </div>
          <CustomModal isOpen={isModalOpen} onClose={() => handleCloseModal()} title={"🦊Firebase"} details={"Information Updated"}/>
        </div>
      )}
    </>
  );
}

