import React, {  useState } from "react";
import Button from "./Components/Button";
import TextInput from "./Components/TextInput";
import './App.css';
import  {db}  from "./Config/Firebase";
import {  doc, getDoc } from "firebase/firestore";
import List from "./Components/List";


function App() {
  const [serialNumber, setSerialNumber] = useState("");
  const [data, setData] = useState(null);
 console.log(data);
 
  const handleQuery = async () => {
    try {
       const contactDoc = doc(db, "test", serialNumber);

       getDoc(contactDoc).then((doc) => {
         if (doc.exists()) {
           const contactData = doc.data();
           setData([{...contactData, id: doc.id}]);


         } else {
           console.log("No such document!");
         }
        }) 
    .catch((error) => {
        console.log("Error getting document:", error);
      });
    } catch (e) {
      console.log(e);
    }
   
}


  return (
    <div className="App">
      <div className="container">
        {/* <h1>{serialNumber}</h1> */}
        <TextInput
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
        />
        <Button onClick={handleQuery} label="QUERY" />
        {data ? (
          data.map(({
            id, name, email , roll_no
          })=>{
            return <List key={id} id={id} name={name} email={email} roll_no={roll_no}/>
          })
        
        ) : (
          <h1>No Data</h1>
        )}
      </div>
    </div>
  );
}

export default App;
