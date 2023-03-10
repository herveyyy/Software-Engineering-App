
import React, { useState, useEffect} from 'react';
import {
  getDocs,
  collection,
  doc,
  setDoc,
  deleteDoc
} from 'firebase/firestore';
import { database } from '../../firebaseConfig';
import UpdateInfoForm from './UpdateInfoForm';
const databaseReference = collection(database, 'SoftwareEngineers');
function DataTable() {

  const [fireData, setFireData] = useState([]);
  const [userInfo, setUserInfo] = useState(null)
  const [show, toggleShow] = useState(false);

  //show update modal
  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);

  const handleOpenModalUpdate = (x) => {
    setUserInfo(x);
    setIsModalOpenUpdate(true);
  };

  const handleCloseModalUpdate = () => {
    setIsModalOpenUpdate(false);
  };
  //getdata
  const getData = async () => {
    const response = await getDocs(databaseReference);
    const data = response.docs.map((data) => {
      return { ...data.data(), id: data.id };
    });
    setFireData(data);
  };
//delete
  const handleDelete = async (id) => {
    try {
      console.log('Deleting document with id', id);
      await deleteDoc(doc(databaseReference, id)); 
      console.log('Document with id', id, 'successfully deleted!');
    getData();
    } catch (error) {
      console.error('Error deleting document:', error);
    }
   
  };
//print
  const handlePrint = () => {
    console.log("Sdas")
    toggleShow(!show);
    if(show == true){
      window.print();
      window.location.reload(true)
    }
    
  };
  //render table data

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Engineers Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email Address
            </th>
            <th scope="col" className="px-6 py-3">
              Skills
            </th>
            <th scope="col" className="px-6 py-3">
              <span></span>
            </th>
          </tr>
        </thead>
        <tbody>
          {fireData.map((data) => {
            return (
              <tr
                key={data.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.engineerName}
                </th>
                <td className="px-6 py-4">{data.emailAddress}</td>
                <td className="px-6 py-4">
                  <ul className="list-disc list-inside">
                    {data.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </td>
                {!show && <td className="px- py-4 flex flex-col-2">
                  <div>
                   <a 
                   onClick={() => handleDelete(data.id)}
                   className="text-red-800 hover:text-red-500 cursor-pointer ">
                    Delete
                  </a>
                  </div>
                  <div>
                   <a 
                  onClick={() => handleOpenModalUpdate(data)}
                   className="text-green-800 hover:text-green-500 cursor-pointer px-5">
                    Edit
                  </a>
                  </div>
                </td>}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t justify-center ">
        <div className='px-2'>
<button 
onClick={() => handlePrint()}
className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Print</span>
</button>
</div>
<div className='px-2'>
<button 
onClick={() => getData()}
className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className=" w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  <span>Display Data</span>
</button>
</div>
</div>
     <UpdateInfoForm isOpen={isModalOpenUpdate} onClose={handleCloseModalUpdate} userInfo={userInfo} />
    </div>
  );
}
export default DataTable;