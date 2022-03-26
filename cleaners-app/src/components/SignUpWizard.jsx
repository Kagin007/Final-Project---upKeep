import React, { useEffect, useState } from "react";
//import { Fragment } from "react";
import ChooseRole from "./wizard/ChooseRole";
import CreateUserAccount from "./wizard/CreateUserAccount";
import CleanerComplete from "./wizard/CleanerComplete";
import CleanerListing from "./wizard/CleanerListing";
import HomeOwnerComplete from "./wizard/HomeOwnerComplete";
import CreatePropertyListing from "./wizard/CreatePropertyListing";
import EnterLocation from "./wizard/EnterLocation";
import UploadProfilePhoto from "./wizard/UploadProfilePhoto";
// import CleanersList from "./CleanersList";
// import Review from "./Review";

const SignUpWizard = (props) => {
  const [pageNumber, setPageNumber] = useState(-1);
  const [userSelected, setUserSelected] = useState("");

  useEffect(() => {
    setUserData({ ...userData, role: userSelected });
  }, [userSelected]);

  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    username: ""
  });

  const [propertyData, setPropertyData] = useState({
    title: "",
    description: "",
    address: "",
    photo: ""
  });

  const [locationData, setLocationData] = useState({
    address: "",
    city: "",
    province: "",
    longitude: 0,
    latitude: 0
  });


  const [memberData, setMemberData] = useState({
    pay_rate: "",
    role: "",
    location:"",
    imgurl: "",
    user: null
  });


  const decrement = () => {
    setPageNumber((pageNumber) => --pageNumber);
  };
  const increment = () => {
    setPageNumber((pageNumber) => ++pageNumber);
  };

  const cleanersBucket = [
    <CreateUserAccount
      increment={increment}
      decrement={decrement}
      setUserData={setUserData}
      userData={userData}
    />,
    <EnterLocation increment={increment} 
    decrement={decrement} 
    locationData={locationData} 
    setLocationData={setLocationData} />,

    <CleanerListing
      increment={increment}
      decrement={decrement}
      memberData={memberData}
      setMemberData={setMemberData}

    />,
    <UploadProfilePhoto
      increment={increment}
      decrement={decrement}
      setUserData={setUserData}
      userData={userData}
    />,
    <CleanerComplete increment={increment} />,
  ];

  const homeOwnersBucket = [
    <CreateUserAccount
      increment={increment}
      decrement={decrement}
      setUserData={setUserData}
      userData={userData}
    />,
    <CreatePropertyListing
      increment={increment}
      decrement={decrement}
      propertyData={propertyData}
      setPropertyData={setPropertyData}
    />,
    <HomeOwnerComplete increment={increment} />,
  ];

  const wizards = {
    cleaner: cleanersBucket,
    owner: homeOwnersBucket,
  };

  return (
    <section className="modal">
      <header className="modal-header">
        <div onClick={props.onClose}>
          <i className="fa-solid fa-xmark modal-exit"></i>
        </div>

        {pageNumber < 0 ? (
          <ChooseRole
            pageNumber={pageNumber}
            roleSelected={setUserSelected}
            userSelected={userSelected}
            increment={increment}
            setUserData={setUserData}
            userData={userData}
          />
        ) : (
          userSelected &&
          userSelected.length !== 0 &&
          wizards[userSelected][pageNumber]
        )}
      </header>
      <main className="modal-content"></main>
    </section>
  );
};

export default SignUpWizard;
