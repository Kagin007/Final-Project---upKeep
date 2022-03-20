import Button from "./Button";
import Review from "./Review";
import Star from "./Star";

const CleanerCard = props => {
  return (
    <section className="cleaner__card">
      <div className="cleaner__card__top">
        <header>
          <figure className="user">
            <a href="#">
              <img class="user-photo" src={props.imgURL} alt="user_photo" />
              <figcaption className="user-caption">
                {props.firstName || "Winona"}'s Profile
              </figcaption>
            </a>
          </figure>
          <h2>Winona Williams</h2>
        </header>
        <div className="cleaner__card__middle">
          <h5>Top Review</h5>
          <Review
            reviewMessage="Winona is spectacular and very efficient at her job. We always use her
        service to clean our apartment when we don't have time to do it
        ourselves. She responds quickly and is always on time!"
            rating={5}
            reviewerName="James Dean"
          />
        </div>

        <main>
          <div>
            <h3 className="cleaner__card--payrate">
              ${props.payRate || 60} CAD / hr
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
      <div className="cleaner__card__bottom">
        <a href="#">
          {props.avgRating || 4.5}
          <Star size="16px" />({props.numRatings || 20} reviews)
        </a>

        <Button onClick={() => props.onClick()}>Book Now!</Button>
      </div>
    </section>
  );
};
export default CleanerCard;
