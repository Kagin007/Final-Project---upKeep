import Button from "./Button";
import Review from "./Review";
import Star from "./Star";

const CleanerCard = props => {
  return (
    <article className="cleaner__card">
      <div className="cleaner__card__top">
        <header>
          <figure className="user">
            <a href="#">
              <img class="user-photo" src={props.imgURL} alt="user_photo" />
              <figcaption className="user-caption">
                {props.firstName}'s Profile
              </figcaption>
            </a>
          </figure>
          <h2>
            {props.firstName} {props.lastName}
          </h2>
        </header>
        <div className="cleaner__card__middle">
          <h5>Top Review</h5>
          <Review {...props.topReview} />
        </div>

        <main>
          <div>
            <h3 className="cleaner__card--payrate">
              ${props.payRate} CAD / hr
            </h3>
            <p className="cleaner__card--transport">
              <strong>Mode of Transportation:</strong>{" "}
              {props.tranportMode || "Vehicle"}
            </p>
          </div>
          <figure className="cleaner__card--message">
            <i className="fa-solid fa-message"></i> Message
          </figure>
        </main>
      </div>
      <br />
      <footer className="cleaner__card__bottom">
        <a href="#">
          {props.avgRating}
          <Star size="16px" />({props.numRatings} reviews)
        </a>

        <Button onClick={() => props.onClick()}>Book Now!</Button>
      </footer>
    </article>
  );
};
export default CleanerCard;
