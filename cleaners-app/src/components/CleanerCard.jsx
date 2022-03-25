import Button from "./Button";
import Review from "./Review";
import Star from "./Star";
import { useState } from "react";
import classNames from "classnames";
import InputForm from "./InputForm";
import SelectProperties from "./SelectProperties";
import axios from "axios";

const CleanerCard = props => {
  const {
    user,
    imgurl,
    pay_rate,
    average_rating,
    rating_count,
    onOpen,
    top_comment,
    properties,
    bookingdate,
    selectedDate,
  } = props;

  const submitHandler = e => {
    e.preventDefault();
    //make axios post here to make the reservation
  };
  const [booking, setBooking] = useState(false);
  const clickHandler = () => {
    setBooking(prev => !prev);
  };

  const todayDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = `${yyyy}-${mm}-${dd}`;
    return today;
  };
  const articleClasses = classNames("cleaner__card__article", {
    "cleaner__card__booking-selected": booking,
  });

  return (
    <article className={articleClasses}>
      <div className="cleaner__card cleaner__card__front">
        <div className="cleaner__card__top">
          <header>
            <figure className="user">
              <a href="#">
                <img className="user-photo" src={imgurl} alt="user_photo" />
                <figcaption className="user-caption">
                  {user.first_name}'s Profile
                </figcaption>
              </a>
            </figure>
            <h2>
              {user.first_name} {user.last_name}
            </h2>
          </header>
          <div className="cleaner__card__middle">
            <h5>Top Review</h5>
            {top_comment}
          </div>

          <main>
            <div>
              <h3 className="cleaner__card--payrate">${pay_rate} CAD / hr</h3>
              <p className="cleaner__card--transport">
                <strong>{user.email}</strong>
              </p>
            </div>
            <figure className="cleaner__card--message">
              <i className="fa-solid fa-message"></i> Message
            </figure>
          </main>
        </div>
        <br />
        <footer className="cleaner__card__bottom">
          <a onClick={onOpen}>
            {average_rating.rating__avg}
            <Star size="16px" />({rating_count} reviews)
          </a>
          <Button onClick={clickHandler}>Book Now!</Button>
        </footer>
      </div>
      <div className="cleaner__card cleaner__card__back">
        <header onClick={clickHandler}>
          <i class="fa-solid fa-xmark modal-exit"></i>
        </header>
        <main className="cleaner__card__back__main">
          <div>
            <figure className="user">
              <a href="#">
                <img className="user-photo" src={imgurl} alt="user_photo" />
                <figcaption className="user-caption">
                  {user.first_name}'s Profile
                </figcaption>
              </a>
            </figure>
            <h2>
              {user.first_name} {user.last_name}
            </h2>
          </div>
          <form onSubmit={submitHandler} className="cleaner__card__bookingform">
            <input type="hidden" name={user.id} value={user.id} />
            <SelectProperties properties={properties} dark />
            <InputForm
              type="date"
              dark
              inputValue={selectedDate || todayDate()}
            />
            <Button>Confirm Booking</Button>
          </form>
        </main>
      </div>
    </article>
  );
};
export default CleanerCard;
