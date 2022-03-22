import React, {useState} from "react"
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
 
  


const roleSelected = (userType) => {
setUserSelected(userType)
}

const decrement = () => {
  setPageNumber(pageNumber => --pageNumber)

}
const increment = () => {
  setPageNumber(pageNumber => ++pageNumber)
}

const cleanersBucket = [
  <CreateAccount increment={increment} decrement={decrement}/>,
  <ChooseCity increment={increment} decrement={decrement}/>,
  <PayRate increment={increment} decrement={decrement}/>,
  <UploadPhoto increment={increment} decrement={decrement}/>,
  <CleanerProfile increment={increment}/>
]

const homeOwnersBucket = [
<CreateAccount increment={increment} decrement={decrement}/>,
<PostListing increment={increment} decrement={decrement}/>,
<PropertyPosted increment={increment}/>
]

const wizards = {
  cleaner: cleanersBucket,
  homeowner: homeOwnersBucket
}

  return (

    <section className="modal">
      <header className="modal-header">
        <div onClick={props.onClose}>
          <i className="fa-solid fa-xmark modal-exit"></i>
        </div>
        
        {pageNumber < 0 ? <IAmA roleSelected={roleSelected} increment={increment} /> : wizards[userSelected][pageNumber]}

      </header>
      <main className="modal-content">
      </main>
    </section>
    );
  };
  
  
  export default SignUpWizard
 