import ReservationCard from "./ReservationCard";
import { useState, useEffect } from "react";
import axios from "axios";
const ReservationsList = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const [memberReservations, setMemberReservations] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (!user) {
        alert("Please login to see your reservations.");
      } else {
        axios
          .get(`/api/reservations/${user.id}`)
          .then(res => {
            console.log("reservationData:", res.data);
            setMemberReservations(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }, 400);
  }, []);

  if (!memberReservations) {
    return (
      <div className="center">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    );
  }

  return (
    <div>
      {" "}
      {memberReservations.map((reservation, i) => {
        return <ReservationCard key={i} {...reservation} />;
      })}
    </div>
  );
};

export default ReservationsList;
