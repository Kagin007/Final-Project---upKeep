import React, {useEffect, useState} from "react"
//import { Fragment } from "react";
import ChooseRole from "./wizard/ChooseRole";
import CreateUserAccount from "./wizard/CreateUserAccount";
import CleanerComplete from "./wizard/CleanerComplete";
import PayRate from "./wizard/PayRate";
import HomeOwnerComplete from "./wizard/HomeOwnerComplete";
import CreatePropertyListing from "./wizard/CreatePropertyListing";
import  SelectCity from "./wizard/SelectCity";
import UploadProfilePhoto from "./wizard/UploadProfilePhoto"
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
  <CreateUserAccount increment={increment} decrement={decrement} setUserData={setUserData} userData={userData} />,
  <SelectCity increment={increment} decrement={decrement}/>,
  <PayRate increment={increment} decrement={decrement} setUserData={setUserData} userData={userData}/>,
  <UploadProfilePhoto increment={increment} decrement={decrement} setUserData={setUserData} userData={userData}/> ,
  <CleanerComplete increment={increment}/>
]

const homeOwnersBucket = [
<CreateUserAccount increment={increment} decrement={decrement} setUserData={setUserData}  userData={userData} />,
<CreatePropertyListing increment={increment} decrement={decrement} propertyData={propertyData} setPropertyData={setPropertyData} />,
<HomeOwnerComplete increment={increment}/>
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
        
        {pageNumber < 0 ? <ChooseRole pageNumber={pageNumber} roleSelected={setUserSelected} userSelected={userSelected} increment={increment} setUserData={setUserData}  userData={userData}/> : userSelected && userSelected.length !== 0 && wizards[userSelected][pageNumber]}

      </header>
      <main className="modal-content">
      </main>
    </section>
    );
  };
  
  
  export default SignUpWizard
 