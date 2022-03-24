import React from "react";
import Profile from "../OwnerProfile";

const OwnerProfileModal = (props) => {
  const avatarStyle = {
    backgroundColor: "#98b4aa",
    width: "100px",
    height: "100px",
  };

  return (
    <section className="modal">
      <header className="modal-header">
        <div onClick={props.onClose}>
          <i className="fa-solid fa-xmark modal-exit"></i>
        </div>
        <Profile />
      </header>
      <main className="modal-content"></main>
    </section>
  );
};

export default OwnerProfileModal;
