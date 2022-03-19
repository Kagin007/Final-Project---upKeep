import Button from "./Button";
import Star from "./Star";

const CleanerCard = props => {
  return (
    <section className="cleaner__card">
      <div className="cleaner__card__top">
        <header>
          <figure className="user">
            <a href="#">
              <img class="user-photo" src={props.imgURL} alt="user_photo" />
              <figcaption className="user-caption">Winona's Profile</figcaption>
            </a>
          </figure>
          <h2>Winona Williams</h2>
        </header>
        <div>
          <h5>Top Review</h5>
          <h6 className="cleaner__card--review-user">
            James Dean{" "}
            {[...Array(props.rating || 5)].map((e, i) => (
              <Star size="12px" />
            ))}
          </h6>
          <p className="cleaner__card--review">
            Winona is spectacular and very efficient at her job. We always use
            her service to clean our apartment when we don't have time to do it
            ourselves. She responds quickly and is always on time!
          </p>
        </div>

        <main>
          <h3>${props.payRate || 40} CAD / hr</h3>
          <figure className="cleaner__card--message">
            <i className="fa-solid fa-message"></i>
          </figure>
        </main>
      </div>
      <br />
      <div className="cleaner__card__bottom">
        <a href="#">
          4.5
          <Star size="16px" />
          (20 reviews)
        </a>

        <Button onClick={() => props.onClick()}>Book Now!</Button>
      </div>
    </section>
  );
};
export default CleanerCard;
