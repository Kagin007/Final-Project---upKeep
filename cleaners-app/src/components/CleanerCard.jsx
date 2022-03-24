import Button from "./Button";
import Review from "./Review";
import Star from "./Star";

const CleanerCard = props => {
  
  const {
    firstname,
    lastname,
    imgurl,
    payrate,
    avgrating,
    numratings,
    onOpen,
    onClick,
    tranportMode,
    reviews,
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
                {firstname}'s Profile
              </figcaption>
            </a>
          </figure>
          <h2>
            {firstname} {lastname}
          </h2>
        </header>
        <div className="cleaner__card__middle">
          <h5>Top Review</h5>
          {/* <Review key={props.topReview.id} {...props.topReview} /> */}
        </div>

        <main>
          <div>
            <h3 className="cleaner__card--payrate">${payrate} CAD / hr</h3>
            <p className="cleaner__card--transport">
              <strong>Mode of Transportation:</strong>{" "}
              {tranportMode || "Vehicle"}
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
          {Math.round(avgrating * 100) / 100}
          <Star size="16px" />({numratings} reviews)
        </a>

        <Button onClick={() => onClick()}>Book Now!</Button>
      </footer>
    </article>
  );
};
export default CleanerCard;
