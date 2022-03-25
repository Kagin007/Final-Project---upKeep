import Button from "./Button";
import Review from "./Review";
import Star from "./Star";

const CleanerCard = props => {
  
  const {
    first_name,
    last_name,
    imgurl,
    pay_rate,
    avg_rating,
    rating_count,
    onOpen,
    onClick,
    // tranportMode,
    top_comment,
  } = props;

  // const reviewObjects = reviews.map(review => {
  //   if (reviewArray.length > 0) {
  //     const reviewArray = review.split(",");
  //     const reviewObj = {
  //       date: reviewArray[0],
  //       rating: reviewArray[1],
  //       message: reviewArray[2],
  //     };
  //     return reviewObj;
  //   }
  //   return review;
  // });

  // console.log(reviewObjects);
  return (
    <article className="cleaner__card">
      <div className="cleaner__card__top">
        <header>
          <figure className="user">
            <a href="#">
              <img className="user-photo" src={imgurl} alt="user_photo" />
              <figcaption className="user-caption">
                {first_name}'s Profile
              </figcaption>
            </a>
          </figure>
          <h2>
            {first_name} {last_name}
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
              <strong>Mode of Transportation:</strong>{" "}
              {/* {tranport_Mode || "Vehicle"} */}
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
          {avg_rating}
          <Star size="16px" />({rating_count} reviews)
        </a>

        <Button onClick={() => onClick()}>Book Now!</Button>
      </footer>
    </article>
  );
};
export default CleanerCard;
