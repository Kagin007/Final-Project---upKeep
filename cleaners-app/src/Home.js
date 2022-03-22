import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";
import CleanersList from "./components/CleanersList";
import Backdrop from "./components/Backddrop";
import ReviewsModal from "./components/ReviewsModal";
import useModal from "./hooks/useReviewsModal";


function Home() {
  const backend_url = "http://127.0.0.1:3000/api/v1/users";

  useEffect(() => {
    axios
      .get(backend_url)
      .then(res => setUsers(res.data))
      .catch(error => console.log(error));
  }, []);
  const { reviewModalOpen, toggleReviewModal } = useModal();
  const [users, setUsers] = useState([]);

  return (
    <div className="Home">
      <SearchForm />
      <CleanersList onOpen={toggleReviewModal} />
      {reviewModalOpen && <Backdrop onClose={toggleReviewModal} />}
      {reviewModalOpen && <ReviewsModal onClose={toggleReviewModal} />}
    </div>
  );
}

export default Home;
