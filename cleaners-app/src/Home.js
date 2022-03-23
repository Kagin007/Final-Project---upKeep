import React, { useState } from "react";
import "./Home.css";
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";
import CleanersList from "./components/CleanersList";
import Backdrop from "./components/Backddrop";
import ReviewsModal from "./components/ReviewsModal";
import useModal from "./hooks/useReviewsModal";

function Home(props) {
  const { reviewModalOpen, toggleReviewModal } = useModal();
  const [users, setUsers] = useState([]);

  return (
    <div className="Home">
      <SearchForm submitHandler={props.submitHandler} />
      <CleanersList onOpen={toggleReviewModal} />
      {reviewModalOpen && <Backdrop onClose={toggleReviewModal} />}
      {reviewModalOpen && <ReviewsModal onClose={toggleReviewModal} />}
    </div>
  );
}

export default Home;
