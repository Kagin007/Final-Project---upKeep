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
              <img className="user-photo" src={props.imgurl} alt="user_photo" />
              <figcaption className="user-caption">
                {props.firstname}'s Profile
              </figcaption>
            </a>
          </figure>
          <h2>
            {props.firstname} {props.lastname}
          </h2>
        </header>
        <div className="cleaner__card__middle">
          <h5>Top Review</h5>
          {/* <Review key={props.topReview.id} {...props.topReview} /> */}
        </div>

        <main>
          <div>
            <h3 className="cleaner__card--payrate">
              ${props.payrate} CAD / hr
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
        <button onClick={props.onOpen}>
          {props.avgrating}
          <Star size="16px" />({props.numratings} reviews)
        </button>

        <Button onClick={() => props.onClick()}>Book Now!</Button>
      </footer>
    </article>
  );
};
export default CleanerCard;
