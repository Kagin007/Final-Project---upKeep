import React, {useEffect, useState} from "react"
//import { Fragment } from "react";
import IAmA from "./wizard/IAmA";
import CreateAccount from "./wizard/CreateAccount";
import CleanerProfile from "./wizard/CleanerProfile";
import PayRate from "./wizard/PayRate";
import PropertyPosted from "./wizard/PropertyPosted";
import PostListing from "./wizard/PostListing";
import ChooseCity from "./wizard/ChooseCity";
import UploadPhoto from "./wizard/UploadPhoto"
// import CleanersList from "./CleanersList";
// import Review from "./Review";

  


 const SignUpWizard = props => {
  const [pageNumber, setPageNumber] = useState(-1)
  const [userSelected, setUserSelected] = useState("")

useEffect(()=> {
setUserData({...userData, role: userSelected})
}, [userSelected])

  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    pay_rate: "",
    picture_url: ""
  });

  const [propertyData, setPropertyData] = useState({
    title: "",
    description: "",
    address: "",
    photo: ""
  })
  

 
  




const decrement = () => {
  setPageNumber(pageNumber => --pageNumber)

}
const increment = () => {
  setPageNumber(pageNumber => ++pageNumber)
}

const cleanersBucket = [
  <CreateAccount increment={increment} decrement={decrement} setUserData={setUserData} userData={userData} />,
  <ChooseCity increment={increment} decrement={decrement}/>,
  <PayRate increment={increment} decrement={decrement} setUserData={setUserData} userData={userData}/>,
  <UploadPhoto increment={increment} decrement={decrement} setUserData={setUserData} userData={userData}/> ,
  <CleanerProfile increment={increment}/>
]

const homeOwnersBucket = [
<CreateAccount increment={increment} decrement={decrement} setUserData={setUserData}  userData={userData} />,
<PostListing increment={increment} decrement={decrement} propertyData={propertyData} setPropertyData={setPropertyData} />,
<PropertyPosted increment={increment}/>
]

const wizards = {
  cleaner: cleanersBucket,
  owner: homeOwnersBucket
}



  return (

    <section className="modal">
      <header className="modal-header">
        <div onClick={props.onClose}>
          <i className="fa-solid fa-xmark modal-exit"></i>
        </div>
        
        {pageNumber < 0 ? <IAmA pageNumber={pageNumber} roleSelected={setUserSelected} userSelected={userSelected} increment={increment} setUserData={setUserData}  userData={userData}/> : userSelected && userSelected.length !== 0 && wizards[userSelected][pageNumber]}

      </header>
      <main className="modal-content">
      </main>
    </section>
    );
  };
  
  
  export default SignUpWizard
 